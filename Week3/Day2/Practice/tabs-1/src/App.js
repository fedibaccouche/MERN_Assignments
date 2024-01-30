import logo from './logo.svg';
import './App.css';
import Tabs from './Components/Tabs';
import Display from './Components/Display';
import { useState } from 'react';


function App() {
      const [data,setData]=useState(
        [
          {
            "title":"Tab 1",
            "content":"Tab 1 content is here",
            
          },
          {
            "title":"Tab 2",
            "content":"Tab 2 content is here",
            
          },
          {
            "title":"Tab 3",
            "content":"Tab 3 content is here",
            
          }
        ]
      )

      const [ currentTabIndex, setCurrentTabIndex ] = useState(0);


    return (
      <div className="App">
        <Tabs data={data} setCurrentTabIndex={setCurrentTabIndex} currentTabIndex={currentTabIndex}/>
        <Display data={data} currentTabIndex={currentTabIndex}/>
      </div>
    );
  }
  


export default App;
