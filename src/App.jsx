import React, { useState } from 'react'
import { Route, Switch } from "react-router"
import OrderPizza from './components/OrderPizza'
import './App.css'
import HomePage from './components/HomePage'
import Success from './components/Success'
import HomeFooter from './components/HomeFooterComponents/HomeFooter'

function App() {


  const [pizzaData, setPizzaData] = useState()


  return (
    <>
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/order-pizza" exact>
          <OrderPizza setPizzaData={setPizzaData} />
        </Route>
        <Route path="/order-pizza/success">
          <Success pizzaData={pizzaData} />
        </Route>
      </Switch>
      <HomeFooter />
    </>
  )
}

export default App
