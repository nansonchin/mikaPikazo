import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import ResetPassword from './pages/forgot_password/reset_password.tsx'
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ResetPassword />
  </StrictMode>,
)
