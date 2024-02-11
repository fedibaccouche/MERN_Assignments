import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
const UpdateButtons = (props) => {
    const {id}=props

    
  return (
    <div>
        {console.log(id)}
        <Link style={{margin:"5px"}} class="btn  btn-primary" to={`/authors/update/${id}`}>Update</Link>
    </div>
  )
}

export default UpdateButtons