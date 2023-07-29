import React from 'react'
import { styled } from '@mui/material/styles'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell, { tableCellClasses } from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import TableFooter from '@mui/material/TableFooter'
import TablePagination from '@mui/material/TablePagination'
import Paper from '@mui/material/Paper'
import { useSelector } from 'react-redux'
import { jokeListSelector } from '../../state-management/slices/jokesSlice.ts'
import { Link } from 'react-router-dom'
import { JokeToRender } from '../../types/types.ts'

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
            {jokeList.map((joke: JokeToRender) => (
              <StyledTableRow key={joke.id}>
                <StyledTableCell align='left'>{joke.id}</StyledTableCell>
                <StyledTableCell align='left'>
                  <Link to='/joke-editor'>{joke.title}</Link>
                </StyledTableCell>
                <StyledTableCell align='left'>{joke.body}</StyledTableCell>
                <StyledTableCell align='left'>{joke.author}</StyledTableCell>
                <StyledTableCell
                  align='left'
                  style={{ color: joke.viewsColor }}
                >
                  {joke.views}
                </StyledTableCell>

                <StyledTableCell align='left'>{joke.createdAt}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TablePagination
                rowsPerPageOptions={[5, 10]}
                colSpan={3}
                count={jokeList.length}
                rowsPerPage={5}
                page={1}
                SelectProps={{
                  inputProps: {
                    'aria-label': 'rows per page'
                  },
                  native: true
                }}
                onPageChange={/* handleChangePage */ () => {}}
                onRowsPerPageChange={/* handleChangeRowsPerPage */ () => {}}
                ActionsComponent={/* TablePaginationActions */ undefined}
              />
            </TableRow>
          </TableFooter>
        </Table>
      </TableContainer>
    </>
  )
}

export default JokesTable
