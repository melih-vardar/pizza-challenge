import React from 'react'

function SizeSelectionOptions(props) {
    const { data, handleButton, selectedOption } = props;
    return (
        <>
            <button
                className={`sizeSelection-btn ${selectedOption === data ? 'active' : ''}`}
                type="button"
                onClick={handleButton}
                value={data}
                name="sizeSelection">
                <span style={{
                    fontFamily: "Barlow",
                    fontSize: "16px",
                    fontWeight: "500",
                    lineHeight: "56px",
                    textAlign: "center",
                }}>{data}</span>
            </button>
        </>
    )
}

export default SizeSelectionOptions