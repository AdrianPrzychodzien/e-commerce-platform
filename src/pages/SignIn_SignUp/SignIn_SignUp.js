import React from 'react';
import SignIn from '../../components/sign-in/SignIn';
import SignUp from '../../components/sign-up/SignUp';
import './SignIn_SignUp.scss'

const SignIn_SignUp = () => (
  <div className='SignIn_SignUp'>
    <SignIn />
    <SignUp />
  </div>
)

export default SignIn_SignUp