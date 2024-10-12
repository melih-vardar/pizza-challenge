import React from 'react'
import SizeSelectionOptions from './SizeSelectionOptions';

function SizeSelectionMapping(props) {

    const { selectedOption, handleButton, sizeSelectionOptions } = props;

    return (
        <div className="size-selection-desktop">
            <p style={{
                fontFamily: "Barlow",
                fontSize: "2.2rem",
                fontWeight: "600",
                lineHeight: "2.476rem",
                textAlign: "left",
                margin: "0",
                padding: "0",
            }}>Boyut seç <span style={{ color: "red" }}>*</span></p>
            <div className="size-btn-container">
                {sizeSelectionOptions &&
                    sizeSelectionOptions.map((data, index) => {
                        return (
                            <SizeSelectionOptions data={data} key={index} selectedOption={selectedOption} handleButton={handleButton} />
                        );
                    })}
            </div>
        </div>
    )
}

export default SizeSelectionMapping