import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material'
import { styled } from '@mui/material/styles'
import { NavLink } from 'react-router-dom'
import ThemeToggler from './ThemeToggler.tsx'
import { useAuth0 } from '@auth0/auth0-react'

const StyledNavLink = styled(NavLink)(({ theme }) => ({
  color: theme.palette.background.paper
}))

const NavigationBar = () => {
  const { logout } = useAuth0()

  const handleLogout = () => {
    logout({ returnTo: window.location.origin })
  }
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position='static'>
          <Toolbar>
            <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
              <StyledNavLink to='/home'>Home</StyledNavLink>
            </Typography>
            <Box sx={{ flexGrow: 1 }}>
              <ThemeToggler />
            </Box>

            <Button sx={{ flexGrow: 1 }} color='inherit' onClick={handleLogout}>
              Logout
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  )
}

export default NavigationBar
