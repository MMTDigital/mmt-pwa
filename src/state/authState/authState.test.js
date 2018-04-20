import { actions, initialState } from './authState'

test('login sets the loggedIn state to true', () => {
  const newState = actions.login()(initialState)
  expect(newState).toHaveProperty('loggedIn')
  expect(newState.loggedIn).toBeTruthy()
})
