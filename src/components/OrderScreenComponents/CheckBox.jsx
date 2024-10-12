import React from 'react'

function CheckBox({ value, id, handleChange }) {
    return (
        <div className="ekMalzemelerContainer">
            <label className="ekMalzemelerLabel">
                <input
                    type="checkbox"
                    onChange={handleChange}
                    value={value}
                    id={id}
                    data-cy={value}
                    className="ekMalzemelerInput"
                />
                <span id="checkmark"></span>
                <span id="ekMalzemelerText">{value}</span>
            </label>
        </div >
    );
}


export default CheckBox