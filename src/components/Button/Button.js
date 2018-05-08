import React from 'react'
import './Button.scss'

const Button = ({ isActive = false, buttonText = 'Submit', buttonAction = null}) => {
  return (
    <button styleName={`button ${isActive ? '' : 'is-active'}`} onClick={buttonAction}>
      {buttonText}
    </button>
  )
}

export default Button