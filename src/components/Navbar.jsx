import { useContext } from "react";
import "./Navbar.css";
import CartProvider from "../contextStore/CartProvider"

const Navbar = (props) => {
    const cartCtx = useContext(CartProvider);
    console.log(cartCtx)
    return (
        <div className="main-cant">
            <div className="nav-item">
                <p>HOME</p>
                <p>STORE</p>
                <p>ABOUT</p>
            </div>
            <div className="nav-btn">
                <button onClick={props.onClick}>Cart</button>
            </div>
        </div>
    )
}
export default Navbar