import {Settings} from 'utils/settings';
import {messages} from '../../constants/routes';
import io from 'socket.io';
import {listeners} from './listeners';

export class Sockets {
  settings: Settings;
  list: {[key: string]: any} = {};
  listener: any;

  constructor(settings: Settings) {
    this.settings = settings;
    this.init();
  }

  add(socketId, socket) {
    this.list[socketId] = socket;
  }

  get(socketId) {
    return this.list[socketId];
  }

  init() {
    listeners.listen(messages.add, (data) => {
      const body = {isOk: true, ...data};
      for (const socketId in this.list) {
        new Promise((resolve) => {
          this.list[socketId].socket.emit(messages.add, body, (response) => {
            console.log('resp', response);
            resolve(response);
          });
        });
      }
    });
  }
}
