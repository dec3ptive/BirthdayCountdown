import React from 'react';

const Button = (title, callback) => {
    return (
        <button key = {4} className="button" onClick={callback}>
            {title}
        </button>
    )
}

export default Button;