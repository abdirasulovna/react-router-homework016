import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/header/Header';
import { Cart } from './pages/Cart';
import Order from './pages/Order';
// import ProductDetails from './pages/ProductDetails';
import Products from './pages/Products';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/products" element={<Products />} />
        {/* <Route path='/details' element={<ProductDetails/> } /> */}
        <Route path="/carts" element={<Cart />} />
        <Route path="/orders" element={<Order />} />
      </Routes>
    </div>
  );
}

export default App;
