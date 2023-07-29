import React from 'react'
import JokesTable from '../../components/Home/JokesTable.tsx'
import Grid from '@mui/material/Grid'

const HomePage = () => {
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
