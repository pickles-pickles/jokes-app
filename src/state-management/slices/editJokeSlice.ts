import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { jokeType } from '../../types/types'
import {
  updateJoke,
  deleteJoke,
  createJoke
} from '../../services/jokesService.ts'
import { RootState } from '../../store.ts'

// Define a type for the slice state
interface editJokeState {
  jokeToEdit: jokeType
  isLoading: boolean
  isNewJoke: boolean
  error: any
  success: boolean
}

// Define the initial state using that type
const initialState: editJokeState = {
  jokeToEdit: {},
  isLoading: false,
  isNewJoke: false,
  error: null,
  success: false
}

export const updateJokeThunk = createAsyncThunk(
  'jokes/updateJoke',
  async (jokeData: jokeType) => {
    console.log('REQUEST Data from thUNK ', jokeData)
    const response = await updateJoke(jokeData.id!, jokeData)
    const data = await response.data
    console.log('RESPONSE data from thunk', data)
    return data
  }
)

export const deleteJokeThunk = createAsyncThunk(
  'jokes/deleteJoke',
  async (id: number | string) => {
    try {
      const response = await deleteJoke(id)
      const data = await response.data
      console.log('RESPONSE data from thunk', data)
      return data
    } catch (error) {}
  }
)

export const createJokeThunk = createAsyncThunk(
  'jokes/createJoke',
  async (jokeData: jokeType) => {
    const response = await createJoke(jokeData)
    const data = await response.data
    console.log('RESPONSE data from create thunk', data)
    return data
  }
)

export const editJokeSlice = createSlice({
  name: 'editJoke',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setJokeToEdit: (state, action: PayloadAction<jokeType>) => {
      state.jokeToEdit = action.payload
    },
    setIsNewJoke: (state, action) => {
      state.isNewJoke = action.payload
    },
    setEditJokeError: (state, action) => {
      state.error = action.payload
    },
    setEditJokeSuccess: (state, action) => {
      state.success = action.payload
    }
  },

  extraReducers: builder => {
    builder
      // * UPDATE
      .addCase(updateJokeThunk.pending, state => {
        state.isLoading = true
        state.error = null
        state.success = false
        console.log('pending')
      })
      .addCase(updateJokeThunk.fulfilled, state => {
        state.isLoading = false
        state.success = true
        console.log('fulfilled')
      })
      .addCase(updateJokeThunk.rejected, (state, action) => {
        state.isLoading = false
        console.log('rejected')
        state.error = action.error
      })
      // * DELETE
      .addCase(deleteJokeThunk.pending, state => {
        state.isLoading = true
        state.error = null
        state.success = false
        console.log('delete pending')
      })
      .addCase(deleteJokeThunk.fulfilled, state => {
        state.isLoading = false
        state.success = true
        console.log('delete fulfilled')
      })
      .addCase(deleteJokeThunk.rejected, (state, action) => {
        state.isLoading = false
        console.log('delete rejected')
        state.error = action.error
      })
      // * CREATE
      .addCase(createJokeThunk.pending, state => {
        state.isLoading = true
        state.error = null
        state.success = false
        console.log('create pending')
      })
      .addCase(createJokeThunk.fulfilled, state => {
        state.isLoading = false
        state.success = true
        console.log('create fulfilled')
      })
      .addCase(createJokeThunk.rejected, (state, action) => {
        state.isLoading = false
        console.log('create rejected')
        state.error = action.error
      })
  }
})

export const {
  setJokeToEdit,
  setIsNewJoke,
  setEditJokeError,
  setEditJokeSuccess
} = editJokeSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const jokeToEditSelector = (state: RootState) =>
  state.editJoke.jokeToEdit
export const isNewJokeSelector = (state: RootState) => state.editJoke.isNewJoke
export const jokeToEditErrorSelector = (state: RootState) =>
  state.editJoke.error

export const jokeToEditSuccessSelector = (state: RootState) =>
  state.editJoke.success

export default editJokeSlice.reducer
