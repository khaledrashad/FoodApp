import { React, useReducer } from 'react';
import CartContext from './CartContext';

const defaultCartState = {
    items: [],
    totalAmount: 0
}

const cartReducer = (state,action)=>{
    if (action.type === 'ADD'){
        const updatedItem = state.items.concat(action.item);
        const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount
        return({
            items: updatedItem, 
            totalAmount: updatedTotalAmount
        }   
        );
    }
}

const CartProvider = (props) => {

    const [newState,dispatch]=useReducer(cartReducer,defaultCartState)

    const addItemToCartHandler = (item,value) => {
        dispatch({type: 'ADD', item: item, value:value})
    };
    
    const removeItemFromCartHandler = (id) => {
        dispatch({type: 'REMOVE', id: id})
    };

    const cartContext = {
        items: newState.items,
        totalAmount: newState.totalAmount,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler,
    }

    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    );
}

export default CartProvider;
