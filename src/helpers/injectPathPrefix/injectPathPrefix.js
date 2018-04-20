import pathPrefix from '@constants/pathPrefix'

const prefixRouteSet = routes => {
  return routes.map(route => {
    if (route.path && route.path !== '**') {
      route.path = `${pathPrefix}${route.path}`
    }

    if (route.routes) {
      route.routes = prefixRouteSet(route.routes)
    }

    return route
  })
}

const injectPathPrefix = routes => {
  return prefixRouteSet(routes)
}

export default injectPathPrefix
