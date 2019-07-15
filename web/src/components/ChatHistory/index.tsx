import React from 'react';

import './style.css';

const ChatHistory = ({ children }: any) => {
  return (
    <div className='chat-history'>
      {children}
    </div>
  );
}

export default ChatHistory;
