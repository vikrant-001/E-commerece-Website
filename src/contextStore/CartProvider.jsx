import { useReducer } from "react"
import CartContext from "./Cart-context"
const defaultCartState = {
    items : [

        {
        
        title: 'Colors',
        
        price: 100,
        
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
        
        quantity: 2,
        
        },
        
        {
        
        title: 'Black and white Colors',
        
        price: 50,
        
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
        
        quantity: 3,
        
        },
        
        {
        
        title: 'Yellow and Black Colors',
        
        price: 70,
        
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
        
        quantity: 1,
        
        }
        
        ],
    totalAmount :3,
}
const cartReducer = (state,action) => {
    return defaultCartState;
}
const CartProvider = (props) => {
    const [cartState,dispatchCartAction] = useReducer(cartReducer,defaultCartState);

    const addItemToCartHandler = (item) =>{
        dispatchCartAction({type:'ADD',item:item})
    }

    const removeItemFromCartHandler = (id) => {
        dispatchCartAction({type:'REMOVE',id:id})
    }
    const cartContext = {
        items : cartState.items,
        totalAmount : cartState.totalAmount,
        addItems : addItemToCartHandler,
        removeItems : removeItemFromCartHandler,
    }

    return <CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>
}

export default CartProvider