import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
// import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';


function App() {
  
  return (
    <div className="App">
    <NavBar />
    <h2 className='mt-2'>Películas</h2>
    <div className='container-cards'>
      {/* <ItemListContainer /> */}
      <ItemDetailContainer />
    </div>
    </div>
  );
}

export default App;
