import './App.css'
import { Routes, Route } from 'react-router-dom'
import LandingPage from './pages/landing-page/LandingPage.tsx'
import LoginPage from './pages/login-page/LoginPage.tsx'
import PrivateRoute from './routing/PrivateRoute.ts'
import HomePage from './pages/home-page/HomePage.tsx'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import {
  isDarkThemeSelector,
  setDarkTheme,
  setLightTheme
} from './state-management/slices/appSlice.ts'
//import { createTheme, ThemeProvider } from '@mui/material'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import appTheme from './styling/theme.ts'
import CssBaseline from '@mui/material/CssBaseline'
import JokeEditorPage from './pages/joke-editor-page/JokeEditorPage.tsx'

function App () {
  const dispatch = useDispatch()
  const isDarkTheme = useSelector(isDarkThemeSelector)

  // Check for theme preference in local storage on initial load
  useEffect(() => {
    const storedTheme = localStorage.getItem('theme')
    if (storedTheme === 'dark') {
      dispatch(setDarkTheme())
    } else {
      dispatch(setLightTheme())
    }
  }, [dispatch])

  // Save the theme preference to local storage whenever it changes
  useEffect(() => {
    localStorage.setItem('theme', isDarkTheme ? 'dark' : 'light')
    console.log(appTheme(isDarkTheme))
  }, [isDarkTheme])

  const theme = createTheme(appTheme(isDarkTheme))
  return (
    <div className='App'>
      <ThemeProvider theme={theme}>
        <CssBaseline />
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
          <Route
            path='/joke-editor'
            element={
              <PrivateRoute>
                <JokeEditorPage />
              </PrivateRoute>
            }
          />
        </Routes>
      </ThemeProvider>
    </div>
  )
}

export default App
