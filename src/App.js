import './App.css';
import Navbar from './components/Navbar.js';
import ItemListContainer from './components/ItemListContainer.js';

const App = () => {
  return (
    <div className="App">
      <>
        <Navbar />
        <ItemListContainer />
      </>
    </div>
  );
}

export default App;
