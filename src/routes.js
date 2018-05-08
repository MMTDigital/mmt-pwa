import HomePage from './pages/HomePage'
import NotFoundPage from './pages/NotFoundPage'
import PushNotificationPage from './pages/PushNotificationPage/index';

export default [
  {
    path: '/',
    exact: true,
    component: HomePage
  },
  { path: '/push',
    component: PushNotificationPage
  },
  {
    path: '**',
    component: HomePage
  }
]
