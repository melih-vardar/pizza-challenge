import React from 'react'

function CheckBox({ name, id, handleChange }) {
    return (
        <div className="ekMalzemelerContainer">
            <label className="ekMalzemelerLabel">
                <input
                    type="checkbox"
                    onChange={handleChange}
                    name={name}
                    id={id}
                    data-cy={name}
                    className="ekMalzemelerInput"
                />
                <span id="checkmark"></span>
                <span id="ekMalzemelerText">{name}</span>
            </label>
        </div >
    );
}


export default CheckBox