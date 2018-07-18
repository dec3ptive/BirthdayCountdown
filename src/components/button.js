import React from 'react';

const Button = (title) => {
    return (
        <button className="button" onClick={() => console.log("tryingto handle generate countdown")}>
            {title}
        </button>
    )
}

export default Button;