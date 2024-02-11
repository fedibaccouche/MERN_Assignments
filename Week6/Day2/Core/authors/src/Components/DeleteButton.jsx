import React from 'react'

const DeleteButton = (props) => {

    const {deleteAuthor,id}=props
    const delete_Author = ()=> {
        deleteAuthor(id)
    }
  return (
    <button style={{margin:"5px"}} type="button" class="btn btn-danger" onClick={delete_Author} >Delete</button>
  )
}

export default DeleteButton