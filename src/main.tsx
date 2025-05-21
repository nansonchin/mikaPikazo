import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Shop from './pages/shop/shop.tsx'
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Shop />
  </StrictMode>,
)
