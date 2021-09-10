import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'


function Button(props) {
    return props.loading ?
    (
        <button disabled className="w-5/6 h-10 bg-blue-600 text-gray-50 font-semibold rounded-md hover:bg-blue-500 hover:shadow-md" onClick={props.clicked}>
            <FontAwesomeIcon icon={faSpinner} spin />
        </button>
    ) : (
        <button className="w-5/6 h-10 bg-blue-600 text-gray-50 font-semibold rounded-md hover:bg-blue-500 hover:shadow-md" onClick={props.clicked}>
            {props.text}
        </button>
    );
}

export default Button
