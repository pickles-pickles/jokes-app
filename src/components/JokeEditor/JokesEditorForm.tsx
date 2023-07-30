import { Container, Grid, TextField } from '@mui/material'
import React, { useEffect } from 'react'
import { AppDispatch } from '../../store'
import { useDispatch, useSelector } from 'react-redux'
import {
  jokeToEditErrorSelector,
  jokeToEditSelector,
  jokeToEditSuccessSelector,
  setEditJokeError,
  setEditJokeSuccess,
  setJokeToEdit
} from '../../state-management/slices/editJokeSlice.ts'
import AppSnackbar from '../App/AppSnackbar.tsx'

const JokeEditorForm = () => {
  const dispatch = useDispatch<AppDispatch>()
  const jokeToEdit = useSelector(jokeToEditSelector),
    jokeToEditError = useSelector(jokeToEditErrorSelector),
    jokeToEditSuccess = useSelector(jokeToEditSuccessSelector)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    dispatch(setJokeToEdit({ ...jokeToEdit, [name]: value }))
  }

  useEffect(() => {
    return () => {
      dispatch(setEditJokeError(false))
      dispatch(setEditJokeSuccess(false))
    }
  }, [dispatch])

  return (
    <>
      {
        <AppSnackbar
          severity='error'
          message={JSON.stringify(jokeToEditError?.message)}
          openingCondition={jokeToEditError}
        />
      }
      {
        <AppSnackbar
          severity='success'
          message={'Request submitted successfully'}
          openingCondition={jokeToEditSuccess}
        />
      }
      <h2>Hello from jokes editor form</h2>

      {/* {jokeToEditError && JSON.stringify(jokeToEditError?.message)} */}
      <Container maxWidth='sm'>
        <form>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label='Title'
                name='title'
                value={jokeToEdit.title}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label='Body'
                name='body'
                value={jokeToEdit.body}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label='Author'
                name='author'
                value={jokeToEdit.author}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label='Views'
                name='views'
                value={jokeToEdit.views}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label='Created at'
                name='createdAt'
                value={jokeToEdit.createdAt}
                onChange={handleChange}
              />
            </Grid>
          </Grid>
        </form>
      </Container>
    </>
  )
}

export default JokeEditorForm
