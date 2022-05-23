import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';


function App() {
  // const productos = 
  // [
  //   {
  //     id: 1,
  //     title : 'Star Wars: The Force Awakens',
  //     description: 'Película',
  //     image: 'star_wars_1.jpg',
  //   },

  //   {
  //     id: 2,
  //     title : 'Star Wars: The Last Jedi',
  //     description: 'Película',
  //     image: 'star_wars_2.jpg',
  //   },

  //   {
  //     id: 3,
  //     title : 'Star Wars: The Rise Of Skywalker',
  //     description: 'Película',
  //     image: 'star_wars_3.jpg',
  //   }
  // ]
  return (
    <div className="App">
    <NavBar />
    <h2 className='mt-3'>Películas</h2>
    <div className='container-cards'>
      <ItemListContainer title={'Star Wars: The Force Awakens'} description={'Película'} image={'star_wars_1.jpg'}/>
      <ItemListContainer title={'Star Wars: The Last Jedi'} description={'Película'} image={'star_wars_2.jpg'}/>
      <ItemListContainer title={'Star Wars: The Rise Of Skywalker'} description={'Película'} image={'star_wars_3.jpg'}/>
    </div>
    </div>
  );
}

export default App;
