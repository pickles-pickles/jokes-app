import { useAuth0 } from '@auth0/auth0-react'
import React from 'react'
import HomePage from '../home-page/HomePage.tsx'
import { Button } from '@mui/material'
import NavigationBar from '../../components/App/NavigationBar.tsx'

const LandingPage = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0()
  return (
    <>
      {!isAuthenticated && (
        <>
          <h1>Hello from Landing page</h1>
          <Button
            onClick={() => {
              loginWithRedirect()
            }}
          >
            Log In
          </Button>
        </>
      )}
      {isAuthenticated && (
        <>
          <NavigationBar />
          <HomePage />
        </>
      )}
    </>
  )
}

export default LandingPage
