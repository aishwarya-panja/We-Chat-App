import React, { useState } from "react";
import { RiImageAddFill } from "react-icons/ri";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, storage, db } from "../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { setDoc, doc } from "firebase/firestore";
import { useNavigate, Link } from "react-router-dom";

const Register = () => {
  const [err, setErr] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const displayName = e.target[0].value; // extract/fetch all these values from the form fields when it is submitted
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];

    try {
      const res = await createUserWithEmailAndPassword(auth, email, password); //creates a new user account
      const storageRef = ref(storage, displayName); //initializes a storage reference using the display name

      const uploadTask = uploadBytesResumable(storageRef, file); // uploads the (new created) selected file to storage

      // Register three observers:
      uploadTask.on(
        // method provided by firebase to listen for events during file uploadation. It takes 2 arguments
        (error) => {
          setErr(true); // first argument
          console.log("err is:", err);
        },
        () => {
          // second argument is a function called when upload is successful
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            //retrieves the download URL of the uploaded file. This URL is used to access the file from wherever it's stored
            await updateProfile(res.user, {
              // updates the user's profile
              displayName,
              photoURL: downloadURL,
            });
            console.log("downloadURL");

            await setDoc(doc(db, "users", res.user.uid), {
              //adds user's info to Firestore database under "users" collection
              uid: res.user.uid,
              displayName,
              email,
              photoURL: downloadURL,
            });
            console.log("documentSet");

            //creates an empty document for the user under "userChats" collection in Firestore. used to store information about user's chats in the messaging app
            await setDoc(doc(db, "userChats", res.user.uid), {});
            console.log("user chats");
            console.log("navi");
            navigate("/"); // navigates to root url
          });
        }
      );
    } catch (error) {
      setErr(true);
    }
  };

  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">We Chat</span>
        <span className="title">Register</span>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Display Name" />
          <input type="email" placeholder="Email Id" />
          <input type="password" placeholder="Password" />
          <input style={{ display: "none" }} type="file" id="file" />
          <label htmlFor="file">
            <RiImageAddFill />
            <span>Add an Avatar</span>
          </label>
          <button>Sign Up</button>
          {err && <span>Oops! Something went wrong.</span>}
        </form>
        <p>
          Do you have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
