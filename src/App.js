import { RouterProvider, createBrowserRouter } from "react-router-dom";
import About from './components/AboutPage/About'
import RootLayOut from "./components/RootLayOut";
import Store from "./components/Store/Store";
import Home from "./components/Home/Home";

const router = createBrowserRouter([
  {path:'/' ,
   element: <RootLayOut/>,
   children:[
    {path:'/' ,element: <Home/>},
    {path:'/store' ,element : <Store/>},
    {path:'/about', element: <About/>}
   ]
  }
])
function App() {
  return < RouterProvider router={router}/>
}

export default App;
