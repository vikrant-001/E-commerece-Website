import { Fragment } from "react"
import "./Card.css"
const Card = (props) => {
    return (<Fragment>
        <div className="main">
            <img src = {props.item.imageUrl}/>
            <div className="para">
                <p>{props.item.title}</p>
                <p>{props.item.price}</p>
            </div>

        </div>
    </Fragment>)
}
export default Card