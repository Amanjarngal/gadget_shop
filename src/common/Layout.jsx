import React from 'react'
// import Home from './Home'
import Header from './Header'
import { Outlet } from 'react-router-dom'

import Footer from './Footer1'

const Layout = () => {
  return (
 <>
 
 <Header/>
 <Outlet />
 <Footer/> 
 </>
 
  )
}

export default Layout
