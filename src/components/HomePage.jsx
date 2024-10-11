import React from 'react'
import HomeHeader from './HomeHeaderComponents/HomeHeader';
import HomeBody from './HomeBodyComponents/HomeBody';

function HomePage(props) {
    const { headerNavList, additionalPartNavList, additionalPartCard } = props;
    return (
        <>
            <HomeHeader />
            <HomeBody headerNavList={headerNavList} additionalPartNavList={additionalPartNavList} additionalPartCard={additionalPartCard} />
        </>
    );
};

export default HomePage