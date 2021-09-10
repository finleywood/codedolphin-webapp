import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
import Button from './Button';
import PasswordInput from './PasswordInput';
import TextInput from './TextInput'

function LoginForm() {
    const history = useHistory();

    const [email, changeEmail] = useState("");
    const [password, changePassword] = useState("");
    const [error, changeError] = useState("");
    const [loading, changeLoading] = useState(false);

    function Login() {
        changeLoading(true);
        if(email === "" || password === "") {
            changeError("Please enter all the required information!");
            changeLoading(false);
        } else {

        }
    }

    function Register() {
        history.push('/register');
    }

    return (
        <div className="md:w-4/12 w-4/6 h-3/5 bg-gray-200 rounded-md px-5 py-10 hover:shadow-md focus:shadow-md flex flex-col items-center justify-evenly">
            <TextInput placeholder="Email Address" changed={changeEmail} />
            <PasswordInput placeholder="Password" changed={changePassword} />
            <span className="text-red-600 w-5/6">{error}</span>
            <Button loading={loading} text="Login" clicked={Login} />
            <Button text="Register" clicked={Register} />
            <a href="#">Forgot Password?</a>
        </div>
    )
}

export default LoginForm
