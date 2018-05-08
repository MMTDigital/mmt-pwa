import React, { Component } from 'react'
import { swRegistration } from '../../services/serviceWorker/serviceWorker'
import Button from '../Button/Button'
import './PushNotificationExample.scss'

class PushNotificationExample extends Component {
  state = {
    title: '',
    message: ''
  }

  handleChange = (event) => {
    const { value, name } = event.target
    this.setState({ [name] : value })
  }

  resetState () {
    this.setState({
      title: '',
      message: ''
    })
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
    this.resetState()
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
        <Button buttonType='submit' buttonText='Send Notification' />
      </form>
    )
  }
}

export default PushNotificationExample