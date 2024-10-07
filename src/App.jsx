import { useState } from 'react'
import workintech from '/workintech.svg'
import { Route, Switch } from "react-router"
import OrderPizza from './components/OrderPizza'
import './App.css'
import HomePage from './components/HomePage'

const headerNavList = [
  {
    "imgURL": "assets/iteration-2-aseets/icons/1.svg",
    "alt": "Kore",
    "name": "YENİ! Kore",
  },
  {
    "imgURL": "assets/iteration-2-aseets/icons/2.svg",
    "alt": "Pizza",
    "name": "Pizza",
  },
  {
    "imgURL": "assets/iteration-2-aseets/icons/3.svg",
    "alt": "Burger",
    "name": "Burger",
  },
  {
    "imgURL": "assets/iteration-2-aseets/icons/4.svg",
    "alt": "Kızartmalar",
    "name": "Kızartmalar",
  },
  {
    "imgURL": "assets/iteration-2-aseets/icons/5.svg",
    "alt": "Fast food",
    "name": "Fast food",
  },
  {
    "imgURL": "assets/iteration-2-aseets/icons/6.svg",
    "alt": "Gazlı İçecek",
    "name": "Gazlı İçecek",
  }
]

const additionalPartNavList = [
  {
    "imgURL": "assets/iteration-2-aseets/icons/1.svg",
    "alt": "Ramen",
    "name": "Ramen",
    "specialClass": "",
  },
  {
    "imgURL": "assets/iteration-2-aseets/icons/2.svg",
    "alt": "Pizza",
    "name": "Pizza",
    "specialClass": "ara-nav-span",
  },
  {
    "imgURL": "assets/iteration-2-aseets/icons/3.svg",
    "alt": "Burger",
    "name": "Burger",
    "specialClass": "",
  },
  {
    "imgURL": "assets/iteration-2-aseets/icons/4.svg",
    "alt": "French fries",
    "name": "French fries",
    "specialClass": "",
  },
  {
    "imgURL": "assets/iteration-2-aseets/icons/5.svg",
    "alt": "Fast food",
    "name": "Fast food",
    "specialClass": "",
  },
  {
    "imgURL": "assets/iteration-2-aseets/icons/6.svg",
    "alt": "Soft drinks",
    "name": "Soft drinks",
    "specialClass": "",
  }
]

const additionalPartCard = [
  {
    "imgURL": "assets/iteration-2-aseets/pictures/food-1.png",
    "name": "Terminal Pizza",
  },
  {
    "imgURL": "assets/iteration-2-aseets/pictures/food-2.png",
    "name": "Position Absolute Acı Pizza",
  }, {
    "imgURL": "assets/iteration-2-aseets/pictures/food-3.png",
    "name": "useEffect Tavuklu Burger",
  },
]

const footerNavList = [
  {
    "imgURL": "assets/iteration-2-aseets/footer/icons/icon-1.png",
    "alt": "adress",
    "name": "341 Londonderry Road, Istanbul Türkiye"
  },
  {
    "imgURL": "assets/iteration-2-aseets/footer/icons/icon-2.png",
    "alt": "email",
    "name": "aciktim@teknolojikyemekler.com"
  },
  {
    "imgURL": "assets/iteration-2-aseets/footer/icons/icon-3.png",
    "alt": "phone",
    "name": "+90 216 123 45 67"
  },
]

const footerMenuList = [
  "Terminal Pizza",
  "5 Kişilik Hackathlon Pizza",
  "useEffect Tavuklu Pizza",
  "Beyaz Console Frosty",
  "Testler Geçti Mutlu Burger",
  "Position Absolute Acı Burger"]

const footerInstagram = [
  {
    "imgURL": "assets/iteration-2-aseets/footer/insta/li-0.png",
    "alt": "Instagram-1",
  },
  {
    "imgURL": "assets/iteration-2-aseets/footer/insta/li-1.png",
    "alt": "Instagram-2",
  },
  {
    "imgURL": "assets/iteration-2-aseets/footer/insta/li-2.png",
    "alt": "Instagram-3",
  },
  {
    "imgURL": "assets/iteration-2-aseets/footer/insta/li-3.png",
    "alt": "Instagram-4",
  },
  {
    "imgURL": "assets/iteration-2-aseets/footer/insta/li-4.png",
    "alt": "Instagram-5",
  },
  {
    "imgURL": "assets/iteration-2-aseets/footer/insta/li-5.png",
    "alt": "Instagram-6",
  }
]
function App() {


  return (
    <>
      <Switch>
        <Route path="/" exact>
          <HomePage headerNavList={headerNavList} additionalPartNavList={additionalPartNavList} additionalPartCard={additionalPartCard} footerNavList={footerNavList} footerMenuList={footerMenuList} footerInstagram={footerInstagram} />
        </Route>
        <Route path="/order-pizza">
          <OrderPizza />
        </Route>
      </Switch>
    </>
  )
}

export default App
