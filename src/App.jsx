import { useEffect } from 'react';
import { getAllProducts } from './services/product-services';
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router';
import NavBar from './components/NavBar/NavBar';
import HomePage from './pages/HomePage/HomePage';
import AllProductsPage from './pages/AllProductsPage/AllProductsPage';
import ProductsProvider from './context/ProductsProvider';
import ProductForm from './components/ProductForm/ProductForm';
import ProductPage from './pages/ProductPage/ProductPage';
import CreateProduct from './pages/CreateProduct/CreateProduct';
import LiveProductsPage from './pages/LiveProductsPage/LiveProductsPage';
import CartPage from './pages/CartPage/CartPage';
import { CartProvider } from './context/CartProvider';
import { ToastContainer } from 'react-toastify';

function App() {
  useEffect(() => {
    getAllProducts().then(console.log);
}, []);

  return (
    <>
      <BrowserRouter>
        <ProductsProvider>
        
        <NavBar />
        <ToastContainer position="bottom-right" autoClose={2000} />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/products" element={<LiveProductsPage />} />
          {/* <Route path="/products" element={<AllProductsPage />} /> */}
          <Route path="/products/:id" element={<ProductPage />} />
          <Route path="/products/new" element={<CreateProduct />} />
        </Routes>
        </ProductsProvider>
        
      </BrowserRouter>
    </>
  )
}

export default App
