import { useRef, useState } from "react";
import classes from "./MealItemForm.module.css"
import Input from "../UI/Input";





const MealItemForm = (props) => {

    const [enteredNumberIsValid, setEnteredNumberIsValid] = useState(true);

    const amountInputRef = useRef();

    const mealSubmitHandler =(event)=>{
        event.preventDefault();
        const enteredValue = amountInputRef.current.value;
        const enteredAmountNumber = +enteredValue

        if(enteredAmountNumber.trim().length === 0 ||  enteredAmountNumber < 1 || enteredAmountNumber < 5){
            setEnteredNumberIsValid(false);
            return;
        };
        props.onAddToCart(enteredAmountNumber);
    };

    return (
        <form className={classes.form} onSubmit={mealSubmitHandler}>
            <Input label='Amount' 
            input={{
                ref: {amountInputRef},
                min: "1",
                max: "5",
                defaultValue: "1",
                step: "1",
                id: "Amount",
                type: "number"
            
            }}/>
            <button>+ Add</button>
            {!enteredNumberIsValid && <p>Amount is not valid (1-5)</p>}
        </form>
    );
}

export default MealItemForm;
