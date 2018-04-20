import React from 'react'
import { State } from 'constate'

export const initialState = {
  loggedIn: false
}

export const actions = {
  login: () => state => ({ loggedIn: true })
}

export const selectors = {}

const authState = props => (
  <State
    initialState={initialState}
    actions={actions}
    selectors={selectors}
    {...props}
  />
)

export default authState
