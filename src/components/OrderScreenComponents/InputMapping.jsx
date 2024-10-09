import React from 'react'
import CheckBox from './CheckBox';

function InputMapping({ malzemeler, handleChange, baslik, id }) {
    return (
        <>
            < span style={{ width: "100%", height: "5.6rem", fontFamily: "Barlow", fontSize: "2rem", fontWeight: "500", lineHeight: "5.6rem", textAlign: "left" }}> {baslik}</span>
            <form style={{
                display: "flex",
                flexDirection: "column",
                flexWrap: "wrap",
                gap: "2rem",
                width: "50%",
                height: "33.5rem",
            }}>
                {malzemeler &&
                    malzemeler.map((data, index) => {
                        return (
                            <CheckBox handleChange={handleChange} name={data} key={index} id={id} />
                        );
                    })}
            </form>
        </>
    );
}


export default InputMapping