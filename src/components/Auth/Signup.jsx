import { useRef } from "react"

const Signup = () => {
    const emailRef = useRef();
    const passwordRef = useRef();

    const  submitHandler =  async (event) =>  {
        event.preventDefault();
        const enteredEmail = emailRef.current.value;
        const enteredPassword = passwordRef.current.value;

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
        
        if(response.ok){

        }
        else{
            const newres = await response.json();
            console.log(newres)
            return newres
        }

    }
    return (
        <form onSubmit={submitHandler}>
            <label>Email</label>
            <input type="email" ref = {emailRef}></input>

            <label>Password</label>
            <input type="password" ref = {passwordRef}></input>

            <button type='submit'>Login</button>

            <Link to='/'>Log IN</Link>
        </form>
    )
}

export default Signup