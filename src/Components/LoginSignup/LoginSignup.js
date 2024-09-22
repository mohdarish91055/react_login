import React from 'react'
import './style.css'
import user from '../Assets/user.png';
import email from '../Assets/email.png';
import padlock from '../Assets/padlock.png';
import {useState} from 'react';

const LoginSignup = () =>{
    const [action, setAction] = useState('Login');


    return(
        <div className='container'>
            <div className='header'>
                <div className='text'>{action}</div>
                <div className='underline'></div>
            </div>
            <div className='inputs'>
               {
                action==="Login"?<div></div>: <div className='input'>
                <img className = 'icon' src={user} alt=''/>
                <input type='text' placeholder='Name'/>
            </div>
               }
                <div className='input'>
                    <img className = 'icon' src={email} alt=''/>
                    <input type='email' placeholder='Email Id'/>
                </div>
                <div className='input'>
                    <img className = 'icon' src={padlock} alt=''/>
                    <input type='password' placeholder='Password'/>
                </div>
            </div>
           {
            action==="Login"? <div className='forgot-password'>forgot Password <span>Click Here!</span></div>:<div></div>
           }
            <div className='submit-container'>
                <div className={action==="Login"?"submit gray":"submit"} onClick={()=>{setAction("Sign Up")}}>Sign Up</div>
                <div className={action==="Sign Up"?"submit gray":"submit"} onClick={()=>{setAction("Login")}}>Login</div>
            </div>
        </div>
    )
}

export default LoginSignup;