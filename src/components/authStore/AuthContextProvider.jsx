import AuthContext from "./Auth-context";
import { useState } from "react";
const  AuthContextProvider = (props) => {
    const [token,setToken] = useState(null);
    const userLoggedIn = !!token;

    const loginHamdler = (token) =>{
        setToken(token);
    }
    const logOutHamdler = () => {
        setToken(null);
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