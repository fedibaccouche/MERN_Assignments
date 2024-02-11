import React, { useState } from 'react'
import { Link, json } from 'react-router-dom'
import DeleteButton from './DeleteButton'
import UpdateButtons from './UpdateButtons'
import axios from 'axios'
import { useEffect } from 'react'

const ListAuthors = (props) => {

    const[authors,setAuthors]=useState([])


        useEffect(() => {
            axios.get('http://localhost:8000/api/authors')
                .then(res => {
                    setAuthors(res.data.Authors)
                    console.log(res.data.Authors)
                })
                .catch((err)=>console.log(err))
        }, [])


        const removeFromDom = authorID => {
            axios.delete("http://localhost:8000/api/authors/" + authorID)
            .then((res)=>{
                console.log(res);
                console.log(res.data);
                setAuthors(authors.filter(author=> author._id !== authorID));
            })
            .catch((err)=>console.log(err))
            
        }
  return (
    <div>
        <Link to={'/author/new'}>Add an author</Link>
        <h4 style={{color:"purple"}} >We have quotes by :</h4>

                    <table className="table table-striped">
            <thead>
                <tr>
                <th scope="col">Order</th>
                <th scope="col">Authors</th>
                <th scope="col">Actions Available</th>
                </tr>
            </thead>
            <tbody>
            { authors.length!==0 ? authors.map((author,index)=>{
            return(
                <tr>
 
                <th scope="row">{index+1}</th>
                <td  style={{color:"purple"}}>{author.name}</td>
                <td>
                <div className='buttons'>
                {/* <button type="button" class="btn  btn-primary">Update</button> */}
                <UpdateButtons id={author._id}  />
                {/* <button type="button" class="btn btn-danger">❌ Delete</button> */}
                <DeleteButton id={author._id} deleteAuthor={removeFromDom} />
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

export default ListAuthors