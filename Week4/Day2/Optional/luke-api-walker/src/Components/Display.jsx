import React, {useEffect, useState } from 'react'
import { useParams,Link } from "react-router-dom";
import axios from 'axios';
import { useNavigate} from "react-router-dom";




const Display = (props) => {
    const[res,setRes]=useState({})
    const[home,setHome]=useState("")
    const[homeId,setHomeID]=useState("")
    const{param,id}=useParams()
    const navigate = useNavigate();
    useEffect(()=>{


        axios.get(`https://swapi.dev/api/${param}/${id}`)
        .then(response=>{
            setRes(
                response.data
            )
            //   console.log(response.data)
            //   console.log(param=="people")
            
                
                


            if(param=="people"){
                setHomeID(response.data.homeworld.match(/\d+/)[0]);
                console.log(homeId)
                console.log(response.data.homeworld)
                axios.get(response.data.homeworld)
                .then((response)=>{
                    console.log(response.data.name)
                    setHome(response.data.name)
                                  })
                .catch(err=>{
                    navigate("/error")
                            })
                }
        })
   
     
   
         .catch(err=>{
            navigate("/error")
         })
     
     
        
      },[param,id])


  return (
    <div>
        {param=="people"?(
            <>
            <h1>{res.name}</h1>
            <h3>Height{res.height}:</h3>
            <h3>Hair Color :{res.hair_color}</h3>
            <h3>Eye Color :{res.eye_color}</h3>
            <h3>Skin Color : {res.skin_color}</h3>
            <h3>Homeworld:{home}</h3>
            <Link to={`/planets/${homeId}`}> Homeworld</Link>
            

            </>

        ):(
            <>
           <h1> {res.name}</h1>
           <h3>Climate :{res.climate} </h3>
           <h3>Terrain :{res.terrain}</h3>
           <h3>Surface Water:{res.surface_water}</h3>
           <h3>Population:{res.surface_water}</h3>

           </>
        )}
        

    </div>

    
  )
}

export default Display