import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import CardList from './components/CardList/CardList';


function App() {
  return (
    <div className="App">
    <NavBar />
    <div>
      <CardList title={'Productos que se vienen'}/>
    </div>
    </div>
  );
}

export default App;
