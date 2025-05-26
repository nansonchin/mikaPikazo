import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Cart from './pages/cart/cart.tsx'
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Cart />
  </StrictMode>,
)
