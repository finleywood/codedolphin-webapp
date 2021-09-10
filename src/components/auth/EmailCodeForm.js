import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
import Button from './Button';
import CodeInput from './CodeInput';

function EmailCodeForm(props) {
    const history = useHistory();
    const user = props.user;

    const [code, changeCode] = useState(0);
    const [error, changeError] = useState("");
    const [loading, changeLoading] = useState(false);

    function setCodeContent(input) {
        changeCode(input.slice(0, 6));
    }
    
    function VerifyCode() {
        changeLoading(true);
    }

    return (
        <div className="md:w-4/12 w-4/6 h-2/5 bg-gray-200 rounded-md px-5 py-10 hover:shadow-md focus:shadow-md flex flex-col items-center justify-center">
            <h2 className="font-bold text-2xl w-5/6">Please check the code sent to {user.email} and enter it here!</h2>
            <br />
            <CodeInput placeholder="Code" value={code} changed={(e) => setCodeContent(e.target.value)} />
            <br />
            <span className="w-5/6 text-red-600">{error}</span>
            <br />
            <Button loading={loading} text="Submit" clicked={VerifyCode} />
        </div>
    )
}

export default EmailCodeForm
