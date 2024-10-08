import React from 'react'
import CheckBox from './CheckBox';

function InputMapping({ malzemeler, handleChange, name, baslik }) {
    return (
        <>
            <h3>{baslik}</h3>
            <form>
                {malzemeler &&
                    malzemeler.map((data, index) => {
                        return (
                            <CheckBox handleChange={handleChange} name={name} data={data} key={index} />
                        );
                    })}
            </form>
        </>
    );
}


export default InputMapping