import React from 'react';
import ReactDOM from 'react-dom/client';

import{
  createBrowserRouter,
  RouterProvider,
 } from "react-router-dom"
 import Home from './Views/Home/Home';


 const root = ReactDOM.createRoot(document.getElementById("root"))
 const router =  createBrowserRouter([
     {
         path:"/",
         element:<Home/>
     },

     {
      path:"*",
      element:<> 404 not found</>
  }
])
root.render(<RouterProvider router={router}/>)