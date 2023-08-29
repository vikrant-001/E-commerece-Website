import { useContext, useRef, useState } from "react"
import AuthContext from "../authStore/Auth-context";
import classes from "./LoginForm.module.css"

const LoginForm = () => {
    const emailRef = useRef();
    const passwordRef = useRef();
    const [togle,istoggle] = useState(true);
    

    const authCtx = useContext(AuthContext);
    const toggler = () => {
        istoggle(!togle);
    }
    const submitHandler2 = async (event) =>{
        event.preventDefault();
        const enteredEmail = emailRef.current.value;
        const enteredPassword = passwordRef.current.value;

        try{
            const response = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCG8ycfACaCjzv3zmrRKeeeK8YQQ7lkMDE',{
            method:'POST',
            body:JSON.stringify({
                email:enteredEmail,
                password:enteredPassword,
                returnSecureToken:true,
            }),
            headers:{
                'Content-Type' : 'application/json'
            }   
            });

            const data = await response.json();
            authCtx.login(data.idToken)
            console.log('Login data ',data);
        }
        
        catch{
            alert('Unable to login');
            throw new Error('Unable to login');
            
        }
    }

    const  submitHandler =  async (event) =>  {
        event.preventDefault();
        const enteredEmail = emailRef.current.value;
        const enteredPassword = passwordRef.current.value;

        try{
            const response = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCG8ycfACaCjzv3zmrRKeeeK8YQQ7lkMDE',{
            method:'POST',
            body:JSON.stringify({
                email:enteredEmail,
                password:enteredPassword,
                returnSecureToken:true,
            }),
            headers:{
                'Content-Type' : 'application/json'
            }   
            });

            const data = await response.json();
            console.log('Sign up data' ,data);
            return data;

        }
        
        catch{
            alert('Unable to login');
            throw new Error('Unable to login');
            
        }

    }

    return (
        <form  className = {classes.mainlogin} onSubmit={togle ? submitHandler : submitHandler2}>
            <div className={classes.inputF}>
                <label>Email</label>
                <input type='email' ref = {emailRef}></input>
            </div>

            <div className={classes.inputF}>
                <label>Password</label>
                <input type='password' ref = {passwordRef}></input>
            </div>
            
            <div  className = {classes.togle} onClick={toggler}>{togle ? 'Create an Account' : 'Login in to Existing account'}</div>
            <button className={classes.btn} type='submit'>{togle ? 'Sign up':'Log IN'}</button>

        </form>
    )
}

export default LoginForm