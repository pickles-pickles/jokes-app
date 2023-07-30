import React, { useEffect } from 'react'
import JokeEditorForm from '../../components/JokeEditor/JokesEditorForm.tsx'
import { useSelector } from 'react-redux'
import { jokeToEditSelector } from '../../state-management/slices/editJokeSlice.ts'
import JokeEditorButtons from '../../components/JokeEditor/JokeEditorButtons.tsx'

const JokeEditorPage = () => {
  const jokeToEdit = useSelector(jokeToEditSelector)

  useEffect(() => {
    console.log('joke to edit', jokeToEdit)
  }, [jokeToEdit])

  React.useEffect(() => {
    console.log('component mount')
    return () => {
      console.log('component unmount')
    }
  }, [])

  return (
    <>
      <h1>Hello from Joke editor page</h1>
      <JokeEditorForm />

      <div style={{ marginTop: 10 }}>
        <JokeEditorButtons />
      </div>
    </>
  )
}

export default JokeEditorPage
