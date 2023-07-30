import { Container, Grid, TextField } from '@mui/material'
import React from 'react'
import { AppDispatch } from '../../store'
import { useDispatch, useSelector } from 'react-redux'
import {
  jokeToEditSelector,
  setJokeToEdit
} from '../../state-management/slices/editJokeSlice.ts'

const JokeEditorForm = () => {
  const dispatch = useDispatch<AppDispatch>()
  const jokeToEdit = useSelector(jokeToEditSelector)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    dispatch(setJokeToEdit({ ...jokeToEdit, [name]: value }))
  }
  return (
    <>
      <h2>Hello from jokes editor form</h2>
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
