import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material'
import { styled } from '@mui/material/styles'
import { NavLink } from 'react-router-dom'
import ThemeToggler from './ThemeToggler.tsx'

const StyledNavLink = styled(NavLink)(({ theme }) => ({
  color: theme.palette.background.paper
}))

const NavigationBar = () => {
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

            <Button sx={{ flexGrow: 1 }} color='inherit'>
              Login
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  )
}

export default NavigationBar
