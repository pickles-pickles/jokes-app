import React, { useEffect } from 'react'
import { Alert, AlertColor, Snackbar } from '@mui/material'

interface AppSnackbarProps {
  severity?: AlertColor
  message?: string
  openingCondition: any
}

const AppSnackbar = ({
  severity,
  message,
  openingCondition
}: AppSnackbarProps) => {
  const [open, setOpen] = React.useState(false)

  useEffect(() => {
    if (!!openingCondition) {
      setOpen(true)
    }

    console.log('opening cond', openingCondition)

    return () => {
      setOpen(false)
    }
  }, [openingCondition])

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === 'clickaway') {
      return
    }
    setOpen(false)
  }

  return (
    <Snackbar open={open} autoHideDuration={4000} onClose={handleClose}>
      <Alert
        onClose={handleClose}
        severity={severity || 'info'}
        sx={{ width: '100%' }}
      >
        {message || 'something went wrong'}
      </Alert>
    </Snackbar>
  )
}

export default AppSnackbar
