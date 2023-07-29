import { combineReducers, configureStore } from '@reduxjs/toolkit'
import appSlice from './state-management/slices/appSlice.ts'
import jokesSlice from './state-management/slices/jokesSlice.ts'

export const store = configureStore({
  reducer: combineReducers({ app: appSlice, jokes: jokesSlice })
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
