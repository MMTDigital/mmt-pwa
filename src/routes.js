import HomePage from './pages/HomePage'
import NotFoundPage from './pages/NotFoundPage'

export default [
  {
    path: '/',
    exact: true,
    component: HomePage
  },
  {
    path: '**',
    component: NotFoundPage
  }
]
