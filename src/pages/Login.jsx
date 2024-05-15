import React, {useState} from 'react';
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate, Link} from 'react-router-dom';
import {auth} from '../firebase' ;

const Login = () => {


  const [err, setErr] = useState(false);
  const navigate = useNavigate();


  const handleSubmit = async (e) => {
    e.preventDefault(); //prevents the default behavior of the form submission, which is to reload the page.
    const email = e.target[0].value; // extract/fetch the values of email & password from the form fields when it is submitted
    const password = e.target[1].value;

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/")
    } catch (error) {
      setErr(true);
      console.log(err) ;
    }
  };



  return (
    <div className='formContainer'>
        <div className='formWrapper'>
            <span className='logo'>We Chat</span>
            <span className='title'>Login</span>
            <form onSubmit={handleSubmit}>
                <input type='email' placeholder='Email Id' />
                <input type='password' placeholder='Password' />
                
                <button>Sign In</button>
                {err && <span>Oops! Something went wrong.</span>}
            </form>
            <p>You don't have an account? <Link to="/register">Register</Link></p>
        </div>
    </div>
  );
};

export default Login ;