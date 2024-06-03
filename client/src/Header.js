import React, { useState } from 'react';
import logo from './assets/logo.png';
import Post from './assets/post.png';
import { Link } from 'react-router-dom';
import { UserAuth } from './Context/AuthContext';




export default function Header() {
    const {user, logOut, email } = UserAuth();
    const handleSignOut = async () => {
        try {
            await logOut();
            alert("logged out successfully")
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <header>
            <div className="logo">
                <img src={logo} alt="logo" />
                <Link to="/">Research.co</Link>
            </div>
            <nav>
                <div className='post'>
                   <Link to="/post"><img src={Post} alt="post"/></Link>   
                </div>
                <Link to="">News</Link>
                {user?.displayName ? <div className='user'>{user?.displayName}</div> : user?.email ? <div className='user'>{user?.email}</div> : <div></div>}
                {(user?.displayName || user?.email) ? <div onClick={handleSignOut} className='logout'>Logout</div> : <Link to="/login">Signin</Link>}

            </nav>
        </header>
    );
}