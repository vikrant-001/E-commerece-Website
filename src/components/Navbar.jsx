import "./Navbar.css";
const Navbar = (props) => {
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