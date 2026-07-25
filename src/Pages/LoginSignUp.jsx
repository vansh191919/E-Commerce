import React, { useState } from 'react'
import './CSS/LoginSignUp.css'
import { Link } from 'react-router-dom'

const LoginSignUp = () => {

 


  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>Sign Up</h1>
        <div className="loginsignup-fields">
          <input type="text" placeholder='Your Name' />
          <input type="email" placeholder='Email Address' />
          <input type="password" placeholder='Password' />

        </div>
        <div className="loginsignup-agree">
          <input type="checkbox" name='' id='' />
          <p>By clicking continue, you agree to our Terms of Service and Privacy Policy.</p>
        </div>
        <button >Continue</button>
        <p className='loginsignup-login'>Already have and account? <Link to='/loginPage'><span>Login Here</span></Link></p>

      </div>
    </div>
  )
}

export default LoginSignUp
