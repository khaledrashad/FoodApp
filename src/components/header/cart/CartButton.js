import classes from './CartButton.module.css'
import CartIcon from './CartIcon';

const CardButton = (props) =>{
    return(
            <button className={classes.button} onClick={props.onClick}>
                <span className={classes.icon}>
                    <CartIcon />
                </span>
                <span>Your Cart</span>
                <span className={classes.badge}>0</span>
            </button>
    );
};
export default CardButton;