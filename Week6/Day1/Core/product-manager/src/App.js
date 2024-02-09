import logo from './logo.svg';
import './App.css';
import FormProduct from './Components/FormProduct';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import ProductView from './Views/ProductView';
import {Routes, Route} from 'react-router-dom';
import OneProducts from './Components/OneProducts';
import UpdateProduct from './Components/UpdateProduct';
function App() {
  return (
    <div className="App">
    <Routes>
      <Route element={<ProductView/>} path='/home' default/>
      <Route element={<OneProducts/>} path="/product/:id"/>
      <Route element={<UpdateProduct/>} path="/product/update/:id"/>
    </Routes>
    </div>
  );
}

export default App;
