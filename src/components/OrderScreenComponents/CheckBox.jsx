import React from 'react'

function CheckBox({ name, data, handleChange }) {
    return (
        <label>
            <input
                type="checkbox"
                onChange={handleChange}
                name={name}
                data={data}
            />
            <span>{data}</span>
        </label>
    );
}


export default CheckBox