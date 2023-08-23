const { Fragment } = require("react")

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
            <Fragment>
                {
                    cartElements.map((item) => (
                        <div>
                            <img src= {item.imageUrl}/>
                            <p>{item.title}</p>
                            <p>{item.quantity}</p>
                        </div>
                    ))
                }
            </Fragment>
        )
    }
    export default CartItems
    