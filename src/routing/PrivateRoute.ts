import { redirect } from 'react-router-dom'
import { isLoggedInSelector } from '../state-management/slices/loginSlice'

const PrivateRoute = ({ children }) => {
  if (!isLoggedInSelector) {
    const redirectPath = '/landing'
    return redirect(redirectPath)
  }

  return children
}

export default PrivateRoute
