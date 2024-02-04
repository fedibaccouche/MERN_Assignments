import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {

  const[pokemons,setPokemons]=useState(0);

  
  useEffect(()=>{
    axios.get("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0")
    .then(response=>{
      setPokemons({
        p:response.data.results
      })
      console.log(response.data.results)
     })
    
  },[])

  return (
    <div className="App" style={{
      margin:"5px auto",
      width:"50%",
      display:"flex",
      justifyContent:"center",
      alignItems:"center",
      flexDirection:"column"
      
    }}>
      
      {pokemons.p? pokemons.p.slice(0,806).map((e,index)=>{
        
        return (
          <ul>
            <li key={index} style={{
              width:"50px",
              textAlign:"center"
            }}>{e.name}</li>
          </ul>
        )
      
    }):null}

    </div>
  );
}

export default App;
