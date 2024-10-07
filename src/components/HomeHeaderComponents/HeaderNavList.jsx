import React from 'react'

function HeaderNavList(props) {
    const { data } = props;
    return (
        <li>
            <a>
                <img src={data.imgURL} alt={data.alt} />
                {data.name}
            </a>
        </li>
    )
}

export default HeaderNavList