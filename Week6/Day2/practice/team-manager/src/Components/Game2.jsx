import React from 'react'
import { Link, Navigate } from 'react-router-dom'
import axios from 'axios';
import { useEffect,useState } from 'react'
const Game2 = () => {

    
  const [players,setPlayers]=useState([])

  useEffect(() => {
    axios.get('http://localhost:5000/api/players')
        .then(res => {
            
            console.log(res.data)
            setPlayers(res.data.Players)
        })
        .catch((err)=>console.log(err))
}, [])

  const checkStatusPlaying=(s)=>{
    if (s==="Playing")
    {
      return "btn-success"
    }
    else 
    {
      return "btn-light"
    }
  }
  const checkStatusNPlaying=(s)=>{
    if (s==="Not Playing")
    {
      return "btn-danger"
    }
    else 
    {
      return "btn-light"
    }
  }
  const checkStatusUndecided=(s)=>{
    if (s==="Undecided")
    {
      return "btn-warning"
    }
    else 
    {
      return "btn-light"
    }
  }

  const updatePlayer=(id,r,s)=>{
    s[1]=r
    console.log(s)
    console.log(id)
    axios.patch('http://localhost:5000/api/players/' + id,{
      status:s
    } )
        .then(res => {
            console.log(res.data.Player);
            const updatePlayer=res.data.Player
            setPlayers(players.filter(player=> player._id !== id? {...player,...updatePlayer}:player));
            console.log(players)
            
        }).catch(err=>{
          console.log(err);
      })
    }
  return (
    <div>
    <div>
      <h1>Player Status - Game 2</h1>
    </div>
    <div className='header'>
      <Link to={"/status/game/1"}>Game 1</Link>
      <div style={{margin:"0 1.2rem"}}>|</div>
      <Link to={"/status/game/2"}>Game 2</Link>
      <div style={{margin:"0 1.2rem"}}>|</div>
      <Link to={"/status/game/3"}>Game 3</Link>
   
  </div>

<table className="table table-striped table-bordered">
          <thead >
              <tr>
              <th scope="col"style={{backgroundColor:"#cccccc"}}>Player's Name</th>
              <th scope="col"style={{backgroundColor:"#cccccc"}}>Actions</th>
              </tr>
          </thead>
          <tbody>
          { players.length!==0 ? players.map((player,index)=>{
          return(
              <tr key={index}>

             
              <td>{player.name}</td>

              
              <td>
              <div >
              <button style={{margin:"10px"}} type="button" class={`btn ${checkStatusPlaying(player.status[1])}`} onClick={(e)=>updatePlayer(player._id,"Playing",player.status)}  >Playing</button>
              <button style={{margin:"10px"}} type="button" class={`btn ${checkStatusNPlaying(player.status[1])}`} onClick={(e)=>updatePlayer(player._id,"Not Playing",player.status)}>Not Playing</button>
              <button style={{margin:"10px"}} type="button" class={`btn ${checkStatusUndecided(player.status[1])}`}onClick={(e)=>updatePlayer(player._id,"Undecided",player.status)} >Undecided</button>
              
              </div>
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

export default Game2