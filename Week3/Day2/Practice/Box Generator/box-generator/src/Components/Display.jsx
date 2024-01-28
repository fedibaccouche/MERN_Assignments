import React from 'react'

const Display = (props) => {
  return (
    props.box.map((box,i)=>{
       return <div key="i" style={{
              display: "inline-block",
              margin: "10px",
              height: "50px", 
              width: "50px", 
              backgroundColor: box,
       }}></div>
    })
    
  
  
  )
}

export default Display