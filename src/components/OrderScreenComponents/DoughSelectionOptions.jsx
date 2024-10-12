import React from 'react'

function DoughSelectionOptions({ data }) {
    const { value, title, selected, disabled, hidden } = data;
    return (
        <>
            <option value={value} selected={selected} disabled={disabled} hidden={hidden}>{title}</option>
        </>
    )
}

export default DoughSelectionOptions