import React, { useEffect } from 'react'
import JokeEditorForm from '../../components/JokeEditor/JokesEditorForm.tsx'
import { useSelector } from 'react-redux'
import {
  jokeToEditSelector,
  updateJokeThunk
} from '../../state-management/slices/editJokeSlice.ts'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '../../store.ts'

const JokeEditorPage = () => {
  const dispatch = useDispatch<AppDispatch>()
  const jokeToEdit = useSelector(jokeToEditSelector)
  useEffect(() => {
    console.log('joke to edit', jokeToEdit)
  }, [jokeToEdit])

  const submitJoke = () => {
    dispatch(updateJokeThunk(jokeToEdit))
  }
  return (
    <>
      <h1>Hello from Joke editor page</h1>
      <JokeEditorForm />
      <button onClick={submitJoke}>update joke</button>
    </>
  )
}

export default JokeEditorPage
