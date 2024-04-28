import React from 'react';
import dog from '../img/dog.jpg';

const Message = () => {
  return (
    <div className='message owner'>
      <div className='messageInfo'>
        <img src={dog} alt='' />
        <span>just now</span>
      </div>
      <div className='messageContent'>
        <p>hello</p>
        <img src={dog} alt='' />
      </div>
    </div>
  )
}

export default Message