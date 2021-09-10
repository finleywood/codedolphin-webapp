import React, { useState } from 'react'
import EmailCodeForm from '../components/auth/EmailCodeForm';
import RegisterForm from '../components/auth/RegisterForm'

function Register() {
    const [step, changeStep] = useState(1);
    const [user, changeUser] = useState({});

    if(step === 1)
        return (
            <div className="w-full h-screen flex flex-col items-center justify-center bg-gray-100">
                <img src="/assets/png/CodeDolphinFilledBorderedTextTrans.png" alt="CodeDolphin" width="230" height="180" />
                <br />
                <RegisterForm continue={changeStep} changeUser={changeUser} />
            </div>
        );
    else
        return (
            <div className="w-full h-screen flex flex-col items-center justify-center bg-gray-100">
                <img src="/assets/png/CodeDolphinFilledBorderedTextTrans.png" alt="CodeDolphin" width="230" height="180" />
                <br />
                <EmailCodeForm user={user} />
            </div>
        );
}

export default Register
