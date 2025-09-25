import React from 'react'
import { RouterProvider } from 'react-router';
import { createBrowserRouter } from 'react-router-dom';
import Layout from './common/Layout';
import Home from './pages/Home';
import './App.css'
import Signin from './pages/Signin';
import Signup from './pages/Signup';
const App = () => {
 const router = createBrowserRouter([
    {
      path:"/",
      element: <Layout/>, 
      children: [
        {
          path:"/",
          element: <Home/>,
        },
        {
          path:"/signin",
          element:<Signin/>
        },
        {
          path:"/signup",
          element:<Signup/>
        }
      ]
      ,
    },
  ]);
  return (
    <div      >
    
     <RouterProvider router = {router} />
     
    </div>
  )
}

export default App
