import React from 'react'
import AdditionalPartNavList from './AdditionalPartNavList'
import AdditionalPartCard from './AdditionalPartCard';

export default function AdditionalPart(props) {
    const { additionalPartNavList, additionalPartCard } = props;
    return (
        <>
            <div className="ara-text">
                <h2>en çok paketlenen menüler</h2>
                <h3>Acıktıran Kodlara Doyuran Lezzetler</h3>
            </div>
            <div className="ara-nav">
                <nav className="ara-nav-nav">
                    <ul id="ara-nav-ul">
                        {additionalPartNavList && additionalPartNavList.map((data, index) => {
                            return (
                                <AdditionalPartNavList imgURL={data.imgURL} name={data.name} alt={data.alt} specialClass={data.specialClass} key={index} />
                            )
                        })}
                    </ul>
                </nav>
            </div>
            <div className="ara-tanitim">
                {additionalPartCard && additionalPartCard.map((item, index) => {
                    return (
                        <AdditionalPartCard imgURL={item.imgURL} name={item.name} key={index} />
                    )
                })}
            </div>
        </>
    )
}