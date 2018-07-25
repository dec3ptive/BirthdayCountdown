import React from 'react';

const ChangeDate = (title, callback) => {
    return (
        <button key = {1} className="change-date" onClick={callback}>
            <i className="fas fa-camera-retro"></i>
            {title}
        </button>
    )
}

export default ChangeDate;