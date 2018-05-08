import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'constate'
import BrowserRouter from 'react-router-dom/BrowserRouter'
import { renderRoutes } from 'react-router-config'
import routes from './routes'
import './styles/styles.scss'
import { registerWorker, swRegistration } from './services/serviceWorker/serviceWorker'

const rootEl = document.getElementById('root')

registerWorker();

ReactDOM.hydrate((
  <BrowserRouter>
    <Provider>
      {renderRoutes(routes)}
    </Provider>
  </BrowserRouter>
), rootEl)
