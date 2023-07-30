import React, { useEffect } from 'react'
import JokesTable from '../../components/Home/JokesTable.tsx'
import Grid from '@mui/material/Grid'
import { useDispatch } from 'react-redux'
import {
  fetchAllJokes,
  jokeListErrorSelector,
  jokeListIsLoadingSelector,
  jokeListSuccessSelector
} from '../../state-management/slices/jokesSlice.ts'
import { AppDispatch } from '../../store.ts'
import { Link } from 'react-router-dom'
import { Button, LinearProgress } from '@mui/material'
import {
  setIsNewJoke,
  setJokeToEdit
} from '../../state-management/slices/editJokeSlice.ts'
import { styled } from '@mui/material/styles'
import { useSelector } from 'react-redux'

const StyledLink = styled(Link)(({ theme }) => ({
  color: theme.palette.text.secondary
}))

const HomePage = () => {
  const dispatch = useDispatch<AppDispatch>()
  const isLoading = useSelector(jokeListIsLoadingSelector),
    error = useSelector(jokeListErrorSelector),
    success = useSelector(jokeListSuccessSelector)

  useEffect(() => {
    dispatch(fetchAllJokes())
  }, [dispatch])

  const handleNewJokeClick = () => {
    dispatch(
      setJokeToEdit({
        title: '',
        body: '',
        author: '',
        views: '',
        createdAt: ''
      })
    )
    dispatch(setIsNewJoke(true))
  }
  return (
    <>
      <h1>Hello from Home page</h1>
      <Button variant='contained' style={{ marginBottom: 10 }}>
        <StyledLink to='/joke-editor' onClick={handleNewJokeClick}>
          New joke
        </StyledLink>
      </Button>
      <Grid container spacing={2} alignItems='center' justifyContent='center'>
        <Grid item xs={10}>
          {isLoading && (
            <>
              <LinearProgress color='secondary' />
              <LinearProgress color='success' />
              <LinearProgress color='inherit' />
            </>
          )}
          {success && <JokesTable />}
          {error && 'Something went wrong'}
        </Grid>
      </Grid>
    </>
  )
}

export default HomePage
