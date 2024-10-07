import React from 'react'

function HomeFooterNav({ imgURL, alt, name }) {
    return (
        <li className="footer-nav-li">
            <img src={imgURL} alt={alt} />
            <a className="footer-nav-a">{name}</a>
        </li>
    )
}

export default HomeFooterNav