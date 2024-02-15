import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import {Routes, Route} from 'react-router-dom';
import ListPlayers from './Components/ListPlayers';
import AddPlayer from './Components/AddPlayer';
import Game1 from './Components/Game1';
import { Link } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import Game2 from './Components/Game2';
import Game3 from './Components/Game3';

function App() {  
  return (
    <div className="App">
      <div className='header'>
        <Link to={"/players/list"}>Manage Players</Link>
        <div style={{margin:"0 1.2rem"}}>|</div>
        <Link to={"/status/game/1"}>Manage Players Status</Link>
     
    </div>
    
    <div className="card card-position" >
        <div className="card-body">
      <Routes>
      <Route path="/" element={<Navigate to="/players/list" />} />
      <Route element={<ListPlayers/>} path='/players/list' Default/>
      <Route element={<AddPlayer/>} path="/players/addplayer"/>
      <Route element={<Game1/>} path="/status/game/1"/>
      <Route element={<Game2/>} path="/status/game/2"/>
      <Route element={<Game3/>} path="/status/game/3"/>
    </Routes>

        </div>
    </div>
    

    </div>
  );
}

export default App;
