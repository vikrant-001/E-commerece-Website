import classes from "./Store.module.css"
import Card from "./Card";
import Heading from "../Heading";
import { Fragment } from "react";
import { Outlet} from "react-router-dom";
const productsArr = [

    {
    id:'Col',
    title: 'Colors',
    
    price: 100,
    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
    
    },
    
    {
    id:'BWC',
    title: 'Black and white Colors',
    
    price: 50,
    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
    
    },
    
    {
    id: 'YBC',
    title: 'Yellow and Black Colors',
    
    price: 70,
    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
    
    },
    
    {
    id:'BC',
    title: 'Blue Color',
    
    price: 100,
    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
    
    }
    
    ]
const Store = () => {
    
    return (
        <Fragment>
        <Heading/>
        <div className={classes.mainStore}>
            
            {
                productsArr.map((item) =>(
                    <Card key = {item.title} item = {item}/>
                ))
            }
        </div>
        <Outlet/>
        </Fragment>
    )
}
export default Store;