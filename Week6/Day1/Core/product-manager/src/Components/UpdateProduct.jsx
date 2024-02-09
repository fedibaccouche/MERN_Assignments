import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const UpdateProduct = () => {

    
    const [title, settitle] = useState(""); 
    const [price, setprice] = useState(0);
    const [description, setDesciption] = useState(""); 
    const navigate = useNavigate();

    const {id}=useParams()
    useEffect(()=>{
    	axios.get("http://localhost:8000/api/products/"+id)
    	.then((res)=>{
        console.log("++++++++++++++++++")
	    console.log(res.data.Product)
        console.log("++++++++++++++++++")
        settitle(res.data.Product.title)
        setprice(res.data.Product.price)
        setDesciption(res.data.Product.description)
        
       
	})
    	.catch((err)=>{
            console.log(err);
    	})
    }, [])

    const updateProduct=(e)=>{
        e.preventDefault()
        axios.patch('http://localhost:8000/api/products/' + id, {
            title,    
            price,  
            description  
        })
            .then(res => {
                console.log(res);
                navigate("/home"); // this will take us back to the Main.js
            })
            .catch(err => console.log(err))

    }

  return (
    <form  onSubmit={updateProduct}>
    <h1>Product Manager</h1>
    <div className='input'>
        <label  >Title :</label>
                {/* When the user types in this input, our onChange synthetic event 
                    runs this arrow function, setting that event's target's (input) 
                    value (what's typed into the input) to our updated state   */}
        <input type="text" value={title}  onChange = {(e)=>settitle(e.target.value)}/>
    </div>
    <div className='input'>
        <label  >Price :</label>

        <input type="number" value={price} onChange = {(e)=>setprice(e.target.value)}/>
    </div>
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

export default UpdateProduct