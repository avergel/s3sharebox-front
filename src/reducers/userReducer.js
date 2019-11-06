import loginService from '../services/login'

const reducer = (state = {}, action) => {
  switch (action.type) {
    case 'LOGIN':
      return action.data
    case 'LOGOUT':
      return {}
    default:
      return state
  }
}

export const login = (username, password) => {
  return async dispatch => {
    try {
      const loginResponse = await loginService.login({ username, password })
      dispatch({
        type: 'LOGIN',
        data: loginResponse
      })
      window.localStorage.setItem('user', JSON.stringify(loginResponse))
      dispatch({
        type: 'CLEAR_NOTIFICATION'
      })
    } catch (exception) {
      dispatch({
        type: 'SET_NOTIFICATION',
        data: 'Wrong credentials'
      })
      console.error(exception)
    }
  }
}

export const logout = () => {
  return async dispatch => {
    dispatch({
      type: 'LOGOUT'
    })
    window.localStorage.removeItem('user')
  }
}

export default reducer