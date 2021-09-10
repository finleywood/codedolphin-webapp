import React from 'react'

function TextInput(props) {
    return (
        <input className="w-5/6 h-12 rounded-md border-2 border-blue-500 px-2 hover:border-blue-300 hover:shadow-md focus:border-blue-300 focus:shadow-md outline-none" type="text" placeholder={props.placeholder} onChange={e => props.changed(e.target.value)} />
    )
}

export default TextInput
