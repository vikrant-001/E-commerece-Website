
import classes from "./CartItem.module.css"


const cartElements = [

    {
    
    title: 'Colors',
    
    price: 100,
    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
    
    quantity: 2,
    
    },
    
    {
    
    title: 'Black and white Colors',
    
    price: 50,
    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
    
    quantity: 3,
    
    },
    
    {
    
    title: 'Yellow and Black Colors',
    
    price: 70,
    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
    
    quantity: 1,
    
    }
    
    ]
    
    const CartItems = () => {
        return (
            <div className={classes.container}>
                <h1 className={classes.heading}>CART ITEMS</h1>
                {
                    cartElements.map((item) => (
                        <div className={classes.card}>
                            <img src= {item.imageUrl}/>
                            <p>{item.title}</p>
                            <p>{item.quantity}</p>
                        </div>
                    ))
                }
                <div className={classes.btn}>
                    <button>Place Order</button>
                    <button>close</button>
                </div>
            </div>
        )
    }
    export default CartItems
    