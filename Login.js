import React, { useState } from "react";
// import {  Route } from 'react-router-dom';
import { Alert } from "react-bootstrap"


const Login = () => {
    const [email1,setEmail1] = useState ('');
    const [pass1,setPass1] = useState ('');
    // const [hoe ,setHome] =useState(false)

    function handleSubmitLogin (e){
        e.preventDefault();
        let pass = JSON.parse(localStorage.getItem('pass')) ;
        let email = JSON.parse(localStorage.getItem('email')) ;
        // console.log(pass)
        // console.log(email)
        if(email1 ==='' || pass1 === ''){
            alert('enter all the fields');
        }else if(email === email1 || pass  === pass1){
            alert('sucess')
            // <Route path ='//login/welcome' element = { <Navigate to= "./Welcome" /> } />
        }
        else{
            alert('username or password wrong')
        }
        }
        
    

    return(
        <div className="form" id="myForm">
            <form action="" className="form-container">
                <h1>Log in</h1>
                <div className="inputs">
                    <label >Email</label>
                    <input type="text"
                    required
                    className="form-contrl" 
                    placeholder="enter your EMAIL"
                    onChange={(e)=> setEmail1(e.target.value)}/>
                </div>
                <div className="inputs">
                    <label >Password</label>
                    <input type="password"
                    required
                    className="form-contrl" 
                    placeholder="enter your PASSWORD"
                    onChange={(e)=> setPass1(e.target.value)}/>
                </div>
                <button onClick={handleSubmitLogin}>Login</button>
            </form>
        </div>
    );
};

export default Login;