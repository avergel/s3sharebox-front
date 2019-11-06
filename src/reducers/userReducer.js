import loginService from '../services/login'
import localStorage from '../utils/localStorage'

const userLocalStorage = localStorage.loadUser();

//TODO control expiryTime in LoggedIn
export const initState = {
  user: userLocalStorage,
  isLoggedIn: userLocalStorage ? true : false,
  userToken: userLocalStorage ? userLocalStorage.idToken : null
}

const reducer = (state = initState, action) => {
  switch (action.type) {
    case 'LOGIN':
      localStorage.saveUser(action.data)
      return {
        ...state,
        user: action.data,
        userToken: action.data.idToken,
        isLoggedIn: true
      }
    case 'LOGOUT':
      localStorage.removeUser()
      return {
        ...state,
        user: null,
        userToken: null,
        isLoggedIn: false
      }
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
  }
}

export default reducer