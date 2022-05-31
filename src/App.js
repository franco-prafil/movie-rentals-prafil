import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// COMPONENTES
import NavBar from './components/NavBar/NavBar';
// import ItemListContainer from './components/ItemListContainer/ItemListContainer';
// import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Home from './pages/Home';
import Detalle from './pages/Detalle';


function App() {
  
  return (
    <div className="App">
    <BrowserRouter>
    <NavBar />
    <Routes >
    

      <Route path='/' element={<Home />} />
      <Route path='/product/:id' element={<Detalle />} />
    
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
