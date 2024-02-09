import React, { useState } from 'react'
import FormProduct from '../Components/FormProduct'
import ListProducts from '../Components/ListProducts'

const ProductView = () => {
    const[products,setProducts]=useState([])
  return (
    <div>
        <FormProduct products={products} setProducts={setProducts}/>
        <ListProducts products={products} setProducts={setProducts}/>

    </div>
  )
}

export default ProductView