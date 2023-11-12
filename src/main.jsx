import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Home from './pages/Home/Home';
import AboutUs from './pages/AboutUs/AboutUs';
import ContactUs from './pages/ContactUs/ContactUs';
import OurTeam from './pages/OurTeam/OurTeam';
import Products_Pharma from './pages/Products_Pharma/Products_Pharma';
import Products_Nutra from './pages/Products_Nutra/Products_Nutra';
import Products_vetarn from './pages/Products_vetarn/Products_vetarn';
import Products_herbal from './pages/Products_Herbal/Products_herbal';
import Products_Cosmetics from './pages/Products_Cosmetics/Products_Cosmetics';
import Products_Fragrance from './pages/Products_Fragrance/Products_Fragrance';
import Products_Sexual from './pages/Products_Sexual/Products_Sexual';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
  {
    path: "/about_us",
    element: <AboutUs></AboutUs>
  },
  {
    path: "/contact_us",
    element: <ContactUs></ContactUs>
  },
  {
    path: "/our_team",
    element: <OurTeam></OurTeam>
  },
  {
    path: "/products_pharma",
    element: <Products_Pharma></Products_Pharma>
  },
  {
    path: "/products_nutra",
    element: <Products_Nutra></Products_Nutra>
  },
  {
    path: "/products_vetarn",
    element: <Products_vetarn></Products_vetarn>
  },
  {
    path: "/products_herbal",
    element: <Products_herbal></Products_herbal>
  },
  {
    path: "/products_cosmetics",
    element: <Products_Cosmetics></Products_Cosmetics>
  },
  {
    path: "/products_fragrance",
    element: <Products_Fragrance></Products_Fragrance>
  },
  {
    path: "/products_sexual",
    element:<Products_Sexual></Products_Sexual>
  }

]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);