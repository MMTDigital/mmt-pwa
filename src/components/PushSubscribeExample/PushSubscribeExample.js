import React, { Component } from 'react'
import { subscribeUser, swRegistration } from '../../services/serviceWorker/serviceWorker'
import Button from '../Button/Button';

class PushSubscribeExample extends Component {
  state = {
    userSubscribed : false
  }

  componentDidMount () {
    navigator.serviceWorker.ready.then((swRegistration) => {
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
  
  buttonClicked = () => {
    if(!this.state.userSubscribed) {
      subscribeUser()
      this.setState({
        userSubscribed : true
      })
    }
  }

  render () {
    return (
      <div>
        <Button isActive={this.state.userSubscribed} buttonText='Subscribe' buttonAction={this.buttonClicked} />
      </div>
    )
  }
}

export default PushSubscribeExample