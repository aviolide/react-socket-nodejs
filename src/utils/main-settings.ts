export type TypeModules = TypeModuleMessages;
export type TypeModuleMessages = 'messages';

import {configsPorts} from '../../configs/ports';
import {configsDatabase} from '../../configs/base';

export class MainSettings {
  public name: TypeModules;
  public configs: any;

  constructor(name?: any) {
    this.name = name;
    this.configs = configsPorts;
    this.configs.database = configsDatabase;
  }

  getSocketUrl(module: TypeModules) {
    return `ws://localhost:${this.configs[module].port}/`;
  }

  getSocketConfig(): SocketIOClient.ConnectOpts {
    return {
      transports: ['websocket']
    };
  }
}
