import React from 'react'

function CodeInput(props) {
    return (
        <input className="w-5/6 h-12 rounded-md border-2 border-blue-500 px-2 hover:border-blue-300 hover:shadow-md focus:border-blue-300 focus:shadow-md outline-none" type="number" maxLength="6" minLength="6" placeholder={props.placeholder} value={props.value} onChange={props.changed} />
    )
}

export default CodeInput
