import React, { useContext } from 'react';
import dog from '../img/dog.jpg';
import { AuthContext } from '../context/AuthContext';
import { ChatContext } from '../context/ChatContext';

const Message = ({message}) => {

  const {currentUser} = useContext(AuthContext)
  const {data} = useContext(ChatContext)

  console.log(message)
  return (
    <div className='message owner'>
      {/*
      <div className='messageInfo'>
        <img src={dog} alt='' />
        <span>just now</span>
      </div>
      <div className='messageContent'>
        <p>hello</p>
        <img src={dog} alt='' />
  </div>*/}
    </div>
  );
}

export default Message