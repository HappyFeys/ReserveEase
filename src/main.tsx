import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import OnBoarding from './pages/Onboarding/OnBoarding'
import Register from './pages/Connexion/Register'
import SignUp from './pages/Connexion/SignUp'
import Home from './pages/Home/Home'
import Verification from './pages/Connexion/Verification'
import Booking from './pages/Booking/Booking'
import BookingDetails from './pages/Booking/BookingDetails'
import Profile from './pages/Profile/Profile'
import ProfileEdit from './pages/Profile/ProfileEdit'
import NewLogement from './pages/Create/NewLogement'

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
  },
  {
    path: '/booking/:id',
    element: <Booking />,
  },
  {
    path: '/reserver/:id',
    element: <BookingDetails />,
  },
  {
    path:'/profile',
    element: <Profile />
  },
  {
    path: '/profile/edit',
    element: <ProfileEdit />
  },
  {
    path: '/profile/logement',
    element: <NewLogement />
  }
])


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
