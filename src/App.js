import './App.css';
import Navbar from './components/Navbar.js';
import ItemListContainer from './components/ItemListContainer.js';
import ItemDetailContainer from './components/ItemDetailContainer.js';
import Cart from './components/Cart.js';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CartContextProvider from './components/CartContext.js';

const App = () => {
  return (
    <div className="App">
      <>
        <CartContextProvider>
          <BrowserRouter>
            <Navbar />
              <Routes>
                <Route path="/" element={<ItemListContainer/>}/>
                <Route path="/category/:idCategory" element={<ItemListContainer/>}/>
                <Route path="/item/:id" element={<ItemDetailContainer/>}/>
                <Route path='/cart' element={<Cart/>}/>
              </Routes>
          </BrowserRouter>
        </CartContextProvider>
      </>
    </div>
  );
}

export default App;
