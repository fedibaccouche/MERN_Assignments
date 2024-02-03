import React, { useState } from 'react'

const DisplayPokemons = (props) => {
    const {pokemons}=props
    const [affiche,setAffiche]=useState(false)
    const display=()=>{
        setAffiche(true)
    }
    const clear=()=>{
        setAffiche(false);
    }
  return (
    <div>
    {/* <button onClick={display}>Get Pokemons</button>
    <button onClick={clear}>clear</button> */}
    {/* {affiche ? pokemons.p.slice(0,806).map((e,index) */}
    {pokemons.p? pokemons.p.slice(0,806).map((e,index)=>{
        
        return (
          <ul>
            <li>{e.name}</li>
          </ul>
        )
      
    }):null}
    </div>
  )
}

export default DisplayPokemons