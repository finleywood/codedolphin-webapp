import React from 'react'
import LoginForm from '../components/auth/LoginForm'

function Login() {
    return (
        <div className="w-full h-screen flex flex-col items-center justify-center bg-gray-100">
            <img src="/assets/png/CodeDolphinFilledBorderedTextTrans.png" alt="CodeDolphin" width="230" height="180" />
            <br />
            <LoginForm />
        </div>
    )
}

export default Login
