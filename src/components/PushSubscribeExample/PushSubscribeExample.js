import React, { Component } from 'react'
import { subscribeUser, swRegistration } from '../../services/serviceWorker/serviceWorker'
import './PushSubscribeExample.scss'

class PushSubscribeExample extends Component {
  state = {
    userSubscribed : false
  }

  componentDidMount () {
    navigator.serviceWorker.ready.then((swRegistration) => {
      console.log("hello world");
      swRegistration.pushManager.getSubscription()
      .then((subscription) => {
        if(subscription) {
          this.setState({
            userSubscribed : true
          })
        }
      })
    })
  }
  
  buttonClicked = (event) => {
    if(!this.state.userSubscribed) {
      subscribeUser()
      this.setState({
        userSubscribed : true
      })
    }
  }

  render () {
    let isSubscribed = this.state.userSubscribed

    const button = this.state.userSubscribed ? (
      <button styleName='deactivated'>Subscribe</button>
    ) : (
      <button styleName='activated' onClick={this.buttonClicked}>Subscribe</button>
    )

    return (
      <div>
        {button}
      </div>
    )
  }
}

export default PushSubscribeExample