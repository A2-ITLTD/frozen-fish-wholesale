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
]
 }, 
]); 
 
ReactDOM.createRoot(document.getElementById("root")).render( 
 <React.StrictMode> 
 <RouterProvider router={router} /> 
 </React.StrictMode> 
); 
