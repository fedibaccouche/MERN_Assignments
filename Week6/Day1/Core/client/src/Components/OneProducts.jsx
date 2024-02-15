import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';

const OneProducts = () => {
    const {id}=useParams()
    const[product,setProduct]=useState("")
    useEffect(() => {
        axios.get("http://localhost:8000/api/products/" +id)
            .then( res => { 
                console.log(res.data);
                setProduct(res.data.Product);
            })
            .catch( err => console.log(err) );
    }, []);
  return (
    
    <div className='oneProduct'>
        <Link to={"/products"}>Home</Link>
        {product? (
            <>
            <h3>{product.title}</h3>
            <div>Price : $ {product.price} </div>
            <div>Description : {product.description}</div>
            </>
         ):""
        
            
        }
    </div>
  )
}

export default OneProducts