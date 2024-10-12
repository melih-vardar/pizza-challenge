import React from 'react'
import RadioSelectionOptions from './RadioSelectionOptions';

function RadioMapping(props) {

    const { selectedOption, handleChange, sizeSelectionOptions } = props;

    return (
        <div className="radio-section">
            <form className="size-selection">
                <p style={{
                    fontFamily: "Barlow",
                    fontSize: "2.2rem",
                    fontWeight: "600",
                    lineHeight: "2.476rem",
                    textAlign: "left",
                    margin: "0",
                    padding: "0",
                }}>Boyut seç <span style={{ color: "red" }}>*</span></p>
                {sizeSelectionOptions &&
                    sizeSelectionOptions.map((data, index) => {
                        return (
                            <RadioSelectionOptions selectedOption={selectedOption} handleChange={handleChange} data={data} key={index} />
                        );
                    })}
            </form>
        </div>
    )
}

export default RadioMapping