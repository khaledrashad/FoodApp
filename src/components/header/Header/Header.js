import { Fragment } from "react"
import classes from './Header.module.css'
import CardButton from "../cart/CartButton";

const Header = (props) => {
    return(
        <Fragment>
            <header className={classes.header}>
                <h1>ReactMeals</h1>
                <CardButton />
            </header>
        </Fragment>
    );
    
};
export default Header;