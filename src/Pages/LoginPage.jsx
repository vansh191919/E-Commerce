import React, { useState } from 'react'
import './CSS/LoginPage.css'
import { Link } from 'react-router-dom'

const LoginPage = () => {

 

  return (
    <div className='loginsignup'>
        <div className="login-container">
        <h1>Login</h1>
        <div className="login-fields">
          <input type="email" placeholder='Email Address'  />
          <input type="password" placeholder='Password' />

        </div>
        <div className="loginsignup-agree">
          <input type="checkbox" name='' id=''/>
          <p>By clicking continue, you agree to our Terms of Service and Privacy Policy.</p>
        </div>
        <button>Continue</button>
        <p className='login-signup'>Don't have an account? <span>Sign Up</span></p>
        </div>
      
    </div>
  )
}

export default LoginPage
