import ReactDOM from 'react-dom'
import classes from './Overlay.module.css'
const Overlay = (props) => {
    return ReactDOM.createPortal(
        <div className={classes.overlay} onClick={props.onClick}>
            {props.children}
        </div>,document.getElementById("overlay")
    )
}

export default Overlay