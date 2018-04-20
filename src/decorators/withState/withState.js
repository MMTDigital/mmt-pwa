import React from 'react'
import hoistNonReactStatic from 'hoist-non-react-statics'
import auth from '@state/authState'
// import basket from '@state/basketState'

const sharedStates = { auth }

/**
 * Injects a passed context into a React component based on the private set of shared
 * contexts defined in this file. It will inject the context as a prop that has the name
 * of the context as its key.
 *
 * e.g. Below would inject 'this.props.auth' into MyComponent, where auth is the authState
 * @withState('auth')
 * class MyComponent {}
 *
 * @param {string} state - shared state to provide to React component
 */
const withState = state => Component => {
  class WithState extends React.Component {
    render () {
      const newProps = {...this.props}
      const Consumer = sharedStates[state]

      return (
        <Consumer>
          {values => {
            newProps[state] = values
            return <Component {...newProps} />
          }}
        </Consumer>
      )
    }
  }

  return hoistNonReactStatic(WithState, Component)
}

export default withState
