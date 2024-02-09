import React from 'react'
import axios from 'axios'
import { Link, json } from 'react-router-dom'
import { useEffect } from 'react'

const ListProducts = (props) => {   
    const{products,setProducts,deleteFromDom}=props


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


    const deleteProduct=(id)=>{
        axios.delete("http://localhost:8000/api/products/"+id)
    	.then((res)=>{
            deleteFromDom(id)
	})
    	.catch((err)=>{
            console.log(err);
    	})

    }
    
  return (
    <div>
        <h1 style={{
            margin:"10px"
        }}>All Products : </h1>
        
        

        { products.length!==0 ? products.map((product,index)=>{
            return (
                <div className="card products">
                <div className="card-body">
                    <div className="card-title">
                    <Link style={{
                        fontSize:"1.5rem"
                    }} to={`/product/${product._id}`}>{product.title}</Link>
                    </div>
                    <div className='buttons'>
                        <div >
                        <Link className="btn btn-primary me-md-2"  to={`/product/update/${product._id}`}>Update</Link>
                        </div>
                        <div>
                            <button className='btn btn-danger me-md-2' onClick={()=>deleteProduct(product._id)}>❌ Delete</button>
            
                        </div>
                    </div>
                </div>
                </div>
            )
        }):""}
        
       
    </div>
  )
}

export default ListProducts