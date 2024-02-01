import logo from './logo.svg';
import './App.css';
import { useState,useRef  } from 'react';
import DisplayTasks from './Components/DisplayTasks';

function App() {
    const [list,setList]=useState([])
    const taskRef = useRef(undefined);

    const checkTask=(index)=>{
      const newList=list.map((e,i)=>
      {
        return( 
          {
          "task": e.task,
          "done":(i==index)? !(e.done):e.done,
          }
        )
      
      }
      )
      console.log(newList)
      setList(newList)
    }

    const deleteTask=(indexX)=>{
      const newList=list.filter((element,index)=>index!=indexX)
      setList(newList)
    }

    const handleSubmit=(e)=>{
      e.preventDefault();
      const task_value=taskRef.current.value
      
      
      
      setList(
        [...list,{
          "task":task_value,
          "done":false,
        }
      ]
      )
      
    }
  return (
    <div className="App">
      <form className="container" onSubmit={handleSubmit}>
      <input className="input-text" type="text" placeholder='Enter new task' name="task" ref={taskRef} />
      <br/>
      <button className='button' type="submit">Add</button>
      </form>
      
      <DisplayTasks tasks={list} deleteTask={deleteTask} checkTask={checkTask} />
    </div>
  );
}

export default App;
