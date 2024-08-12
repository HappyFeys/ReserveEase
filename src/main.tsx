import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import OnBoarding from './pages/Onboarding/OnBoarding'
import Register from './pages/Connexion/Register'
import SignUp from './pages/Connexion/SignUp'
import Home from './pages/Home/Home'
import Verification from './pages/Connexion/Verification'

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
  },
  {
    path: '/home',
    element: <Home />,
  },
  {
    path: '/verification',
    element: <Verification />,
  }
])


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
