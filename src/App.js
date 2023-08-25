import { RouterProvider, createBrowserRouter } from "react-router-dom";
import About from './components/AboutPage/About'
import RootLayOut from "./components/RootLayOut";

const router = createBrowserRouter([
  {path:'/' ,
   element: <RootLayOut/>,
   children:[
    // {path:'/store' ,element : <StorePage/>},
    {path:'/about', element: <About/>}
   ]
  }
])
function App() {
  return < RouterProvider router={router}/>
}

export default App;
