import React, { useEffect } from 'react'
import JokesTable from '../../components/Home/JokesTable.tsx'
import Grid from '@mui/material/Grid'
import { useDispatch } from 'react-redux'
import { fetchAllJokes } from '../../state-management/slices/jokesSlice.ts'
import { AppDispatch } from '../../store.ts'

const HomePage = () => {
  const dispatch = useDispatch<AppDispatch>()

  useEffect(() => {
    dispatch(fetchAllJokes())
  }, [dispatch])
  return (
    <>
      <h1>Hello from Home page</h1>
      <Grid container spacing={2}>
        <Grid item xs={10}>
          <JokesTable />
        </Grid>
      </Grid>
    </>
  )
}

export default HomePage
