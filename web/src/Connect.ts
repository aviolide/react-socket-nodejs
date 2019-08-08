import { Api } from "../../src/utils/api";
import { messages } from "./routes";

class Connect{
  api: Api;
  messagesList: any[] = [];
  constructor(){
    this.api = new Api({messages: true});
  }
  init(){
    console.log('init socket');
    this.api.messages.on('connect', () => {
      console.log('connect front')

    });
    this.api.messages.on(messages.add, (data) => {
      console.log('add from back data', data);
      this.messagesList.push(data);
    });
  }
}

const connect = new Connect();
connect.init();
export const api = connect.api;
export const list = connect.messagesList;
