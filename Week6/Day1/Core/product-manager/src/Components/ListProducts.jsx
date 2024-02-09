import React from 'react'
import axios from 'axios'
import { Link, json } from 'react-router-dom'
import { useEffect } from 'react'

const ListProducts = (props) => {   
    const{products,setProducts}=props


    useEffect(()=>{
    	axios.get("http://localhost:8000/api/products")
    	.then((res)=>{
        console.log("++++++++++++++++++")
	    console.log(res.data)
        console.log("++++++++++++++++++")
        
        setProducts(res.data.Products);
	})
    	.catch((err)=>{
            console.log(err);
    	})
    }, [])
    
  return (
    <div>
        <h1 style={{
            margin:"10px"
        }}>All Products : </h1>
        
        
        { products.length!==0 ? products.map((product,index)=>{
            return (
                <div>
                <Link style={{
                    fontSize:"1.5rem"
                }} to={`/product/${product._id}`}>{product.title}</Link>
                </div>
            )
        }):""}
       
    </div>
  )
}

export default ListProducts