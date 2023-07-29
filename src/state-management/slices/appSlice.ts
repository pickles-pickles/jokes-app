import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../store'

// Define a type for the slice state
interface LoginState {
  isLoggedIn: boolean
  isDarkTheme: boolean
}

// Define the initial state using that type
const initialState: LoginState = {
  isLoggedIn: true,
  isDarkTheme: false
}

export const logInSlice = createSlice({
  name: 'app',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setIsLoggedIn: (state, action: PayloadAction<boolean>) => {
      state.isLoggedIn = action.payload
    },
    setDarkTheme: state => {
      state.isDarkTheme = true
    },
    setLightTheme: state => {
      state.isDarkTheme = false
    }
  }
})

export const { setIsLoggedIn, setDarkTheme, setLightTheme } = logInSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const isLoggedInSelector = (state: RootState) => state.app.isLoggedIn
export const isDarkThemeSelector = (state: RootState) => state.app.isDarkTheme

export default logInSlice.reducer
