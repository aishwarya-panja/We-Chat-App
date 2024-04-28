import React from 'react';
import Woman from '../img/woman.jpg';

const ChatList = () => {
  return (
    <div className='chatList'>
      <div className='userChat'>
        <img src={Woman} alt=''></img>
        <div className='userChatInfo'>
          <span>Jane</span>
          <p>Hello</p>
        </div>
      </div>

      <div className='userChat'>
        <img src={Woman} alt=''></img>
        <div className='userChatInfo'>
          <span>Jane</span>
          <p>Hello</p>
        </div>
      </div>

      <div className='userChat'>
        <img src={Woman} alt=''></img>
        <div className='userChatInfo'>
          <span>Jane</span>
          <p>Hello</p>
        </div>
      </div>

    </div>
  );
};

export default ChatList ;
