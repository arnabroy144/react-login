import React from "react";
import { useEffect } from "react";
import { useState } from "react";


// const currTime=new Date().toLocaleTimeString();
const currDate=new Date().toDateString();

function Login(){
    const [time,setTime]=useState(new Date().toLocaleTimeString())
useEffect(()=>{
    setInterval(()=>{
        setTime(new Date().toLocaleTimeString())
    },1000)
},[])

return <>
<form className="input">
      
    <label className='line'>Name - 
        <input type='text' placeholder='Full Name' className='box1' ></input>
    </label>

   <br></br>
    <br></br>

    <label className='line'>Password -
        <input type='password' placeholder='Password' maxlength='12' className='box2'></input>
    </label>

    <br></br>
    <br></br>

    <label className='line'> Phone Number-
        <input type='tel' placeholder='Phone No' maxlength='10'  className='box3'></input>
    </label>

    <br></br>
    <br></br>

    <label className='line'>E-mail -
        <input type='email' placeholder='Email'  className='box4'></input>
    </label>

    <br></br>
    <br></br>

    <button type='submit' className='btn'>Submit</button>
    
 </form>
 <h3 className='date'>Date :- <u>{currDate}</u> </h3>
 <h3 className='date'>Time :- <u>{time}</u></h3>
</>
}

export default Login;