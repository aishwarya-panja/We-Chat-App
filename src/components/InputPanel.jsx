import React from "react";
import { IoMdAttach } from "react-icons/io";
import { LuImagePlus } from "react-icons/lu";

const InputPanel = () => {
  return (
    <div className="input">
      <input type="text" placeholder="Type something..." />
      <div className="send">
        <LuImagePlus className="addImg"/>
        <input type="file" style={{ display: "none" }} id="file" />
        <label htmlFor="file">
          <IoMdAttach className="attach"/>
        </label>
        <button>Send</button>
      </div>
    </div>
  );
};

export default InputPanel;
