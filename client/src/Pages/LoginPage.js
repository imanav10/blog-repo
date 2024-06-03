import {useContext, useState} from "react";
import { Link } from 'react-router-dom';
import React from 'react';
import {GoogleButton} from 'react-google-button';
import './Login.css';
import { UserAuth } from '../Context/AuthContext';
import { useNavigate } from 'react-router-dom';



const Signin = () => {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [error, setError] = useState('');
    const { googleSignIn, user } = UserAuth();
    const navigate = useNavigate();
    const { signIn } = UserAuth();


    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('')
        try {
          await signIn(email, password)
          navigate('/')
        } catch (e) {
          setError(e.message)
          alert("Wrong credentials")
          console.log(e.message)
        }
    }
    const handleGoogleSignIn = async () => {
      try {
        await googleSignIn();
        navigate('/')
      } catch (error) {
        console.log(error);
      }
    };

    return (
        <div>
            <h1>Signin</h1>
            <form onSubmit={handleSubmit} className='login-form'>
                <label>Email Address</label>
                <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                />
                <label>Password</label>
                <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit" className='login-button'>Login</button>
            </form>
            <h6>Note: If not registered login using Google Account or Create new Account</h6>
            <div class='regist'>
                <p>Don't have account?
                    <span><Link to='/register'>Create Account</Link></span>
                </p>
            </div>
            <div className='Google py-4'>
                <GoogleButton onClick={handleGoogleSignIn} />
            </div>

        </div>
    );
}

export default Signin;