import React, { useContext, useState } from "react";
import { collection, query, where, getDocs, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase";
import { AuthContext } from "../context/AuthContext";

const SearchBar = () => {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState(null);
  const [err, setErr] = useState(false);

  const {currentUser} = useContext(AuthContext)

  const handleSearch = async () => {   // searches for a username
    const q = query(
      collection(db, "users"),
      where("displayName", "==", "username")
    );

    try {   // to handle any potential errors that might occur during the database operation(seraching).
      const querySnapshot = await getDocs(q); // It retrieves a snapshot of the documents that match the query.
      querySnapshot.forEach((doc) => {
        setUser(doc.data());
      });
    } catch (err) {
      setErr(true);
    }
  };

  const handleKey = (e) => {   // this function triggers the handleSearch function when the Enter key is pressed.
    e.code === "Enter" && handleSearch();
  };

  const hanndleSelect = async () => {  // this will be triggered when the user selects a user from the search results.
    // check whether the group(chats collection in firestore) exists, if not, then create new one
    const combinedId =
    currentUser.uid > user.uid
      ? currentUser.uid + user.uid   // combines user IDs of current user and selected user to generate a unique identifier for their conversation.
      : user.uid + currentUser.uid;

      
      try{
        const res = await getDoc(doc(db, "chats", combinedId)) ;
        if(!res.exists()){
          // create a new chat document in the Firestore collection named "chats" with an empty array for messages
          await setDoc(doc,(db, "chats", combinedId), {messages: [] });


          //update user chats for both current user and selected user with respective information
          await updateDoc (doc(db, "userChats", currentUser.uid),{
            [combinedId+".userInfo"] : {
              uid:user.uid,
              displayName: user.displayName,
              photoURL: user.photoURL
            },
            [combinedId+".date"]: serverTimestamp()
          });

          await updateDoc (doc(db, "userChats", currentUser.uid),{
            [combinedId+".userInfo"] : {
              uid:currentUser.uid,
              displayName: currentUser.displayName,
              photoURL: currentUser.photoURL
            },
            [combinedId+".date"]: serverTimestamp()
          });
        }
      }catch (err) {}

      setUser(null);
      setUsername("")
  };
  

  return (
    <div className="search">
      <div className="searchForm">
        <input
          type="text"
          placeholder="Find a user"
          onKeyDown={handleKey}
          onChange={(e) => setUsername(e.target.value)}
          value={username}
        />
      </div>
      {err && <span>User not found!</span>}
      {user && <div className="userChat" onClick={hanndleSelect}>
        <img src={user.photoURL} alt="" />
        <div className="userChatInfo">
          <span>{user.displayName}</span>
        </div>
      </div>}
    </div>
  );
};
export default SearchBar;