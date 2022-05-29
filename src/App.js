import './App.css';
import Navbar from './components/Navbar.js';
//import ItemListContainer from './components/ItemListContainer.js';
import ItemDetailContainer from './components/ItemDetailContainer.js'

const App = () => {
  return (
    <div className="App">
      <>
        <Navbar />
        <ItemDetailContainer />
      </>
    </div>
  );
}

export default App;
