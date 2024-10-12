import React from 'react'
import HomeHeader from './HomeHeaderComponents/HomeHeader';
import HomeBody from './HomeBodyComponents/HomeBody';

function HomePage() {

    const headerNavList = [
        {
            "imgURL": "Assets/Iteration-2-aseets/icons/1.svg",
            "alt": "Kore",
            "name": "YENİ! Kore",
        },
        {
            "imgURL": "Assets/Iteration-2-aseets/icons/2.svg",
            "alt": "Pizza",
            "name": "Pizza",
        },
        {
            "imgURL": "Assets/Iteration-2-aseets/icons/3.svg",
            "alt": "Burger",
            "name": "Burger",
        },
        {
            "imgURL": "Assets/Iteration-2-aseets/icons/4.svg",
            "alt": "Kızartmalar",
            "name": "Kızartmalar",
        },
        {
            "imgURL": "Assets/Iteration-2-aseets/icons/5.svg",
            "alt": "Fast food",
            "name": "Fast food",
        },
        {
            "imgURL": "Assets/Iteration-2-aseets/icons/6.svg",
            "alt": "Gazlı İçecek",
            "name": "Gazlı İçecek",
        }
    ]

    const additionalPartNavList = [
        {
            "imgURL": "Assets/Iteration-2-aseets/icons/1.svg",
            "alt": "Ramen",
            "name": "Ramen",
            "specialClass": "",
        },
        {
            "imgURL": "Assets/Iteration-2-aseets/icons/2.svg",
            "alt": "Pizza",
            "name": "Pizza",
            "specialClass": "ara-nav-span",
        },
        {
            "imgURL": "Assets/Iteration-2-aseets/icons/3.svg",
            "alt": "Burger",
            "name": "Burger",
            "specialClass": "",
        },
        {
            "imgURL": "Assets/Iteration-2-aseets/icons/4.svg",
            "alt": "French fries",
            "name": "French fries",
            "specialClass": "",
        },
        {
            "imgURL": "Assets/Iteration-2-aseets/icons/5.svg",
            "alt": "Fast food",
            "name": "Fast food",
            "specialClass": "",
        },
        {
            "imgURL": "Assets/Iteration-2-aseets/icons/6.svg",
            "alt": "Soft drinks",
            "name": "Soft drinks",
            "specialClass": "",
        }
    ]

    const additionalPartCard = [
        {
            "imgURL": "Assets/Iteration-2-aseets/pictures/food-1.png",
            "name": "Terminal Pizza",
        },
        {
            "imgURL": "Assets/Iteration-2-aseets/pictures/food-2.png",
            "name": "Position Absolute Acı Pizza",
        }, {
            "imgURL": "Assets/Iteration-2-aseets/pictures/food-3.png",
            "name": "useEffect Tavuklu Burger",
        },
    ]
    return (
        <>
            <HomeHeader />
            <HomeBody headerNavList={headerNavList} additionalPartNavList={additionalPartNavList} additionalPartCard={additionalPartCard} />
        </>
    );
};

export default HomePage