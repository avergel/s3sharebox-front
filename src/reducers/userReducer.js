import authService from '../services/auth'
import localStorage from '../utils/localStorage'

const userLocalStorage = localStorage.loadUser();

//TODO control expiryTime in LoggedIn
const initState = {
  user: userLocalStorage,
  isLoggedIn: userLocalStorage ? true : false,
  userToken: userLocalStorage ? userLocalStorage.idToken : null,
  refreshToken: userLocalStorage ? userLocalStorage.refreshToken : null
}

const reducer = (state = initState, action) => {
  switch (action.type) {
    case 'LOGIN':
      localStorage.saveUser(action.data)
      return {
        ...state,
        user: action.data,
        userToken: action.data.idToken,
        refreshToken: action.data.refreshToken,
        isLoggedIn: true
      }
    case 'LOGOUT':
      localStorage.removeUser()
      return {
        ...state,
        user: null,
        userToken: null,
        refreshToken: null,
        isLoggedIn: false
      }
    case 'REMOVE_AUTHENTICATION':
      localStorage.removeUser()
      return {
        ...state,
        user: null,
        userToken: null,
        refreshToken: null,
        isLoggedIn: false
      }
    case 'REFRESH_TOKEN':
      var updatedUser = {
        ...state.user,
        idToken: action.data.idToken,
        accessToken: action.data.accessToken,
        expiresIn: action.data.expiresIn,
      }
      localStorage.saveUser(updatedUser)
      return {
        ...state,
        user: updatedUser,
        userToken: action.data.idToken
      }
    default:
      return state
  }
}

export const login = (username, password) => {
  return async dispatch => {
    try {
      const loginResponse = await authService.login({ username, password })
      // const data = {
        // ...loginResponse,
        // idToken: 'eyJraWQiOiJzK0pyYmpEbGtIOFFFaVwvTEpwbEt1RFdEeTYyTTQ2RWFkNVJUWTgxeGdNZz0iLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiI0N2E3OTE2NC04ZWZhLTRjNWUtODdlYS1lNDNkN2MwMTNlZjIiLCJhdWQiOiI2NHFjZGY1ZjVtcmMxbThrcjFvc3RzYzlqNSIsImV2ZW50X2lkIjoiZDgzMmFjMWItYTg3Ni00MWZkLWI1OTctNjQwMjQ4Yjk2YTY3IiwidG9rZW5fdXNlIjoiaWQiLCJhdXRoX3RpbWUiOjE1NzMzMDA4NDcsImlzcyI6Imh0dHBzOlwvXC9jb2duaXRvLWlkcC5ldS13ZXN0LTEuYW1hem9uYXdzLmNvbVwvZXUtd2VzdC0xX0JpanFwRjdoMCIsImNvZ25pdG86dXNlcm5hbWUiOiI0N2E3OTE2NC04ZWZhLTRjNWUtODdlYS1lNDNkN2MwMTNlZjIiLCJleHAiOjE1NzMzMDQ0NDcsImlhdCI6MTU3MzMwMDg0NywiZW1haWwiOiJzdHJhdy50b3JvQGdtYWlsLmNvbSJ9.Cd_zcQOo0zapjkJs9jv4JLNeSEXQZir1u9gwiuvK-1dwV85JQF9e-9PFLPV7ULdMXXNSeCg7FO7srIGwLk7snD9ZxQjNz0z6l0ZcBLFjy9Yvw9jZ8sy_iTw4RsQLtQF9BV5jFI-nOq-p6FDCqJV15Ra0Y1fGv7Z-d-Hk1t_pg3urx4RwmNojkualQRME4UWio0zfhIBLZ5kv2HPcXVPQDX7O4wHp7XTwST8IBCx_iM_Ne_yz934jRK8nBmHkP942gZaNNriymbec18HxKMamyltO5MYcJITpbWQvotxfoVF4sYqObX7xN3c6Hvx4aordADpGlTxNjgwBgg7znMENew'
      // }
      dispatch({
        type: 'LOGIN',
        data: loginResponse
        // data: data
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
      type: 'CLEAR_BUCKET'
    })
    dispatch({
      type: 'LOGOUT'
    })
  }
}

export const refreshToken = (refreshToken) => {
  return async dispatch => {
    try {
      console.log('refresh Token')
      const refreshTokenResponse = await authService.refreshToken(refreshToken)
      dispatch({
        type: 'REFRESH_TOKEN',
        data: refreshTokenResponse
      })
    } catch (exception) {
      dispatch({
        type: 'LOGOUT'
      })
    }
  }
}

export default reducer