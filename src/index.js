import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { Provider } from 'react-redux'
import { store } from './store.ts'
import { BrowserRouter as Router } from 'react-router-dom'
import { Auth0Provider } from '@auth0/auth0-react'
import authConfig from './auth_config.json'
import reportWebVitals from './reportWebVitals'

const onRedirectCallback = a => {
  //window.history.push(window.location.pathname)
  window.history.pushState({}, '', '/')
}
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Auth0Provider
        domain={authConfig.domain}
        clientId={authConfig.clientId}
        redirectUri={window.location.origin}
        onRedirectCallback={onRedirectCallback}
      >
        <Router>
          <App />
        </Router>
      </Auth0Provider>
    </Provider>
    ,
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
