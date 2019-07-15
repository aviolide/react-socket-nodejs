import React, { useState } from 'react';

import './style.css';

const ChatInput = ({ handleSubmit }:any) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event:any) => {
    setInputValue(event.target.value);
  }

  const onSubmit = (event:any) => {
    event.preventDefault();

    handleSubmit(inputValue);
    setInputValue('');
  }

  return (
    <form onSubmit={onSubmit}>
      <input
        className='chat-input'
        placeholder='Digitar...'
        value={inputValue}
        onChange={handleInputChange}
      />
    </form>
  );
}

export default ChatInput;
