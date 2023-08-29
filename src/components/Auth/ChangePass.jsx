import { useContext, useRef } from 'react';
import classes from './ChangePass.module.css'
import AuthContext from '../authStore/Auth-context';
import { useNavigate } from 'react-router-dom';
const ChangePass = () => {
    const passRef = useRef('');
    const authCtx = useContext(AuthContext);
    const nevigate = useNavigate();
    const submitHandler = async (event) => {
        event.preventDefault();

        const enteredPassword = passRef.current.value;
        
        try{
            const response = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyCG8ycfACaCjzv3zmrRKeeeK8YQQ7lkMDE',{
                method:'POST',
                body:JSON.stringify({
                    idToken:authCtx.token,
                    password:enteredPassword,
                    returnSecureToken: false
                }),
                headers :{
                    'Content-Type' : 'application/json'
                }
            })

            const data = await response.json();
            console.log('Password Has Changed',data);
            nevigate('/store');
            return data;
        }

        catch{
            throw new Error("Unable to Change Pass")
        }
    }

    return <form onSubmit= {submitHandler} className={classes.passMain}>
        <label>Change Pass</label>
        <input type='password' ref={passRef}></input>
        <div>
            <button type='submit'>Submit</button>
        </div>
    </form>
}

export default ChangePass;