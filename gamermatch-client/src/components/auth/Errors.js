import React from 'react'

function Errors(props) {
    return (
        <div className="error__msg">
            <span>{props.message}</span>
            <button onClick={props.clearError}>X</button>
            
        </div>
    )
}

export default Errors
