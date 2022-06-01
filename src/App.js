import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// COMPONENTES
import NavBar from './components/NavBar/NavBar';
import Home from './pages/Home';
import Detalle from './pages/Detalle';
import CategoryItemList from './pages/CategoryItemList'


function App() {
  
  return (
    <div className="App">
    <BrowserRouter>
    <NavBar />
    <Routes >
    
      
      <Route path='/' element={<Home/>} />
      <Route path='/category/:id' element={<CategoryItemList />} /> 
      <Route path='/item/:id' element={<Detalle/>} />
    
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
