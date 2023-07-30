import React from 'react'
import { useSelector } from 'react-redux'
import {
  isDarkThemeSelector,
  setLightTheme,
  setDarkTheme
} from '../../state-management/slices/appSlice.ts'
import { useDispatch } from 'react-redux'
import { ToggleButton, ToggleButtonGroup } from '@mui/material'

const ThemeToggler = () => {
  const isDarkTheme = useSelector(isDarkThemeSelector)
  const dispatch = useDispatch()
  return (
    <>
      <ToggleButtonGroup
        color='primary'
        value={isDarkTheme}
        exclusive
        onChange={(e, themeValue) => {
          dispatch(themeValue === 'dark' ? setDarkTheme() : setLightTheme())
        }}
        aria-label='Platform'
      >
        <ToggleButton value='light'>'🔆'</ToggleButton>
        <ToggleButton value='dark'>'🌙'</ToggleButton>
      </ToggleButtonGroup>
    </>
  )
}

export default ThemeToggler
