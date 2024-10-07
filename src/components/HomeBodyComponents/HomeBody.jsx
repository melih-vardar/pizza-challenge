import React from 'react'
import HeaderNavBar from '../HomeHeaderComponents/HeaderNavBar'
import OrderCards from './OrderCards';
import AdditionalPart from './AdditionalPart';

function HomeBody(props) {
    const { headerNavList, additionalPartNavList, additionalPartCard } = props;
    return (
        <div className="mobile-div-until-footer">
            <HeaderNavBar headerNavList={headerNavList} />
            <OrderCards />
            <AdditionalPart additionalPartNavList={additionalPartNavList} additionalPartCard={additionalPartCard} />
        </div>
    )
}

export default HomeBody