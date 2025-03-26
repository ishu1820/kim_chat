import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Navbar from './components/Navbar.jsx'
import SignUp from './pages/Signup.jsx'

createRoot(document.getElementById('navbar')).render(
  <StrictMode>
    <Navbar />
  </StrictMode>,
)

createRoot(document.getElementById('body')).render(
  <StrictMode>
    <SignUp />
  </StrictMode>,
)
