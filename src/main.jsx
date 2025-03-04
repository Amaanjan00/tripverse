import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './Pages/App.jsx'
import { BrowserRouter, createBrowserRouter, RouterProvider } from 'react-router'
import Contact from './Pages/Contact.jsx'
import About from './Pages/About.jsx'
import Package from './Pages/Package.jsx'

const router = createBrowserRouter([
  {path: '/', element: <App/>},
  {path: '/contact', element: <Contact/>},
  {path: '/about', element: <About/>},
  {path: '/packages', element: <Package/>},
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
