import React from 'react'
import { styled } from '@mui/material/styles'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell, { tableCellClasses } from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import { useSelector } from 'react-redux'
import { jokeListSelector } from '../../state-management/slices/jokesSlice.ts'

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14
  }
}))

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0
  }
}))

const JokesTable = () => {
  const headerColumns = [
    { name: 'ID' },
    { name: 'TITLE' },
    { name: 'BODY' },
    { name: 'AUTHOR' },
    { name: 'VIEWS' },
    { name: 'CREATED AT' }
  ]

  const jokeList = useSelector(jokeListSelector)

  return (
    <>
      <TableContainer component={Paper}>
        <Table aria-label='customized table'>
          <TableHead>
            <TableRow>
              {headerColumns.map(col => (
                <StyledTableCell align='left' key={col.name}>
                  {col.name}
                </StyledTableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {jokeList.map(joke => (
              <StyledTableRow key={joke.id}>
                {Object.values(joke).map((jokeProp, idx) => (
                  <StyledTableCell align='left' key={idx}>
                    {jokeProp}
                  </StyledTableCell>
                ))}
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  )
}

export default JokesTable
