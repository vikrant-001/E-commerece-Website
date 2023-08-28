import { Fragment } from "react"
import "./Card.css"
import { Link } from "react-router-dom"

const Card = (props) => {
    
    return (<Fragment>
        <div className="main">
                <img src = {props.item.imageUrl}/>
            <div className="para">
                <p>{props.item.title}</p>
                <p>{props.item.price}</p>
            </div>

            <Link to={`/store/${props.item.id}`}>View Detalis </Link>

        </div>
    </Fragment>)
}
export default Card