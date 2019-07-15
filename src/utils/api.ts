import {MainSettings, TypeModules} from './main-settings';
import {Endpoint} from './endpoint';

interface IApi {
  messages?: boolean;
  site?: boolean;
}
export class Api {
  endpoints: {[key: string]: Endpoint} = {};
  settings: MainSettings;
  messages: any;
  realMethods: string[] = ['on', 'off', 'connect', 'disconnect'];

  constructor(services: IApi) {
    this.settings = new MainSettings();

    for (const service in services) {
      this.endpoints.messages = new Endpoint(
        this.settings.getSocketUrl('messages'),
        this.settings.getSocketConfig()
      );
    }

    this.setProxy();
  }

  setProxy() {
    const endpoint = this.endpoints.messages;
    const realMethods = this.realMethods;
    this.messages = new Proxy(
      {},
      {
        get(target: {}, prop: string): any {
          console.log('handler', target, prop);
          if (realMethods.includes(prop)) {
            return (event: string, callback: CallableFunction) => {
              const ev = endpoint.io[prop](event, callback);
              console.log('event', event, prop, endpoint, ev);
              return ev;
            };
          }
          return async (...args) => {
            const result = await endpoint.call('messages', prop, ...args);
            console.log('result', result);
            return result;
          };
        }
      }
    );
  }
}
