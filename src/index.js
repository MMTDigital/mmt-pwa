import React from 'react'
import ReactDOM from 'react-dom'
import sw from './offline'
import { Provider } from 'constate'
import BrowserRouter from 'react-router-dom/BrowserRouter'
import { renderRoutes } from 'react-router-config'
import routes from './routes'
import './styles/styles.scss'

const rootEl = document.getElementById('root')

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register(sw).catch(err => {
    console.error('Could not register service worker', err)
  })
} else {
  console.error('Service workers are not supported')
}

ReactDOM.hydrate((
  <BrowserRouter>
    <Provider>
      {renderRoutes(routes)}
    </Provider>
  </BrowserRouter>
), rootEl)
