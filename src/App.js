import './App.css';
import Store from './components/Store/Store';
import Heading from './components/Heading';
import Navbar from './components/Navbar';
import { useState } from 'react';
import CartItems from './components/Cart/CartItems';
const productsArr = [

  {
  
  title: 'Colors',
  
  price: 100,
  
  imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
  
  },
  
  {
  
  title: 'Black and white Colors',
  
  price: 50,
  
  imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
  
  },
  
  {
  
  title: 'Yellow and Black Colors',
  
  price: 70,
  
  imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
  
  },
  
  {
  
  title: 'Blue Color',
  
  price: 100,
  
  imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
  
  }
  
  ]
  
  
  
function App() {
  const [showCart,setShowCart] = useState(true);

  const cartHandler = (event) => {
    event.preventDefault();
    setShowCart(!showCart);
  }

  return (
    <div>
        <Navbar onClick = {cartHandler}/>
        <Heading/>
        <div className='container'>
        <Store productsArr = {productsArr}/>
        {showCart && <CartItems/>}
        </div>
    </div>
    
   
  );
}

export default App;
