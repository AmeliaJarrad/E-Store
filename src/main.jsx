import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.scss'
import App from './App.jsx'
import { CartProvider } from './context/CartProvider.jsx'

createRoot(document.getElementById('root')).render(
  // <StrictMode>
  <CartProvider>
    <App />
   {/* </StrictMode>, */}
  </CartProvider>
)
