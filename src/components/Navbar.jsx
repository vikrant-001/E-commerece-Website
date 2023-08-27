
import { useContext } from "react";
import "./Navbar.css";
import CartContext from "./cartContext/Cart-context";
import { NavLink } from "react-router-dom";



const Navbar = (props) => {
    const ctx = useContext(CartContext);
    console.log(ctx)
    return (
        <div className="main-cant">
            <div className="nav-item">
                <p><NavLink className= "active" to={'/'}>HOME</NavLink></p>
                <p><NavLink className= "active" to={'/store'} >STORE</NavLink></p>
                <p><NavLink className= "active" to={'/about'}>ABOUT</NavLink></p>
                <p><NavLink className= "active" to={'/contactUs'}>Contact</NavLink></p>
            </div>
            <div className="nav-btn">
                <button onClick={props.onClick}>Cart</button>
                <p>{ctx.totalAmount}</p>
            </div>
        </div>
    )
}
export default Navbar