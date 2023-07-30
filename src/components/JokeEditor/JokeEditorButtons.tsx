import { Link } from 'react-router-dom'
import { Button } from '@mui/material'
import { styled } from '@mui/material/styles'
import {
  deleteJokeThunk,
  jokeToEditSelector,
  setJokeToEdit,
  updateJokeThunk
} from '../../state-management/slices/editJokeSlice.ts'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch } from '../../store.ts'

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

const JokeEditorButtons = () => {
  const dispatch = useDispatch<AppDispatch>()
  const jokeToEdit = useSelector(jokeToEditSelector)

  const submitJoke = () => {
      dispatch(updateJokeThunk(jokeToEdit))
    },
    submitDeleteJoke = () => {
      dispatch(deleteJokeThunk(jokeToEdit.id!))
    }
  return (
    <>
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
    </>
  )
}

export default JokeEditorButtons
