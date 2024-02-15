import React from 'react'
import { useState } from 'react';
import axios from 'axios';


const FormProduct = (props) => {
    //keep track of what is being typed via useState hook
    const [title, settitle] = useState(""); 
    const [price, setprice] = useState();
    const [description, setDesciption] = useState(""); 
    const[errors,setErrors]=useState([])
    

    //handler when the form is submitted
    const onSubmitHandler = (e) => {
        //prevent default behavior of the submit
        e.preventDefault();
        //make a post request to create a new person
        console.log(price)
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
                settitle("")
                setprice(0)
                setDesciption("")
            })
            .catch(err=>{
                console.log(err.response.data.error);
                setErrors(err.response.data.error.errors);
            })
    }
    
    return (
        <form  onSubmit={onSubmitHandler}>
            <h1>Product Manager</h1>
            <div className='input'>
                <label  >Title :</label>
                {/* When the user types in this input, our onChange synthetic event 
                    runs this arrow function, setting that event's target's (input) 
                    value (what's typed into the input) to our updated state   */}
                <input type="text" value={title}  onChange = {(e)=>settitle(e.target.value)}/>
            </div>
            { errors.title ? 
                        <div style={{color:"red"}}>{errors.title.message}</div>
                        : null
                    }
            <div className='input'>
                <label  >Price :</label>
    
                <input type="number" value={price} onChange = {(e)=>setprice(e.target.value)}/>
            </div>
            { errors.price ? 
                        <div style={{color:"red"}}>{errors.price.message}</div>
                        : null
                    }
            <div className='input'>
                <label  >Description : </label>

                <input type="text" value={description} onChange = {(e)=>setDesciption(e.target.value)}/>
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