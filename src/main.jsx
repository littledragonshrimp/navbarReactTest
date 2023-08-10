import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './styles.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import About from './pages/About.jsx'
import Home from './pages/Home.jsx'
import Pricing from './pages/Pricing.jsx'
import Team from './pages/Team.jsx'
import CatchAll from './pages/CatchAll.jsx'
import Programs from './pages/Programs.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/about",
    element: <About />
  },
  {
    path: "/team",
    element: <Team />
  },
  {
    path: "/home",
    element: <Home />
  },
  {
    path: "/pricing",
    element: <Pricing />
  },
  {
    path: "/programs",
    element: <Programs />
  },
  { //catch all at back of list
    path: "*",
    element: <CatchAll />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
