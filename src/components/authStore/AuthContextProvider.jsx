import AuthContext from "./Auth-context";
import { useState } from "react";
const  AuthContextProvider = (props) => {
    const initialToken = localStorage.getItem('token')
    const [token,setToken] = useState(initialToken);

    const userLoggedIn = !!token;

    const loginHamdler = (token) =>{
        setToken(token);
        localStorage.setItem('token',token);
    }
    const logOutHamdler = () => {
        setToken(null);
        localStorage.removeItem('token');
    }

    
    const contextValue = {
        token:token,
        isLoggedIn: userLoggedIn,
        login:loginHamdler,
        logout:logOutHamdler
    }
    return <AuthContext.Provider value={contextValue}>
    {props.children}</AuthContext.Provider>
}

export default AuthContextProvider