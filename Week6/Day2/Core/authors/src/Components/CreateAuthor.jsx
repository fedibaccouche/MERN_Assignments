import React, { useState } from 'react'
import FormAuthor from './FormAuthor'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
const CreateAuthor = (props) => {
    const{authors,setAuthors}=props
    const[errors,setErrors]=useState([])
    const navigate=useNavigate()


   const CreateAuthor = authorParam => {
    console.log("Im at the create author")
    console.log(authorParam)
    axios.post('http://localhost:8000/api/authors', authorParam)
        .then(res => {
            console.log(res);
            console.log(res.data)
            setAuthors([...authors, res.data.Author])
            navigate("/home")
            
        })
        .catch(err=>{
            setErrors(err.response.data.errors);
            console.log(err.response.data.errors)
            
        })
}
  return (
    <div>
      {console.log("create author")}
      
      <FormAuthor name="" errors={errors} onSubmitProp={CreateAuthor}/>
    </div>
  )
}

export default CreateAuthor