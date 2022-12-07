import { useState } from "react";
import Header from "./components/header/Header/Header";
import Meals from "./components/meals/Meals";
import Cart from "./components/header/cart/Cart";
import CartProvider from "./store/CartProvider";



function App() {

const [cartIsShown, setCartIsShown] = useState(false)

const showCartHandler =()=>{
  setCartIsShown(true)
};

const hideCartHandler =()=>{
  setCartIsShown(false)
}; 

  return (
    <CartProvider>
      {cartIsShown && <Cart hideCartHandler={hideCartHandler}/>}
      <Header showCartHandler={showCartHandler}/>
      <Meals />
    </CartProvider>
  );
}

export default App;
