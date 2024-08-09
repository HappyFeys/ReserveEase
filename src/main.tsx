import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import OnBoarding from './pages/OnBoarding'
import Register from './pages/Register'
import SignUp from './pages/SignUp'

const router = createBrowserRouter([
  {
    path: '/',
    element: <OnBoarding />,
  },
  {
    path:"/register",
    element:<Register/>
  },
  {
    path: '/signin',
    element: <SignUp />,
  }
])


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
