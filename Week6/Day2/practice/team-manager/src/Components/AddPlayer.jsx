import React, { useState } from 'react'
import { Link, Navigate } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
const AddPlayer = () => {

    const[name,setName]=useState("")
    const[position,setPosition]=useState("")
    const[button,setButton]=useState(true)
    const[error,setError]=useState("")
    const [errors, setErrors] = useState([]);
    const nav=useNavigate()

    const nameValidator=(e)=>{
        if (e.target.value.length>=2)
        {
            console.log(e.target.value.length)
            
            setName(e.target.value)
            setButton(false)
            setError("")
            console.log(error)
        }
        else{
            setError("*Name must be at least  2 characters length")
            setButton(true)
            

        }
    }


      
  const submitForm=(e)=>
  {
 
    e.preventDefault();
    axios.post('http://localhost:5000/api/players', {
        name,    
        position,

    })
        .then(res=>{
 
                console.log(res.data);
                nav("/players/list")


            })
        .catch(err=>{
                console.log(err.response.data.error)
                
                setErrors(err.response.data.error.errors);
        })
   

  }
  return (
    <div>
    <div className="card" >
      <div className="card-body">
         

        <h3>Add a player</h3>
        <div className='header'>

          <Link to={"/players/list"}>List</Link>
          <div style={{margin:"0 1.2rem"}}>|</div>
          <Link to={"/players/addplayer"}>Add Player</Link>

        </div>
                  
        <form onSubmit={submitForm} >
            <div class="mb-3 row">
                <label for="staticEmail" class="col-sm-2 col-form-label">Player Name :</label>
                <div class="col-sm-10">
                    <input type="text" class="form-control" onChange={nameValidator} id="exampleFormControlInput1" placeholder="Enter player's name"/>
                </div>
          </div>
            <div class="mb-3 row">
                { error? <div style={{color:"red"}}>{error}</div> :""}
                { errors.name ? 
                        <p>{errors.name.message}</p>
                        : null
                    }
            </div>
          <div class="mb-3 row">
                <label for="inputPassword" class="col-sm-2 col-form-label">Player's Position:</label>
                <div class="col-sm-10">
                    <input type="text" className="form-control" value={position} onChange={(e)=>setPosition(e.target.value)} id="exampleFormControlInput1" placeholder="Enter player's position"/>
                </div>
          </div>
          <div class="mb-3 row">
            <button disabled={button} type="submit"  className="btn btn-success">Add</button>
          </div>
        </form>
      </div>
      </div>
    </div>
  )
}

export default AddPlayer