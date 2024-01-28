import logo from './logo.svg';
import './App.css';
import styles from './Form.Styling.module.css'
import { useState } from 'react';
import Display from './Components/Display';
import Form from './Components/Form';

function App() {
  const[box,setBox]=useState([])

  const addBox=(c)=>
  {
    setBox([...box,c])
  }
 

  

  return (
    <div>
      <Form addBox={addBox}/>
      <Display box={box}/>
    </div>
  );

}


export default App;
