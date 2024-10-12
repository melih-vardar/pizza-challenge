import React from 'react'
import CheckBox from './CheckBox';

const malzemeler = [
    "Pepperoni",
    "Kanada Jambonu",
    "Soğan",
    "Mısır",
    "Jalapeno",
    "Biber",
    "Ananas",
    "Sosis",
    "Tavuk Izgara",
    "Domates",
    "Sucuk",
    "Sarımsak",
    "Zeytin",
    "Kabak"]

function InputMapping({ handleChange, baslik, id, }) {
    return (
        <>
            <span className="ekMalzemelerAciklama"> {baslik}</span>
            <form className="ekMalzemelerForm">
                {malzemeler &&
                    malzemeler.map((data, index) => {
                        return (
                            <CheckBox handleChange={handleChange} value={data} key={index} id={id} />
                        );
                    })}
            </form>
        </>
    );
}


export default InputMapping