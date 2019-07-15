import React from 'react';

import ChatInput from '../ChatInput';
import ChatInputWrapper from '../ChatInputWrapper';
import Chatbox from '../Chatbox';
import ChatHistoryWrapper from '../ChatHistoryWrapper';
import ChatHistory from '../ChatHistory';
import './style.css';
import ChatMessage from '../ChatMessage';

import {api, list} from '../../Connect';
import { messages } from "../../../../constants/routes";



export default class Chat extends React.Component{

  constructor(props) {
    super(props);
    this.init();
  }

  init = () => {
    api.messages.on(messages.add, (data) => {
      console.log('add from back data', data);
      const messagesState = this.state.messages;
      messagesState.push({value: data.message, isOwner: true})
      this.setState({
        messages: messagesState
      });
    });
  }

  state = {
    messages: []
  };

  handleNewOwnerMessage = async (value: any) => {
    await api.messages.add({message: value, date: Date.now()})
  };

  render() {
    return (
      <div className='chat'>
        <Chatbox>
          <ChatHistoryWrapper>
            <ChatHistory>
              {
                this.state.messages.map((message, index) => (
                  <ChatMessage
                    key={index}
                    message={message.value}
                    isOwner={message.isOwner}
                  />
                ))
              }
            </ChatHistory>
          </ChatHistoryWrapper>
          <ChatInputWrapper>
            <ChatInput
              handleSubmit={this.handleNewOwnerMessage}
            />
          </ChatInputWrapper>
        </Chatbox>
      </div>
    );
  }
};
