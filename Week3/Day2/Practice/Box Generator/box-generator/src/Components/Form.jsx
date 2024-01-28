import React, { useState } from 'react'
import styles from '../Form.Styling.module.css'

const Form = (props) => {
    const[color,setColor]=useState("")
    const{addBox}=props


    
    const submitHandler=(e)=>
    {
        e.preventDefault()
        console.log(addBox)
        addBox(color)
        setColor("")
    }

  return (
    <form className={styles.form} onSubmit={submitHandler}>
    <label className={styles.text}>Color</label>
    <input className={styles.input}  type="text" value={color} name="input" onChange={(e)=>setColor(e.target.value)}/>
    <input type="submit" className={styles.btn} value="Add"/>
   </form>
   
  )
}

export default Form