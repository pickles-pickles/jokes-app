import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material'
import { styled } from '@mui/material/styles'
import { Link, NavLink, Navigate } from 'react-router-dom'
import ThemeToggler from './ThemeToggler.tsx'

const StyledBox = styled(Box)(({ theme }) => ({
  width: '100%',
  minHeight: 50,
  background: theme.palette.background.nav,
  color: theme.palette.background.paper
}))

const StyledNavLink = styled(NavLink)(({ theme }) => ({
  color: theme.palette.background.paper
}))

const NavigationBar = () => {
  return (
    <>
      {/* <StyledBox>
        <nav>
          <ul>
            <li>
              <Link to='/home'>Home</Link>
            </li>
          </ul>
        </nav>
        
      </StyledBox> */}
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position='static'>
          <Toolbar>
            <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
              <StyledNavLink to='home'>Home</StyledNavLink>
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
