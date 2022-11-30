import classes from "./MealItemForm.module.css"
import Input from "../UI/Input";
import { type } from "@testing-library/user-event/dist/type";

const MealItemForm = (props) => {
    return (
        <form className={classes.form}>
            <Input label='Amount' 
            input={{
                min: "1",
                max: "5",
                defaultValue: "1",
                step: "1",
                id: "Amount",
                type: "number"
            
            }}/>
            <button>+ Add</button>
        </form>
    );
}

export default MealItemForm;
