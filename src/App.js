import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';


function App() {
  
  return (
    <div className="App">
    <NavBar />
    <h2 className='mt-3'>Películas</h2>
    <div className='container-cards'>
      <ItemListContainer />
      
    </div>
    </div>
  );
}

export default App;
