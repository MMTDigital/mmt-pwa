import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'constate'
import BrowserRouter from 'react-router-dom/BrowserRouter'
import { renderRoutes } from 'react-router-config'
import runtime from 'serviceworker-webpack-plugin/lib/runtime'
import routes from './routes'
import './styles/styles.scss'

const rootEl = document.getElementById('root')

if ('serviceWorker' in navigator) {
  const registration = runtime.register().then((data) => {
    console.info('It registered!! ', data)
  })
}

ReactDOM.hydrate((
  <BrowserRouter>
    <Provider>
      {renderRoutes(routes)}
    </Provider>
  </BrowserRouter>
), rootEl)
