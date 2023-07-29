import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../store'

// Define a type for the slice state
interface LoginState {
  isLoggedIn: boolean
}

// Define the initial state using that type
const initialState: LoginState = {
  isLoggedIn: true
}

export const logInSlice = createSlice({
  name: 'login',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setIsLoggedIn: (state, action: PayloadAction<boolean>) => {
      state.isLoggedIn = action.payload
    }
  }
})

export const { setIsLoggedIn } = logInSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const isLoggedInSelector = (state: RootState) => state.login.isLoggedIn

export default logInSlice.reducer
