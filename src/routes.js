import HomePage from './pages/HomePage'
import NotFoundPage from './pages/NotFoundPage'

export default [
  {
    path: '/',
    component: HomePage
  },
  {
    path: '**',
    component: NotFoundPage
  }
]
