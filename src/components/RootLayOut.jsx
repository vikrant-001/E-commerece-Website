import { Outlet } from "react-router-dom"
import Navbar from "./Navbar"
import {useState } from "react"
import CartProvider from "./cartContext/CartProvider"
import Overlay from "./Cart/Overlay"
import CartItems from "./Cart/CartItems"
import classes from "./RoorLay.module.css"
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