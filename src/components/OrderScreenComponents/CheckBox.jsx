import React from 'react'

function CheckBox({ name, id, handleChange }) {
    return (
        <div style={{
            width: "100%",
            float: "left",
        }}>
            <label style={{
                width: "100%",
                height: "2.6rem",
                fontFamily: "Barlow",
                fontSize: "20px",
                fontWeight: "700",
                lineHeight: "28.8px",
                textAlign: "left",
                color: "#5F5F5F",

                display: "flex",
                gap: "1.1rem",
            }}>
                <input style={{
                    width: "2rem",
                    height: "2.054rem",
                }}
                    type="checkbox"
                    onChange={handleChange}
                    name={name}
                    id={id}
                    data-cy={name}
                />
                <span style={{ width: "100%" }}>{name}</span>
            </label>
        </div >
    );
}


export default CheckBox