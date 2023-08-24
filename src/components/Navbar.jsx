
import { useContext } from "react";
import "./Navbar.css";
import CartContext from "./cartContext/Cart-context";



const Navbar = (props) => {
    const ctx = useContext(CartContext);
    console.log(ctx)
    return (
        <div className="main-cant">
            <div className="nav-item">
                <p>HOME</p>
                <p>STORE</p>
                <p>ABOUT</p>
            </div>
            <div className="nav-btn">
                <button onClick={props.onClick}>Cart</button>
                <p>{ctx.totalAmount}</p>
            </div>
        </div>
    )
}
export default Navbar