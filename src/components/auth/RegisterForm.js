import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
import Button from './Button';
import PasswordInput from './PasswordInput';
import TextInput from './TextInput'

function RegisterForm(props) {
    const history = useHistory();

    const [firstName, changeFirstName] = useState("");
    const [lastName, changeLastName] = useState("");
    const [email, changeEmail] = useState("");
    const [password, changePassword] = useState("");
    const [error, changeError] = useState("");
    const [loading, changeLoading] = useState(false);

    function Register() {
        changeLoading(true);
        if(firstName === "" || lastName === "" || email === "" || password === "") {
            changeLoading(false);
            changeError("Please make sure all details are filled out!");
        } else {
            Continue();
        }
    }

    function Continue() {
        props.changeUser({
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password
        });
        props.continue(2);
    }

    return (
        <div className="md:w-4/12 w-4/6 h-3/5 bg-gray-200 rounded-md px-5 py-10 hover:shadow-md focus:shadow-md flex flex-col items-center justify-evenly">
            <div className="flex flex-row w-5/6 items-center justify-between">
                <TextInput placeholder="First Name" changed={changeFirstName} />
                <TextInput placeholder="Last Name" changed={changeLastName} />
            </div>
            <TextInput placeholder="Email Address" changed={changeEmail} />
            <PasswordInput placeholder="Password" changed={changePassword} />
            <span className="text-red-600 w-5/6">{error}</span>
            <Button loading={loading} text="Register Now" clicked={Register} />
            <Button text="Login Instead" clicked={() => history.push('/login')} />
        </div>
    )
}

export default RegisterForm
