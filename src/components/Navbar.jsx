
import { useContext } from "react";
import "./Navbar.css";
import CartContext from "./cartContext/Cart-context";
import { NavLink } from "react-router-dom";
import AuthContext from "./authStore/Auth-context";



const Navbar = (props) => {
    const ctx = useContext(CartContext);
    const authCtx = useContext(AuthContext);

    const logoutHandler = () => {
        authCtx.logout();
    }

    return (
        <div className="main-cant">
            <div className="nav-item">
                <p><NavLink className= "active" to={'/'}>HOME</NavLink></p>
                <p><NavLink className= "active" to={'/store'} >STORE</NavLink></p>
                <p><NavLink className= "active" to={'/about'}>ABOUT</NavLink></p>
                <p><NavLink className= "active" to={'/contactUs'}>CONTACT</NavLink></p>
            </div>
            <div className="nav-btn">
                <button onClick={props.onClick}>Cart</button>
                <p>{ctx.totalAmount}</p>
            </div>
            <div>
                <button onClick={logoutHandler}>Logout</button>
                <div><NavLink className="active" to={'/password'}>Cp</NavLink></div>
            </div>
        </div>
    )
}
export default Navbar