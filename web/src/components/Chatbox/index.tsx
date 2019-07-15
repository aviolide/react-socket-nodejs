import React from 'react';

import './style.css';

const Chatbox = ({ children }: any) => {
  return (
    <div className='chatbox'>
      {children}
    </div>
  );
}

export default Chatbox;
