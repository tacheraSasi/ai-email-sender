import { useState } from 'react'
import { createBrowserRouter, RouterProvider,Route } from 'react-router-dom'
import './index.css'
import Topbar from './components/Topbar'
import Layout from './pages/Layout'
import Home from './pages/Home'
import Send from './pages/Send'
import Auth from './pages/Auth'

function App() { 

  const router = createBrowserRouter([
    {
      path:"/",
      element:<Layout />,
      children:[
        {
          path:"/",
          element:<Home />
        },
        {
          path:"/send",
          element:<Send />
        },
      ]
    },
    {
      path:"/auth",
      element:<Auth />
    }
  ])

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
