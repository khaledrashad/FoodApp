import { Fragment } from "react";
import Header from "./components/header/Header/Header";
import Meals from "./components/meals/Meals";
import Cart from "./components/header/cart/Cart";



function App() {
  return (
    <Fragment>
      <Cart />
      <Header />
      <Meals />
    </Fragment>
  );
}

export default App;
