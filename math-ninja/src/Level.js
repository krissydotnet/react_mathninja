import React from 'react';

const Level = ({level}) => {
    return (
        <div className="level-container">
        <div className="label">Level: </div>
        <div className="field">
            <div className="level" id="level">{level}</div>
        </div>
    </div>
    )
}

export default Level;