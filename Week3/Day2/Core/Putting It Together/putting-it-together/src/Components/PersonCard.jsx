import React from 'react'
import { useState } from 'react'

export const PersonCard = (props) => {
    const {lastname,firstname,haircolor}=props
    const [Age,setAge]=useState(props.age)
    const handleClick=()=>{
        setAge(Age+1);  
    }
  return (
    <div>
        <h2>{lastname}, {firstname}</h2>
        <p>Age: {Age}</p>
        <p>Haird Color : {haircolor}</p>
        <button onClick={handleClick}>Birthday button for {lastname} {firstname}</button>
    </div>
  )
}

export default PersonCard;
