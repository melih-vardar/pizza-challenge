import React from 'react'
import HeaderNavList from './HeaderNavList';

export default function HeaderNavBar(props) {
    const { headerNavList } = props;
    return (
        <div className="header-nav">
            <nav>
                <ul>
                    {headerNavList && headerNavList.map((data, index) => {
                        return (
                            <HeaderNavList data={data} key={index} />
                        )
                    })}
                </ul>
            </nav>
        </div>
    )
}