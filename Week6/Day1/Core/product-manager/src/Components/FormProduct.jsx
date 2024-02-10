import React from 'react'
import { useState } from 'react';
import axios from 'axios';


const FormProduct = (props) => {
    //keep track of what is being typed via useState hook
    const [title, settitle] = useState(""); 
    const [price, setprice] = useState(0);
    const [description, setDesciption] = useState(""); 
    const{products,setProducts}=props
    

    //handler when the form is submitted
    const onSubmitHandler = (e) => {
        //prevent default behavior of the submit
        e.preventDefault();
        //make a post request to create a new person
        axios.post('http://localhost:8000/api/products', {
            title,    
            price,
            description
        })
            .then(res=>{
                console.log(res); 
                console.log("here is res.data")
                console.log(res.data);
                console.log("here is res.data")
                props.setProducts([...props.products,res.data.Product])
            })
            .catch(err=>console.log(err))
    }
    
    return (
        <form  onSubmit={onSubmitHandler}>
            <h1>Product Manager</h1>
            <div className='input'>
                <label  >Title :</label>
                {/* When the user types in this input, our onChange synthetic event 
                    runs this arrow function, setting that event's target's (input) 
                    value (what's typed into the input) to our updated state   */}
                <input type="text"  onChange = {(e)=>settitle(e.target.value)}/>
            </div>
            <div className='input'>
                <label  >Price :</label>
    
                <input type="number" onChange = {(e)=>setprice(e.target.value)}/>
            </div>
            <div className='input'>
                <label  >Description : </label>

                <input type="text"  onChange = {(e)=>setDesciption(e.target.value)}/>
            </div>
            <div>
            <button className='btn btn-secondary' style={{
                width:"10%",
                height:"20%"
            }}>submit</button>
            </div>
        </form>
    )
}

export default FormProduct