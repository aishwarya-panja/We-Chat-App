import React, {useState} from 'react';
import Woman from '../img/woman.jpg';

const SearchBar = () => {
  const [username, setUsername] = useState("")
  const [user, setUser] = useState(null)
  const [err, setErr] = useState(false)
  return (
    <div className='search'>
      <div className='searchForm'>
        <input type='text' placeholder='Find a user' />
      </div>
      <div className='userChat'>
        <img src={Woman} alt='' />
        <div className='userChatInfo'>
          <span>Mia</span>
        </div>
      </div>
    </div>
  )
}

export default SearchBar ;