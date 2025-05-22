import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import ShopDetail from './pages/shop/[shopid].tsx'
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ShopDetail />
  </StrictMode>,
)
