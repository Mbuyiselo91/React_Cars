import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'


import Home from './pages/Home';
import ContactUs from './pages/ContactUs';
import AboutUs from './pages/AboutUs';




import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Login from './components/login';
import Registration from './components/Registration';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
  },
  {
    path: "/contact",
    element: <ContactUs/>

  },
  {
    path: "/about",
    element: <AboutUs/>
  },
  {
    path: "/login",
    element: <Login/>
  },
  {
    path: "/registration",
    element: <Registration/>
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
