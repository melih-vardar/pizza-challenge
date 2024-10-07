import React from 'react'
import HomeHeader from './HomeHeaderComponents/HomeHeader';
import HomeBody from './HomeBodyComponents/HomeBody';
import HomeFooter from './HomeFooterComponents/HomeFooter';

function HomePage(props) {
    const { headerNavList, additionalPartNavList, additionalPartCard, footerNavList, footerMenuList, footerInstagram } = props;
    return (
        <>
            <HomeHeader />
            <HomeBody headerNavList={headerNavList} additionalPartNavList={additionalPartNavList} additionalPartCard={additionalPartCard} />
            <HomeFooter footerNavList={footerNavList} footerMenuList={footerMenuList} footerInstagram={footerInstagram} />
        </>
    );
};

export default HomePage