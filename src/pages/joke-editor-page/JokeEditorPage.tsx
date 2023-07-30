import React, { useEffect } from 'react'
import JokeEditorForm from '../../components/JokeEditor/JokesEditorForm.tsx'
import { useSelector } from 'react-redux'
import {
  deleteJokeThunk,
  jokeToEditSelector,
  setJokeToEdit,
  updateJokeThunk
} from '../../state-management/slices/editJokeSlice.ts'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '../../store.ts'
import { Link } from 'react-router-dom'
import { Button, Container } from '@mui/material'
import { styled } from '@mui/material/styles'

const StyledButton = styled(Button)(({ theme }) => ({
  // hide last border in the row
  marginRight: 5,
  '&:last-child': {
    marginRight: 0
  }
}))

const StyledLink = styled(Link)(({ theme }) => ({
  color: theme.palette.background.default
}))

const JokeEditorPage = () => {
  const dispatch = useDispatch<AppDispatch>()
  const jokeToEdit = useSelector(jokeToEditSelector)

  useEffect(() => {
    console.log('joke to edit', jokeToEdit)
  }, [jokeToEdit])

  /* useEffect(() => {
    return () => {
      dispatch(setJokeToEdit({}))
    }
  }, []) */

  const submitJoke = () => {
      dispatch(updateJokeThunk(jokeToEdit))
    },
    submitDeleteJoke = () => {
      dispatch(deleteJokeThunk(jokeToEdit.id!))
    }
  return (
    <>
      <h1>Hello from Joke editor page</h1>
      <JokeEditorForm />
      <Container maxWidth='sm'></Container>

      <div style={{ marginTop: 10 }}>
        <StyledButton variant='contained'>
          <StyledLink to='/home' onClick={() => dispatch(setJokeToEdit({}))}>
            Go home{' '}
          </StyledLink>
        </StyledButton>

        <StyledButton variant='contained' color='success' onClick={submitJoke}>
          update joke
        </StyledButton>
        <StyledButton
          variant='contained'
          color='secondary'
          onClick={submitDeleteJoke}
        >
          delete joke
        </StyledButton>
      </div>
    </>
  )
}

export default JokeEditorPage
