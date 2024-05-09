import React, { useContext } from 'react';
import { IoCameraSharp } from "react-icons/io5";
import { IoMdPersonAdd } from "react-icons/io";
import { MdMoreHoriz } from "react-icons/md";
import Messages from './Messages';
import InputPanel from './InputPanel' ;
import { ChatContext } from '../context/ChatContext';


const ChatSection = () => {
  const {data} = useContext(ChatContext);

  return (
    <div className='chatSection'>
      <div className='chatInfo'>
        <span>{data.user?.displayName}</span>
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
