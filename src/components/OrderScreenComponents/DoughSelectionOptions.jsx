import React from 'react'

function DoughSelectionOptions({ data }) {
    const { value, title, hiddenOrNot } = data;
    return (
        <>
            <option value={value} {...hiddenOrNot}>{title}</option>
        </>
    )
}

export default DoughSelectionOptions