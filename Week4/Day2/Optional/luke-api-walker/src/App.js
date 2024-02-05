import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
  Link 
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css'; 
import Dropdown from 'react-bootstrap/Dropdown'; 
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import { useNavigate} from "react-router-dom";
import Display from './Components/Display';
import Error from './Components/Error';


function App() {
  const[id,setId]=useState(1)
  const[resource,setResource]=useState("")
  const navigate = useNavigate();


  const submitForm=(e)=>{
    e.preventDefault();
    console.log(id)
    console.log(resource)
    navigate(`/${resource}/${id}`)
    

  }
  return (
  
    <div className="App">
      
      <form className='form' onSubmit={submitForm}>
        <label>Search For : </label>
        <Form.Select onChange={(e)=>setResource(e.target.value)} value={resource} aria-label="Default select example" size="sm" style={{
          backgroundColor:'#f3f3f0',
          width:"200px",
          height:"50px",
          borderRadius: "5px",
          border:"none",
          margin:"0 10px",
          fontSize:"1.2rem"

        }}>
      <option>Select resource</option>
      <option value="people">People</option>
      <option value="planets">Planets</option>
        </Form.Select>
      <label>ID: </label>
      <input tye="text" className='input' placeholder='1' value={id} onChange={(e)=>setId(e.target.value)}></input>
      <button type='submit' className='button'>Search</button>
      </form>
    
      <Routes>
     
        <Route exact path="/:param/:id" element={<Display/>} />
        <Route exact path="/error" element={<Error/>} />
        
      </Routes>
    
    </div>
   
  );
}

export default App;
