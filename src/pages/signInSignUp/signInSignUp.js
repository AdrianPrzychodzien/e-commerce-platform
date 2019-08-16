import React from 'react';
import SignIn from '../../components/sign-in/SignIn';
import SignUp from '../../components/sign-up/SignUp';
import './signInSignUp.scss'

const signInSignUp = () => (
  <div className='SignIn_SignUp'>
    <SignIn />
    <SignUp />
  </div>
)

export default signInSignUp