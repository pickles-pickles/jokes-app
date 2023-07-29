import { combineReducers, configureStore } from '@reduxjs/toolkit'
import loginSlice from './state-management/slices/loginSlice.ts'

export const store = configureStore({
  reducer: combineReducers({ login: loginSlice })
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
