import React from 'react'

const DisplayTasks = (props) => {
    const{tasks,deleteTask,checkTask}=props
    
const tabStyle=(indexX)=>{
    if(tasks[indexX].done==true)
    {
        return "barred"
    }
    else {
        return ""
    }
}
    
  return (
    <div >
        {
            tasks.map((item,indexX)=>
            {
                return(
                    <div className='wrapper' key={indexX}>
                     <div className={`task ${tabStyle(indexX)}`}>{item.task}</div>
                     <input className='check-box' type="checkbox" onClick={(e)=>checkTask(indexX)}/>
                     <button className='delete-btn' onClick={(e)=>deleteTask(indexX)}>Delete</button>
                    </div>
                )
            }
            
            )
        }
    </div>
  )
}

export default DisplayTasks