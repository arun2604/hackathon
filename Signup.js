import React, { useState } from "react";

const Shop = () => {
    
    const [name,setName] = useState ('');
    const [email,setEmail] = useState ('');
    const [pass,setPass] = useState ('');
    let arrays = JSON.parse(localStorage.getItem('details')) ? JSON.parse(localStorage.getItem('details')) : []
    const [localData ,setLocal] = useState(arrays);

    // useEffect(()=>{
    //     localStorage.setItem('details',JSON.stringify(localData))
    // },[localData]);

    function handleSubmit (e){
        e.preventDefault();
        setEmail('');
        setName('');
        setPass('');

        let local = {
            name : name,
            email : email,
            pass : pass
        }
       if(name === '' || email ==='' || pass === ''){
        alert('enter all the fields');
       }
       else{
        setLocal([...localData,local]);          
        localStorage.setItem('details',JSON.stringify(localData))
        console.log(localData)    
       }
    }
    
    return(
        <div className="form" id="myForm">
            <form action="" className="form-container">
                <h1>Registration</h1>
                <div className="inputs">
                    <label >Email</label>
                    <input type="text"
                    required
                    className="form-contrl" 
                    placeholder="enter your EMAIL"
                    onChange={(e)=> setEmail(e.target.value)}/>
                </div>
                <div className="inputs">
                    <label >Name</label>
                    <input type="text"
                    required
                    className="form-contrl" 
                    placeholder="enter your NAME"
                    onChange={(e)=> setName(e.target.value)}/>
                    
                </div>
                <div className="inputs">
                    <label >PassWord</label>
                    <input type="PassWord"
                    required
                    className="form-contrl" 
                    placeholder="enter your Password"
                    onChange={(e)=> setPass(e.target.value)}/>                   
                </div>
                <button onClick={handleSubmit}>submit</button>
            </form>

        </div>
    );
};


export default Shop;