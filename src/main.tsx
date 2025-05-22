import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Exhibitions from './pages/exhibitions/exhibitions.tsx'
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Exhibitions />
  </StrictMode>,
)
