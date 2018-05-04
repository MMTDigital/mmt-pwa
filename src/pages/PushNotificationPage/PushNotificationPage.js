import React, { Component } from 'react'
import PushNotificationExample from '../../components/pushNotificationExample/PushNotificationExample'
import PushSubscribeExample from '../../components/PushSubscribeExample/PushSubscribeExample';
import './PushNotificationPage.scss'

class PushNotificationPage extends Component {
  render () {
    return (
      <div>
        <h1 styleName='title'>Push Notification Page</h1>
        <PushNotificationExample />
        <PushSubscribeExample />
      </div>
    )
  }
}

export default PushNotificationPage
