import React, { Component, Fragment } from 'react'
import Helmet from 'react-helmet'
import pathPrefix from '../constants/pathPrefix'

class Html extends Component {
  renderTealium (isNotLocal) {
    if (isNotLocal) {
      const tealium = process.env.TEALIUM || '//tags.tiqcdn.com/utag/vodafone/uk-main/dev/utag.sync.js'
      return <script src={tealium} />
    }
  }

  renderSnare (isNotLocal) {
    if (isNotLocal) {
      return (
        <Fragment>
          <input type='hidden' id='ioBlackBox' />
          <script src='https://mpsnare.iesnare.com/snare.js' />
        </Fragment>
      )
    }
  }

  render () {
    const state = this.props.state
    const isNotLocal = process.env.NODE_ENV !== 'local'
    const injectedState = `window.__STATE = ${JSON.stringify(state, null, isNotLocal ? 0 : 4)};`
    const helmet = Helmet.renderStatic()
    const globals = `var dalmatianPrefix = '${pathPrefix}';`
    const iovationContent = isNotLocal ? `
      var io_bbout_element_id = 'ioBlackBox';
      var io_install_stm = false;
      var io_exclude_stm = 12;
      var io_install_flash = false;
      var io_enable_rip = true;
    ` : ''

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
          <link href={`${pathPrefix}/assets/styles.css`} rel='stylesheet' />
          <link rel='icon' type='image/x-icon' href='/favicon.ico' />
          {helmet.link.toComponent()}

          {/* Globals, must come first */}
          <script dangerouslySetInnerHTML={{__html: globals}} />

          {/* Tealium init */}
          {this.renderTealium(isNotLocal)}
        </head>
        <body {...helmet.bodyAttributes.toComponent()}>
          <div id='root' dangerouslySetInnerHTML={{__html: this.props.children}} />
          {this.renderSnare(isNotLocal)}
          <script dangerouslySetInnerHTML={{__html: iovationContent}} />
          <script dangerouslySetInnerHTML={{__html: injectedState}} />
          <script src={`${pathPrefix}/assets/bundle.js`} />
        </body>
      </html>
    )
  }
}

export default Html
