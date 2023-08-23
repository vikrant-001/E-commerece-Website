import { Fragment } from "react";
import Card from "./Card";
const Store = (props) => {
    return (
        <Fragment>
            {
                props.productsArr.map((item) =>(
                    <Card key = {props.title} item = {item}/>
                ))
            }
        </Fragment>
    )
}
export default Store;