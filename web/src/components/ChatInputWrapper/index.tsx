import React from 'react';

import './style.css';

const ChatInputWrapper = ({ children }:any) => {
  return (
    <div className='chat-input-wrapper'>
      {children}
    </div>
  );
}

export default ChatInputWrapper;
