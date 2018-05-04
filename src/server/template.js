import React, { Component } from 'react'
import Helmet from 'react-helmet'
import pathPrefix from '../constants/pathPrefix'

class Html extends Component {
  render () {
    const state = this.props.state
    const injectedState = `window.__STATE = ${JSON.stringify(state, null, 4)};`
    const helmet = Helmet.renderStatic()

    return (
      <html lang='en-gb' {...helmet.htmlAttributes.toComponent()}>
        <head>
          {helmet.title.toComponent()}
          <meta charSet='utf-8' />
          <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
          <meta name='viewport' content='width=device-width, initial-scale=1.0' />
          <meta name='theme-color' content='#353535' />
          <meta name='mobile-web-app-capable' content='yes' />
          {helmet.meta.toComponent()}
          <link rel='manifest' href='/assets/manifest.json' />
          <link href={`${pathPrefix}/assets/styles.css`} rel='stylesheet' />
          <link rel='icon' type='image/x-icon' href='/favicon.ico' />
          {helmet.link.toComponent()}
          <link href='https://fonts.googleapis.com/css?family=Bangers' rel='stylesheet' />
        </head>
        <body {...helmet.bodyAttributes.toComponent()}>
          <div id='root' dangerouslySetInnerHTML={{__html: this.props.children}} />
          <script dangerouslySetInnerHTML={{__html: injectedState}} />
          <script src={`${pathPrefix}/sw.js`} />
          <script src={`${pathPrefix}/assets/bundle.js`} />
        </body>
      </html>
    )
  }
}

export default Html
