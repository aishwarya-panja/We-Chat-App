import React, { useContext, useState } from "react";
import { IoMdAttach } from "react-icons/io";
import { LuImagePlus } from "react-icons/lu";
import { AuthContext } from "../context/AuthContext";
import { ChatContext } from "../context/ChatContext";

const InputPanel = () => {
  const [text, setText] = useState("");
  const [img, setImg] = useState(null) ;

  const {currentUser} = useContext(AuthContext)
  const {data} = useContext(ChatContext)


  const handleSend = () => {
    
  };

  return (
    <div className="input">
      <input type="text" placeholder="Type something..." onChange={e=>setText(e.target.value)} />
      <div className="send">
        <LuImagePlus className="addImg"/>
        <input type="file" style={{ display: "none" }} id="file" onChange={e=> setImg(e.target.files[0])} />
        <label htmlFor="file">
          <IoMdAttach className="attach"/>
        </label>
        <button onClick={handleSend}>Send</button>
      </div>
    </div>
  );
};

export default InputPanel;
