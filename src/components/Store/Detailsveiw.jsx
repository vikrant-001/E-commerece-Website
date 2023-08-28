import { Fragment } from "react";
import { useParams } from "react-router-dom";
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


const Detailsview = (props) => {
    const params = useParams();
    const data = productsArr.find((item) => item.id === params.id);
   
    return <Fragment>
        <p>{data.title}</p>
        <p>{data.price}</p>
        <img src={data.imageUrl} alt=""/>
        
    </Fragment>
} 

export default Detailsview;