import React, { Component } from 'react'
import { swRegistration } from '../../services/serviceWorker/serviceWorker'
import './PushNotificationExample.scss'

class PushNotificationExample extends Component {
  _initState = {
    title: '',
    message: ''
  }
  state = this._initState

  handleChange = (event) => {
    const { value, name } = event.target
    this.setState({ [name] : value })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    const title = this.state.title
    const options = {
      body: this.state.message,
      icon: '../../assets/mmt.png',
      badge: '../../assets/mmt.png'
    }
    swRegistration.showNotification(title, options)
    this.setState(this._initState)
  }

  render () {
    return (
      <form onSubmit={this.handleSubmit} styleName='form'>
        <input 
          type='text'
          name='title'
          placeholder='MMT Push Title'
          value={this.state.title} 
          onChange={this.handleChange}
          styleName='title'
        />
        <textarea 
          name='message'
          placeholder='Enter a nice message here'
          value={this.state.message}
          onChange={this.handleChange}
          styleName='message'
        />
        <button styleName='button' type="submit">Send Notification</button>
      </form>
    )
  }
}

export default PushNotificationExample