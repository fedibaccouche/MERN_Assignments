import React from 'react'
import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

export const Form = () => {
    const [Firstname, setFirstname] = useState("");
    const [Lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [Confirmpassword, setConfirmPassword] = useState("");  
    
 
  return (

    
        <div className="container" >
        <form className="mx-200 my-auto">
                <div>
                    <label>Firstname: </label> 
                    <input type="text" value={Firstname} onChange={ (e) => setFirstname(e.target.value) } />
                </div>
                <div>
                    <label>Lastname: </label> 
                    <input type="text" value={Lastname} onChange={ (e) => setLastname(e.target.value) } />
                </div>
                <div>
                    <label>Email: </label> 
                    <input type="text" value={email} onChange={ (e) => setEmail(e.target.value) } />
                </div>
                <div>
                    <label>Password: </label>
                    <input type="password" onChange={ (e) => setPassword(e.target.value) } />
                </div>
                <div>
                    <label>Confirmpassword: </label>
                    <input type="password" value={Confirmpassword} onChange={ (e) => setConfirmPassword(e.target.value) } />
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
