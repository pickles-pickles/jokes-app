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
import { Box, IconButton } from '@mui/material'
import FirstPageIcon from '@mui/icons-material/FirstPage'
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft'
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight'
import LastPageIcon from '@mui/icons-material/LastPage'
import { TablePaginationActionsProps } from '@mui/material/TablePagination/TablePaginationActions'
import Moment from 'react-moment'

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

function TablePaginationActions (props: TablePaginationActionsProps) {
  const { count, page, rowsPerPage, onPageChange } = props

  const handleFirstPageButtonClick = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    onPageChange(event, 0)
  }

  const handleBackButtonClick = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    onPageChange(event, page - 1)
  }

  const handleNextButtonClick = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    onPageChange(event, page + 1)
  }

  const handleLastPageButtonClick = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1))
  }

  return (
    <Box sx={{ flexShrink: 0, ml: 2.5 }}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label='first page'
      >
        <FirstPageIcon />
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label='previous page'
      >
        <KeyboardArrowLeft />
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label='next page'
      >
        <KeyboardArrowRight />
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label='last page'
      >
        <LastPageIcon />
      </IconButton>
    </Box>
  )
}

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

  const [page, setPage] = React.useState(0)
  const [rowsPerPage, setRowsPerPage] = React.useState(5)

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - jokeList.length) : 0

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10))
    setPage(0)
  }

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
            {(rowsPerPage > 0
              ? jokeList.slice(
                  page * rowsPerPage,
                  page * rowsPerPage + rowsPerPage
                )
              : jokeList
            ).map((joke: JokeToRender) => (
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

                <StyledTableCell align='left'>
                  {' '}
                  {joke.createdAt ? (
                    <Moment format='D MMM YYYY'>{joke.createdAt}</Moment>
                  ) : (
                    '-'
                  )}
                </StyledTableCell>
              </StyledTableRow>
            ))}
            {emptyRows > 0 && (
              <TableRow style={{ height: 53 * emptyRows }}>
                <TableCell colSpan={6} />
              </TableRow>
            )}
          </TableBody>

          <TableFooter>
            <TableRow>
              <TablePagination
                rowsPerPageOptions={[5, 10]}
                colSpan={6}
                count={jokeList.length}
                rowsPerPage={rowsPerPage}
                page={page}
                SelectProps={{
                  inputProps: {
                    'aria-label': 'rows per page'
                  },
                  native: true
                }}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
                ActionsComponent={TablePaginationActions}
              />
            </TableRow>
          </TableFooter>
        </Table>
      </TableContainer>
    </>
  )
}

export default JokesTable
