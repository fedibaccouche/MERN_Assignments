import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import DisplayPokemons from './Components/DisplayPokemons';

function App() {

  const[pokemons,setPokemons]=useState(0);

  
  useEffect(()=>{
    fetch("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0")
    .then(response=>{
     return response.json()
     .then(response=>{
      setPokemons({
        p:response.results
      })
     })
    })
  },[])

  return (
    <div className="App">
      
      <DisplayPokemons pokemons={pokemons}/>

    </div>
  );
}

export default App;
