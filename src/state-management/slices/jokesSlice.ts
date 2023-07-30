import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../store'
import { jokeType } from '../../types/types'
import { getAllJokes } from '../../services/jokesService.ts'
import {
  cleanAndConvertViews,
  convertDate,
  mapColorToViews,
  maskEmail
} from '../../helpers/jokeListHelpers.ts'

// Define a type for the slice state
interface JokesState {
  jokeList: jokeType[]
  isLoading: boolean
  error: any
  success: boolean
}

// Define the initial state using that type
const initialState: JokesState = {
  jokeList: [],
  isLoading: false,
  error: null,
  success: false
}

export const fetchAllJokes = createAsyncThunk(
  'jokes/fetchAllJokes',
  async () => {
    const response = await getAllJokes()
    const data = await response.data
    console.log(data)
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
        state.success = false
      })
      .addCase(fetchAllJokes.fulfilled, (state, action) => {
        state.jokeList = action.payload.map((joke: jokeType) => ({
          id: joke.id ? Number(joke.id) : '-',
          title: joke.title || '-',
          body: joke.body || '-',
          author: maskEmail(joke.author),
          views: cleanAndConvertViews(joke.views),
          createdAt: convertDate(joke.createdAt),
          viewsColor: mapColorToViews(joke.views)
        }))

        state.isLoading = false
        state.success = true
      })
      .addCase(fetchAllJokes.rejected, (state, action) => {
        state.isLoading = false
        state.jokeList = []
        state.error = action.error
      })
  }
})

export const { setJokeList } = jokesSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const jokeListSelector = (state: RootState) => state.jokes.jokeList
export const jokeListIsLoadingSelector = (state: RootState) =>
  state.jokes.isLoading
export const jokeListErrorSelector = (state: RootState) => state.jokes.error
export const jokeListSuccessSelector = (state: RootState) => state.jokes.success

export default jokesSlice.reducer
