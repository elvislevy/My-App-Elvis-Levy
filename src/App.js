import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import ItemDetailContainer from './components/ItemDetailContainer';
import Contact from './components/Contact';
import CartProvider  from './context/CartContext';


function App() {
  return (
    <BrowserRouter>
    <CartProvider value={[]}>
      <NavBar/>
      <Routes>
        <Route path='/' element={<ItemListContainer />} />
        <Route path='/products' element={<ItemListContainer />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/item/:itemId' element={<ItemDetailContainer />} />
        <Route path='/cart' element={<h1>Cart</h1>} />
      </Routes>
    </CartProvider>
    </BrowserRouter>
  );
}

export default App;
