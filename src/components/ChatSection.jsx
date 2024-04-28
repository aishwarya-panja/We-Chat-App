import React from 'react';
import { IoCameraSharp } from "react-icons/io5";
import { IoMdPersonAdd } from "react-icons/io";
import { MdMoreHoriz } from "react-icons/md";
import Messages from './Messages';
import InputPanel from './InputPanel' ;

const ChatSection = () => {
  return (
    <div className='chatSection'>
      <div className='chatInfo'>
        <span>Jane</span>
        <div className='chatIcons'>
          <IoCameraSharp size='25px'/>
          <IoMdPersonAdd size='25px'/>
          <MdMoreHoriz size='30px'/>
        </div>
      </div>
      <Messages/>
      <InputPanel/>
    </div>
  );
};

export default ChatSection ;
