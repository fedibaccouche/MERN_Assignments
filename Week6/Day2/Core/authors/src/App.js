import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import {Routes, Route} from 'react-router-dom';
import UpdateAuthor from './Components/UpdateAuthor';
import ListAuthors from './Components/ListAuthors';
import CreateAuthor from './Components/CreateAuthor';
import axios from 'axios'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'

function App() {
  const[authors,setAuthors]=useState([])
  const navigate = useNavigate();
  useEffect(() => {
      axios.get('http://localhost:8000/api/authors')
          .then(res => {
              setAuthors(res.data.Authors)
          })
          .catch((err)=>console.log(err))
  }, [])





  return (
    <div className="App">
      
     <h1>Favourite Authors</h1>
      <Routes>
      <Route element={<ListAuthors authors={authors}  UpdateAuthor={UpdateAuthor}
               setAuthors={setAuthors}/>}  path='/home' default/>
      <Route element={<CreateAuthor authors={authors} setAuthors={setAuthors} />} path="/author/new"/>
      <Route element={<UpdateAuthor authors={authors} setAuthors={setAuthors}  />} path="/authors/update/:id"/> 
    </Routes>
    </div>
  );
}

export default App;
