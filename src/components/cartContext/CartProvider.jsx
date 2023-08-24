import CartContext from "./Cart-context"
const CartProvider = (props) => {
    const cartContext = {
        items : [

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
            
            ],

        totalAmount : 3,
        
    }
    return <CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>
}

export default CartProvider;