import './App.css';
import Navbar from './components/Navbar.js';
import ItemListContainer from './components/ItemListContainer.js';
import ItemDetailContainer from './components/ItemDetailContainer.js';
import Cart from './components/Cart.js';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <div className="App">
      <>
        <BrowserRouter>
          <Navbar />
            <Routes>
              <Route path="/" element={<ItemListContainer/>}/>
              <Route path="/category/:id" element={<ItemListContainer/>}/>
              <Route path="/item/:id" element={<ItemDetailContainer/>}/>
              <Route path='/cart' element={<Cart/>}/>
            </Routes>
        </BrowserRouter>


      </>
    </div>
  );
}

export default App;
