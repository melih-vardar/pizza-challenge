import { useState } from 'react'
import workintech from '/workintech.svg'
import { Route, Switch } from "react-router"
import HomePage from './components/HomePage'
import OrderPizza from './components/OrderPizza'
import './App.css'


function App() {


  return (
    <>
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/order-pizza">
          <OrderPizza />
        </Route>
      </Switch>
    </>
  )
}

export default App
