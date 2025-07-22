import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, createBrowserRouter, RouterProvider } from 'react-router'
import './index.css'
import App from './App.jsx'
import AboutUs from './Pages/AboutUs.jsx'
import Contact from './Pages/Contact.jsx'
import UmrahPackage from './Pages/UmrahPackage.jsx'
import DubaiPackage from './Pages/DubaiPackage.jsx'
import Privacypolicy from './Pages/Privacypolicy.jsx'
import Termsandconditions from './Pages/Termsandconditions.jsx'

const router = createBrowserRouter([
  {path: '/', element: <App/>},
  {path: '/about', element: <AboutUs/>},
  {path: '/contact', element: <Contact/>},
  {path: '/umrahpackage', element: <UmrahPackage/>},
  {path: '/dubaipackage', element: <DubaiPackage/>},
  {path: '/privacypolicy', element: <Privacypolicy/>},
  {path: '/termsandconditions', element: <Termsandconditions/>}
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
