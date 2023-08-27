import React, { useRef } from 'react';

import classes from './AddMovie.module.css';
import { json } from 'react-router-dom';

function AddMovie(props) {
  const nameRef = useRef('');
  const emailRef = useRef('');
  const phoneRef = useRef('');
  const complainRef = useRef('');

  async function submitHandler(event) {
    event.preventDefault();
    const movie = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      phone: phoneRef.current.value,
      complain:complainRef.current.value
    };

    try{
        const response = await fetch('https://react-dummy-c727f-default-rtdb.firebaseio.com/Complain.json',{
          method:'POST',
          body:JSON.stringify(movie),
          headers:{
            'Content-Type' : 'application/json'
          }
        })

        const data = await response.json();
        console.log(data);
    }

    catch({message}){
        console.log(Error.message);
    }
  }

  return (
    <form onSubmit={submitHandler} className={classes.mainpage}>
      <div className={classes.control}>
        <label htmlFor='title'>Name</label>
        <input type='text' id='title' ref={nameRef} />
      </div>
      <div className={classes.control}>
        <label htmlFor='email'>Email</label>
        <input type='email' id='email' ref={emailRef} />
      </div>
      <div className={classes.control}>
        <label htmlFor='phone'>Phone</label>
        <input type='text' id='phone' ref={phoneRef} />
      </div>
      <div className={classes.control}>
        <label htmlFor='opening-text'>Problem</label>
        <textarea rows='5' id='opening-text' ref={complainRef}></textarea>
      </div>
      
      <button type='submit'>Submit</button>
    </form>
  );
}

export default AddMovie;
