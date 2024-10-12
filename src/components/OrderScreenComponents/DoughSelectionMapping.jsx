import React from 'react'
import DoughSelectionOptions from './DoughSelectionOptions';

const doughThicknessOptions = [
    {
        "value": "",
        "title": "-Hamur Kalınlığı Seç-",
        "hiddenOrNot": "selected disabled hidden",
    },
    {
        "value": "Süpper İnce",
        "title": "Süpper İnce Hamur",
        "hiddenOrNot": "",
    },
    {
        "value": "Klasik",
        "title": "Klasik Hamur",
        "hiddenOrNot": "",
    },
    {
        "value": "Kalın",
        "title": "Kalın Hamur",
        "hiddenOrNot": "",
    },
]

function DoughSelectionMapping(props) {

    const { handleChange } = props;

    return (
        <div className="dough-selection">
            <label>
                <p style={{
                    fontFamily: "Barlow",
                    fontSize: "2.2rem",
                    fontWeight: "600",
                    lineHeight: "2.476rem",
                    textAlign: "left",
                    margin: "0",
                    padding: "0",
                }}>Hamur seç <span style={{ color: "red" }}>*</span></p>
                <select id="selectedDough" onChange={handleChange} data-cy="selectedDough" >
                    {doughThicknessOptions &&
                        doughThicknessOptions.map((data, index) => {
                            return (
                                <DoughSelectionOptions data={data} key={index} />
                            );
                        })}
                </select>
            </label>
        </div>
    )
}

export default DoughSelectionMapping