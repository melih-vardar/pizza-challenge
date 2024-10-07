import React from 'react'

function AdditionalPartNavList(props) {
    const { imgURL, name, alt, specialClass } = props;
    return (
        <li className="ara-nav-li">
            <a className="ara-nav-a">
                <img src={imgURL} alt={alt} />
                {<span className={specialClass}>{name}</span>}
            </a>
        </li>
    )
}

export default AdditionalPartNavList