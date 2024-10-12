import React from 'react'

function RadioSelectionOptions({ selectedOption, handleChange, data }) {
    return (
        <>
            <div className="radio">
                <label>
                    <input
                        type="radio"
                        value={data}
                        checked={selectedOption === data}
                        onChange={handleChange}
                        name="sizeSelection" />
                    <p style={{
                        fontFamily: "Barlow",
                        fontSize: "2rem",
                        fontWeight: "400",
                        lineHeight: "5.6rem",
                        textAlign: "left",
                    }}>{data}</p>
                </label>
            </div>
        </>
    )
}

export default RadioSelectionOptions