import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
const FormAuthor = (props) => {
    const{name,onSubmitProp,errors}=props
    const[nameAuthor,setNameAuthor]=useState(name)
    const navigate=useNavigate()
  
  const submitForm=(e)=>
    {
      console.log("++++++++++++++++++")
      console.log(nameAuthor)
      e.preventDefault();
      onSubmitProp(
        {"name":nameAuthor}
      )
     

    }
  return (
    <div className='author-form'>
      <Link to={"/home"}>Home</Link>
      {nameAuthor?(
         <div style={{color:"purple"}}>Edit this author</div>
      ):(
        <div style={{color:"purple"}}>Add new author</div>
      )}
      <div className="card" >
      <div className="card-body">
          <form onSubmit={submitForm}>
            <div className="mb-3">

                
            <label for="exampleFormControlInput1" className="form-label">Name :</label>
            <input type="text" className="form-control" value={nameAuthor} onChange={(e)=>setNameAuthor(e.target.value)} id="exampleFormControlInput1" placeholder="Enter author name"/>
            {Object.keys(errors).map((key) => (
                    <div style={{color:"red"}} key="{key}">{errors[key].message}</div>
                ))}
            <div >
              <Link style={{margin:"10px"}} className="btn  btn-primary" to={"/home"}>Cancel</Link>
              <button style={{margin:"10px"}} type="submit"  className="btn  btn-primary">Submit</button>
            </div>
            </div>

          </form>
      </div>
      </div>
    </div>
  )
}

export default FormAuthor