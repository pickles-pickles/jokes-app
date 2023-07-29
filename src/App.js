import './App.css'
import { Routes, Route } from 'react-router-dom'
import LandingPage from './pages/landing-page/LandingPage.tsx'
import LoginPage from './pages/login-page/LoginPage.tsx'
import PrivateRoute from './routing/PrivateRoute.ts'
import HomePage from './pages/home-page/HomePage.tsx'
import React from 'react'

function App () {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route
          path='/home'
          element={
            <PrivateRoute>
              <HomePage />
            </PrivateRoute>
          }
        />
      </Routes>
    </div>
  )
}

export default App
