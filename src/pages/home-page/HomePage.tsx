import React, { useEffect } from 'react'
import JokesTable from '../../components/Home/JokesTable.tsx'
import Grid from '@mui/material/Grid'
import { useDispatch } from 'react-redux'
import { fetchAllJokes } from '../../state-management/slices/jokesSlice.ts'
import { AppDispatch } from '../../store.ts'
import { Link } from 'react-router-dom'
import { Button } from '@mui/material'
import {
  setIsNewJoke,
  setJokeToEdit
} from '../../state-management/slices/editJokeSlice.ts'

const HomePage = () => {
  const dispatch = useDispatch<AppDispatch>()

  useEffect(() => {
    dispatch(fetchAllJokes())
  }, [dispatch])

  const handleNewJokeClick = () => {
    dispatch(
      setJokeToEdit({
        id: '',
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
      <Button variant='contained'>
        <Link to='/joke-editor' onClick={handleNewJokeClick}>
          New joke
        </Link>
      </Button>
      <Grid container spacing={2}>
        <Grid item xs={10}>
          <JokesTable />
        </Grid>
      </Grid>
    </>
  )
}

export default HomePage
