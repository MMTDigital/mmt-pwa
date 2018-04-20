import React from 'react'
import hoistStatics from 'hoist-non-react-statics'
import renderMetaTags from '@helpers/renderMetaTags'

const withMetaTags = (tags = {}) => Component => {
  const WithMetaTags = props => (
    <Component>
      {renderMetaTags(props.tags || tags)}
      {props.children}
    </Component>
  )

  return hoistStatics(WithMetaTags, Component)
}

export default withMetaTags
