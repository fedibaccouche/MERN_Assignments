import React, { useState } from 'react'
import FormProduct from '../Components/FormProduct'
import ListProducts from '../Components/ListProducts'

const ProductView = () => {
    const[products,setProducts]=useState([])

    const deleteFromDom=(id)=>{
        setProducts(products.filter((product,index)=>{
            return (product._id!=id)
        })
        )

    }
  return (
    <div>
        <FormProduct products={products} setProducts={setProducts}/>
        <ListProducts products={products} deleteFromDom={deleteFromDom} setProducts={setProducts}/>

    </div>
  )
}

export default ProductView