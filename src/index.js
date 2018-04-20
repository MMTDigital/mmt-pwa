import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'constate'
import BrowserRouter from 'react-router-dom/BrowserRouter'
import { renderRoutes } from 'react-router-config'
import routes from './routes'
import '@vfuk/components/resources/resources.scss'
import './shared/styles/resources.scss'
import WebComponentsProvider from '@web-components/utilities/WebComponentsProvider'
import './shared/styles/styles.scss'

const rootEl = document.getElementById('root')

ReactDOM.hydrate((
  <BrowserRouter>
    <Provider>
      <WebComponentsProvider>
        {renderRoutes(routes)}
      </WebComponentsProvider>
    </Provider>
  </BrowserRouter>
), rootEl)
