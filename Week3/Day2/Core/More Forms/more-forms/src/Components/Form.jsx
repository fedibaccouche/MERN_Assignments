import React from 'react'
import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

export const Form = () => {
    const [Firstname, setFirstname] = useState("");
    const [Lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [Confirmpassword, setConfirmPassword] = useState("");  
    const [FirstnameError, setFirstnameError] = useState("");
    const [LastnameError, setLastnameError] = useState("");
    const [emailError, setemailError] = useState("");
    const [passwordError, setpasswordError] = useState("");
    const [CpasswordError, setCpasswordError] = useState("");

    const handleFirstname=(e)=>{
       if ((1<=e.target.value.length) && (e.target.value.length<2))
       {
        setFirstnameError("First name field must be at least 2 characters")
       }
       else{
        setFirstname(e.target.value)
        setFirstnameError("")
       }

    }
    const handleLastname=(e)=>{
        if ((1<=e.target.value.length) && (e.target.value.length<2))
        {
        setLastnameError("Last name field must be at least 2 characters")
        }
        else {
            setLastname(e.target.value)
            setLastnameError("")
        }
 
     }
     const handlELemail=(e)=>{
        if ((1<=e.target.value.length) && (e.target.value.length<5))
        {
            setemailError("E mail must be at least 5 characters")
        }
        else{
            setEmail(e.target.value)
            setemailError("")
        }
 
     }
     const handlepassword=(e)=>{
        if ((1<=e.target.value.length) && (e.target.value.length<8))
        {
            setpasswordError("Password must be at least 8 characters")
        }
        else{
            setPassword(e.target.value)
            setpasswordError("")
        }
 
     }

    const handlecofirmpassword=(e)=>{
        if (e.target.value!=password){
            setCpasswordError("Passwords must watch")
    
        }
        else{
            setConfirmPassword(e.target.value)
            setCpasswordError("")
        }
    }
     
    
 
  return (

    
        <div className="container" >
        <form className="mx-200 my-auto">
                <div>
                    <label>Firstname: </label> 
                    <input type="text"  onChange={handleFirstname} />
                    {
                       FirstnameError ?
                       <p>{FirstnameError}</p>:
                        ''
                        
                       
                    }
                </div>
                <div>
                    <label>Lastname: </label> 
                    <input type="text"  onChange={handleLastname} />
                    {
                       LastnameError ?
                       <p>{LastnameError}</p>:
                       ''
                    }
                </div>
                <div>
                    <label>Email: </label> 
                    <input type="text"  onChange={handlELemail} />
                    
                    {
                        
                       emailError ?
                       <p>{emailError}</p>:
                       ''
                    }
                </div>
                <div>
                    <label>Password: </label>
                    <input type="password" onChange={handlepassword} />
                    {
                       passwordError ?
                       <p>{passwordError}</p>:
                       ''
                    }
                </div>
                <div>
                    <label>Confirmpassword: </label>
                    <input type="password"  onChange={handlecofirmpassword} />
                    {
                       CpasswordError ?
                       <p>{CpasswordError}</p>:
                       ''
                    }
                </div>
                
            </form>
            <div className="mx-200 my-auto">
                <p className="text-center">Your form data</p>
                <p>FirstName :{Firstname}</p>
                <p>Last Name :{Lastname}</p>
                <p>Email : {email}</p>
                <p>Password : {password}</p>
                <p>Confirm Password : {Confirmpassword}</p>


            </div>
        </div>
    );
  
}
