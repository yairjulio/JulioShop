import './App.css';
import Navbar from './components/Navbar.js';
import ItemListContainer from './components/ItemListContainer.js';
import ItemCount from './components/ItemCount.js';

const App = () => {
  return (
    <div className="App">
      <>
        <Navbar />
        <ItemListContainer name="Yair"/>
        <ItemCount stock="5" initial="1"/>
      </>
    </div>
  );
}

export default App;
