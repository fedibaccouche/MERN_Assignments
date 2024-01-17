import React from 'react'

export const PersonCard = (props) => {
    const {lastname,firstname,age,haircolor}=props
  return (
    <div>
        <h2>{lastname}, {firstname}</h2>
        <p>Age: {age}</p>
        <p>Haird Color : {haircolor}</p>
    </div>
  )
}

export default PersonCard;
