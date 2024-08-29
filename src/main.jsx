import * as React from "react"; 
import * as ReactDOM from "react-dom/client";
import {
 createBrowserRouter, 
 RouterProvider, 
} from "react-router-dom"; 
import "./index.css"; 
import Root from "./Root";
import Home from "./Components/Home";
import AllProducts from "./Components/AllProducts";
import Details from "./Components/Details";
import Contact from "./Components/Contact";
import About from "./Components/About";
import Policy from "./Components/Policy";
 
const router = createBrowserRouter([ 
 { 
 path: "/", 
 element: <Root></Root>, 
 children: [
  { path: "/",
    element: <Home></Home>
  },
  { path: "/allproducts",
    element: <AllProducts></AllProducts>
  },
  {
    path: '/item/:id',
    element: <Details></Details>,
    loader : () => fetch('/items.json'),
  },
  { path: "/contact",
    element: <Contact></Contact>
  },
  { path: "/about",
    element: <About></About>
  },
  { path: "/policy",
    element: <Policy></Policy>
  },
]
 }, 
]); 
 
ReactDOM.createRoot(document.getElementById("root")).render( 
 <React.StrictMode> 
 <RouterProvider router={router} /> 
 </React.StrictMode> 
); 
