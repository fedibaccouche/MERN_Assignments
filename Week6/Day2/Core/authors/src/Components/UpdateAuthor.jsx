import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import FormAuthor from './FormAuthor'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useState } from 'react'
const UpdateAuthor = (props) => {
  const[errors,setErrors]=useState([])
  const navigate=useNavigate()
  const {id}=useParams()
  

  const [author, setAuthor] = useState({});
  const [loaded, setLoaded] = useState(false);

        useEffect(() => {
          axios.get('http://localhost:8000/api/authors/' + id)
              .then(res => {
                  setAuthor(res.data.Author);
                  setLoaded(true);
              })
                }, [])
  const UpdateAuthor=(name)=>{
    axios.patch('http://localhost:8000/api/authors/' + id,name)
        .then(res => {
            console.log(res);
            
            navigate("/home");
        }).catch(err=>{
          setErrors(err.response.data.errors);
      })

}
  return (
    <div>
      {
        loaded &&<FormAuthor name={author.name} errors={errors} onSubmitProp={UpdateAuthor} />
      }
    </div>
  )
}

export default UpdateAuthor