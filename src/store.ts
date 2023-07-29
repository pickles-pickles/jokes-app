import { combineReducers, configureStore } from '@reduxjs/toolkit'
import appSlice from './state-management/slices/appSlice.ts'

export const store = configureStore({
  reducer: combineReducers({ app: appSlice })
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
