import React, { useState } from 'react'
import axios from 'axios';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const ListPlayers = () => {

  const [players,setPlayers]=useState([])

  useEffect(() => {
    axios.get('http://localhost:5000/api/players')
        .then(res => {
            
            console.log(res.data)
            setPlayers(res.data.Players)
        })
        .catch((err)=>console.log(err))
}, [])

const removePlayer = (playerId,name) => {
  // alert("Are you sure you want to delete"+name+"?")
  if (window.confirm('Are you sure you want to delete'+name+"?")) {
  axios.delete("http://localhost:5000/api/players/" + playerId)
  .then((res)=>{
      console.log(res);
      console.log(res.data);
      setPlayers(players.filter(player=> player._id !== playerId));
  })
  .catch((err)=>console.log(err))
  
}

else {
  console.log('Deleting player was cancelled');
}
}

  return (
    <div>
    <div className='header'>

        <Link to={"/players/list"}>List</Link>
        <div style={{margin:"0 1.2rem"}}>|</div>
        <Link to={"/players/addplayer"}>Add Player</Link>
     
    </div>
      
      <table className="table table-striped">
            <thead >
                <tr>
                <th scope="col" style={{backgroundColor:"#cccccc"}}>Team Name</th>
                <th scope="col" style={{backgroundColor:"#cccccc"}}>Preferred Position</th>
                <th scope="col" style={{backgroundColor:"#cccccc"}}>Actions</th>
                </tr>
            </thead>
            <tbody>
            { players.length!==0 ? players.map((player,index)=>{
            return(
                <tr key={index}>
 
                {/* <th scope="row">{index+1}</th> */}
                <td>{player.name}</td>
                <td>{player.position}</td>

                <td>
                <button type="button" class="btn btn-danger" onClick={(e)=>removePlayer(player._id,player.name)}>❌ Delete</button>
                
               
 
                </td>

                </tr>
            )
                }
                ):""
            }
                </tbody>
                </table>
    </div>
  )
}

export default ListPlayers