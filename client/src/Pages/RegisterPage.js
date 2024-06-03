import {Link} from 'react-router-dom';
import React, {useState} from "react";
import {GoogleButton} from 'react-google-button';
import './Login.css'
import { UserAuth } from '../Context/AuthContext';
import { auth } from '../firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

export default function RegisterPage() {
    const { googleSignIn, user } = UserAuth();
    const [email, setEmail] = useState('');
    const [password, setpassword] = useState('');
    const handleGoogleSignIn = async () => {
        try {
          await googleSignIn();
        } catch (error) {
          console.log(error);
        }
    };

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const userCredential = await createUserWithEmailAndPassword(auth, email, password);
          console.log(userCredential);
          const user = userCredential.user;
          localStorage.setItem('token', user.accessToken);
          localStorage.setItem('user', JSON.stringify(user));
          navigate("/");
        } catch (error) {
          console.error(error);
        }
    }
    
    return (
        <div>
            <form className="register" onSubmit={handleSubmit}>
                <h1 class="heading">Create Account</h1>
                <label>Email Address</label>
                <input type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}/>
                <label>Password</label>
                <input type="password"
                        required
                        value={password}
                        onChange={(e) => setpassword(e.target.value)}/>
                <button type="submit">Register</button>
                <div class='regist'>
                    <p>Already have account?
                        <span><Link to='/login'>SignIn</Link></span>
                    </p>
                </div>
                <div className='Google py-4'>
                    <GoogleButton onClick={handleGoogleSignIn} />
                </div>
            </form>
        </div>
    );
}