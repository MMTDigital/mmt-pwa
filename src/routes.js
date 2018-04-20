import injectPathPrefix from './shared/helpers/injectPathPrefix'
import basketRoutes from './basket/basketRoutes'
import broadbandRoutes from './broadband/broadbandRoutes'
import checkoutRoutes from './checkout/checkoutRoutes'
import handsetRoutes from './handset/handsetRoutes'
import simoRoutes from './simo/simoRoutes'
import sharedRoutes from './shared/sharedRoutes'

const routes = injectPathPrefix([
  ...basketRoutes,
  ...broadbandRoutes,
  ...checkoutRoutes,
  ...handsetRoutes,
  ...simoRoutes,
  ...sharedRoutes
])

export default routes
