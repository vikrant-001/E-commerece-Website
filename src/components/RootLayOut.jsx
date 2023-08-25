import { Outlet } from "react-router-dom"
import Navbar from "./Navbar"
import {useState } from "react"
import CartProvider from "./cartContext/CartProvider"
import Overlay from "./Cart/Overlay"
import CartItems from "./Cart/CartItems"
import Store from "./Store/Store"
import classes from "./RoorLay.module.css"
const productsArr = [

    {
    
    title: 'Colors',
    
    price: 100,
    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
    
    },
    
    {
    
    title: 'Black and white Colors',
    
    price: 50,
    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
    
    },
    
    {
    
    title: 'Yellow and Black Colors',
    
    price: 70,
    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
    
    },
    
    {
    
    title: 'Blue Color',
    
    price: 100,
    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
    
    }
    
    ]

const RootLayOut = () => {
    const [showCart,setShowCart] = useState(false);
    
      const cartHandler = (event) => {
        event.preventDefault();
        setShowCart(!showCart);
      }
    return (
        <CartProvider>
                <Navbar onClick = {cartHandler}/>
                <div className={classes.container}>
                    {showCart && <Overlay onClick = {cartHandler}>
                        <CartItems/>
                    </Overlay>}
                    </div>
                <Outlet/>
        </CartProvider>
    )
}
export default RootLayOut