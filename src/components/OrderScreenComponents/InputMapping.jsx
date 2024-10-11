import React from 'react'
import CheckBox from './CheckBox';

function InputMapping({ malzemeler, handleChange, baslik, id }) {
    return (
        <>
            < span className="ekMalzemelerAciklama"> {baslik}</span>
            <form className="ekMalzemelerForm">
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