import { redirect } from 'react-router-dom'
import { isLoggedInSelector } from '../state-management/slices/appSlice.ts'
import { useSelector } from 'react-redux'

const PrivateRoute = ({ children }) => {
  const isLoggedIn = useSelector(isLoggedInSelector)

  if (!isLoggedIn) {
    const redirectPath = '/landing11'
    return redirect(redirectPath)
  }

  return children
}

export default PrivateRoute
