import React from 'react';
import SignIn from '../../components/sign-in/SignIn';
import SignUp from '../../components/sign-up/SignUp';
import './signInSignUp.scss'

const SignInAndSignUpPage = () => (
  <div className='SignIn_SignUp'>
    <SignIn />
    <SignUp />
  </div>
)

export default SignInAndSignUpPage