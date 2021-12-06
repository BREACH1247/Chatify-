import React from "react"

import { GoogleOutlined, FacebookOutlined } from '@ant-design/icons'

import { signInWithRedirect, GoogleAuthProvider,FacebookAuthProvider } from "firebase/auth"

import { authentication } from "../firebase"


export default function Login() {
  const signInWithGoogle = () => {
      const provider = new GoogleAuthProvider()
      signInWithRedirect(authentication,provider)
      .then((re)=>{
        console.log(re);
      })
      .catch((err)=>{
        console.log(err);
      })
  }
  const signInWithFaceBook = () => {
    const provider = new FacebookAuthProvider()
    signInWithRedirect(authentication,provider)
    .then((re)=>{
      console.log(re);
    })
    .catch((err)=>{
      console.log(err);
    })
}
  return (
    <div id='login-page'>
      <div id='login-card'>
        <h2>Welcome to Chatify</h2>

        <div
          className='login-button google'
          onClick={signInWithGoogle}
        >
          <GoogleOutlined /> Sign In with Google
        </div>

        <br/><br/>

        <div
          className='login-button facebook'
           onClick={signInWithFaceBook}
        >
          <FacebookOutlined /> Sign In with Facebook
        </div>
      </div>
    </div>
  )
}