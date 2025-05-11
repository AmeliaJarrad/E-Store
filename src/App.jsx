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

function App() {
  useEffect(() => {
    getAllProducts().then(console.log);
}, []);

  return (
    <>
      <BrowserRouter>
        <ProductsProvider>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<AllProductsPage />} />
          <Route path="/products/new" element={<ProductForm />} />
          <Route path="/products/:id" element={<ProductPage />} />
        </Routes>
        </ProductsProvider>
      
      </BrowserRouter>
    </>
  )
}

export default App
