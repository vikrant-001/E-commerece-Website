// import { RouterProvider, createBrowserRouter } from "react-router-dom";
import About from './components/AboutPage/About'
import Store from "./components/Store/Store";
import Home from "./components/Home/Home";
import AddMovie from './components/ContactUs/AddMovie'
import Detailsview from "./components/Store/Detailsveiw";
import RootLayOut from './components/RootLayOut'
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';
import LoginForm from './components/Auth/LoginForm';
import { useContext } from 'react';
import AuthContext from './components/authStore/Auth-context';
import ChangePass from './components/Auth/ChangePass';



// const router = createBrowserRouter([
//   {path:'/' ,
//    element: >,
//    children:[
//     {path:'/' ,element: <Home/>},

//     {path:'/store' ,element : <Store/>},
//     {path:'/store/:id', element: <Detailsview/>},
//     {path:'/about', element: <About/>},
//     {path:'/contactUs', element: <AddMovie/>}
//    ]
//   }
// ])
function App() {
  // return <RouterProvider router={router}/>
  const authCtx = useContext(AuthContext);
  const IsLog = authCtx.isLoggedIn
  return (
    // <AuthContextProvider>
      <Router>
          <Routes>
            <Route path='/' element = {!IsLog ? <LoginForm/>:<RootLayOut/>} >
              <Route path='/' element = {<Home/>}/>
              <Route path='/store' element = {<Store/>}/>
              <Route path='/store/:id' element = {<Detailsview/>}/>
              <Route path='/about' element = {<About/>}/>
              <Route path='/contactUs' element = {<AddMovie/>}/>
              <Route path='/password' element = {<ChangePass/>}/>
            </Route>
          </Routes>
      </Router>
      // </AuthContextProvider>
     
    
  )
}

export default App;
