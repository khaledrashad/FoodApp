import { Fragment } from "react"
import classes from './Header.module.css'
import CardButton from "../cart/CartButton";
import logo from "./meals.jpg";
const Header = (props) => {
    return(
        <Fragment>
            <header className={classes.header}>
                <h1>ReactMeals</h1>
                <CardButton />
            </header>
            <div className={classes.mainImage}>
                <img src={logo} alt="" />
            </div>
        </Fragment>
    );
    
};
export default Header;