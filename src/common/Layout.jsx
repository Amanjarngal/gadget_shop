import React from 'react'
// import Home from './Home'
import Header from './Header'
import { Outlet } from 'react-router-dom'
import Signup from '../pages/Signup'
import Signin from '../pages/Signin'

const Layout = () => {
  return (
 <>
 
 <Header/>
 
 <Outlet/>
 </>
 
  )
}

export default Layout
