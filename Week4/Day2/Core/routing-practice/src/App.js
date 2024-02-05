import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
  Link 
} from "react-router-dom";
import Home from './Components/Home';
import Display from './Components/Display';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route exact path="/:param/:color/:bg" element={<Display />} />
        <Route exact path="/:param" element={<Display />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
