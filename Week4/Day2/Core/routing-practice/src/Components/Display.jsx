import React from 'react'
import { useParams } from "react-router-dom"; 

const Display = (props) => {
    const {param,color,bg}=useParams()
  return (
    <div>
        

    {(isNaN(+param)==true)? (<p style={{
        color:`${color}`,
        backgroundColor:`${bg}`,
       

    }}>The word is : {param}</p>) :
        (<p>The number is : {param}</p>)  }
    </div>
  )
  
}

export default Display