import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../store'
import { jokeType } from '../../types/types'
import { getAllJokes } from '../../services/jokesService.ts'

// Define a type for the slice state
interface JokesState {
  jokeList: jokeType[]
  isLoading: boolean
}

// Define the initial state using that type
const initialState: JokesState = {
  jokeList: [],
  isLoading: false
}

export const fetchAllJokes = createAsyncThunk(
  'jokes/fetchAllJokes',
  async () => {
    const response = await getAllJokes()
    const data = await response.data
    return data
  }
)

export const jokesSlice = createSlice({
  name: 'jokes',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setJokeList: (state, action: PayloadAction<jokeType[]>) => {
      state.jokeList = action.payload
    }
  },
  extraReducers: builder => {
    builder
      .addCase(fetchAllJokes.pending, state => {
        state.isLoading = true
      })
      .addCase(fetchAllJokes.fulfilled, (state, action) => {
        state.isLoading = false
        state.jokeList = action.payload
      })
      .addCase(fetchAllJokes.rejected, state => {
        state.isLoading = false
        state.jokeList = []
      })
  }
})

export const { setJokeList } = jokesSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const jokeListSelector = (state: RootState) => state.jokes.jokeList

export default jokesSlice.reducer
