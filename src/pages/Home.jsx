import React from 'react';
import Sidebar from '../components/Sidebar';
import ChatSection from '../components/ChatSection';

const Home = () => {
  return (
    <div className='home'>
      <div className='container'>
        <Sidebar/>
        <ChatSection/>
      </div>
    </div>
  )
}

export default Home ;