import React from 'react'
import { Outlet } from 'react-router-dom'
import Topbar from '../components/Topbar'

const Layout = () => {
  return (
    <div>
      <Topbar />
      <div>
        <Outlet />
      </div>
    </div>
  )
}

export default Layout
