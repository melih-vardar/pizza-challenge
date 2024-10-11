import React, { useEffect, useState } from 'react'
import { Route, Switch } from "react-router"
import OrderPizza from './components/OrderPizza'
import './App.css'
import HomePage from './components/HomePage'
import Success from './components/Success'
import { useHistory } from "react-router-dom";
import axios from "axios";
import HomeFooter from './components/HomeFooterComponents/HomeFooter'

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

const footerNavList = [
  {
    "imgURL": "Assets/Iteration-2-aseets/footer/icons/icon-1.png",
    "alt": "adress",
    "name": "341 Londonderry Road, Istanbul Türkiye"
  },
  {
    "imgURL": "Assets/Iteration-2-aseets/footer/icons/icon-2.png",
    "alt": "email",
    "name": "aciktim@teknolojikyemekler.com"
  },
  {
    "imgURL": "Assets/Iteration-2-aseets/footer/icons/icon-3.png",
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
    "imgURL": "Assets/Iteration-2-aseets/footer/insta/li-0.png",
    "alt": "Instagram-1",
  },
  {
    "imgURL": "Assets/Iteration-2-aseets/footer/insta/li-1.png",
    "alt": "Instagram-2",
  },
  {
    "imgURL": "Assets/Iteration-2-aseets/footer/insta/li-2.png",
    "alt": "Instagram-3",
  },
  {
    "imgURL": "Assets/Iteration-2-aseets/footer/insta/li-3.png",
    "alt": "Instagram-4",
  },
  {
    "imgURL": "Assets/Iteration-2-aseets/footer/insta/li-4.png",
    "alt": "Instagram-5",
  },
  {
    "imgURL": "Assets/Iteration-2-aseets/footer/insta/li-5.png",
    "alt": "Instagram-6",
  }
]

const malzemeler = [
  "Pepperoni",
  "Kanada Jambonu",
  "Soğan",
  "Mısır",
  "Jalapeno",
  "Biber",
  "Ananas",
  "Sosis",
  "Tavuk Izgara",
  "Domates",
  "Sucuk",
  "Sarımsak",
  "Zeytin",
  "Kabak"]

function App() {

  const [pizzaToppings, setPizzaToppings] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const [selectedOption, setSelectedOption] = useState("S");
  const [doughThickness, setDoughThickness] = useState("");
  const [price, setPrice] = useState(0);
  const [totalPrice, setTotalPrice] = useState(85.50);
  const [orderText, setOrderText] = useState()
  const [pizzaData, setPizzaData] = useState()

  const history = useHistory();

  const handleChange = (event) => {
    console.log(event.target.value)
    if (event.target.id === "ekMalzemeler" && event.target.checked) {
      setPizzaToppings([...pizzaToppings, event.target.name]);
    } else if (event.target.id === "ekMalzemeler" && !event.target.checked) {
      setPizzaToppings(pizzaToppings.filter((malzeme) => malzeme !== event.target.name));

    }

    else if (event.target.name === 'sizeSelection' && event.target.checked) {
      setSelectedOption(event.target.value);
    }

    else if (event.target.id === 'selectedDough') {
      setDoughThickness(event.target.value);
    }

    else if (event.target.id === 'orderNote') {
      setOrderText(event.target.value);
    }
  };

  const decrementQuantity = () => {
    if (quantity >= 1)
      setQuantity((quantity) => quantity - 1)
  }

  const incrementQuantity = () => {
    setQuantity((quantity) => quantity + 1)
  }
  useEffect(() => {
    decrementQuantity();
    incrementQuantity();
  }, [quantity])


  useEffect(() => {
    setPrice(pizzaToppings.length * 5);
  }, [pizzaToppings]);

  useEffect(() => {
    setTotalPrice((quantity * (85.50 + price)));
  }, [pizzaToppings, quantity]);

  const handleButton = ((event) => {
    setSelectedOption(event.currentTarget.value);
  })

  const handleSubmit = async (event) => {

    event.preventDefault();

    await axios
      .post('https://reqres.in/api/pizza', { pizzaToppings, selectedOption, quantity, doughThickness })
      .then((res) => {
        setPizzaData(res.data);
        // console.log(res.data);
        if (res.data) {
          history.push('/order-pizza/success');
        }
      })
      .catch((error) => {
        console.error(error);
      });

  };

  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    // console.log(doughThickness)
    // console.log(pizzaToppings)
    // console.log(orderText)
    if (
      doughThickness !== "" &&
      pizzaToppings.length >= 4 &&
      (orderText && orderText.length >= 3)
    ) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  }, [handleChange]);


  return (
    <>
      <Switch>
        <Route path="/" exact>
          <HomePage headerNavList={headerNavList} additionalPartNavList={additionalPartNavList} additionalPartCard={additionalPartCard} />
        </Route>
        <Route path="/order-pizza" exact>
          <OrderPizza pizzaToppings={pizzaToppings} quantity={quantity} selectedOption={selectedOption} doughThickness={doughThickness} price={price} handleChange={handleChange} decrementQuantity={decrementQuantity} incrementQuantity={incrementQuantity} orderText={orderText} malzemeler={malzemeler} pizzaData={pizzaData} handleSubmit={handleSubmit} isValid={isValid} totalPrice={totalPrice} handleButton={handleButton} />
        </Route>
        <Route path="/order-pizza/success">
          <Success pizzaData={pizzaData} price={price} totalPrice={totalPrice} />
        </Route>
      </Switch>
      <HomeFooter footerNavList={footerNavList} footerMenuList={footerMenuList} footerInstagram={footerInstagram} />
    </>
  )
}

export default App
