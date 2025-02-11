import react from 'react'
import React from 'react'
import { Outlet } from 'react-router-dom'

const MainNav = react.lazy(()=>import('../Components/MainNav'))
const Footer = react.lazy(()=>import('../Components/Footer'))
function MainLayout() {
  return (
    <>
        <MainNav/>
        <Outlet/>
        <Footer/>
    </>
  )
}

export default MainLayout