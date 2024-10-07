import React from 'react'

function FooterInstagram({ imgURL, alt }) {
    return (
        <>
            <li><img src={imgURL} alt={alt} /></li>
        </>
    )
}

export default FooterInstagram