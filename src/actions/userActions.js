import authService from '../services/auth'
import localStorage from '../utils/localStorage'
import { setNotification, clearNotification } from './notificationActions'
import { clearBucket } from './fileActions'
import { LOGIN, LOGOUT, REFRESH_TOKEN } from '../actionTypes'

export const login = (username, password) => {
  return async dispatch => {
    try {
      const loginResponse = await authService.login({ username, password })
      localStorage.saveUser(loginResponse)
      dispatch({
        type: LOGIN,
        data: loginResponse
      })
      dispatch(clearNotification())
    } catch (exception) {
      if (exception.response.status === 403) {
        dispatch(setNotification('Wrong credentials', 'danger'))
      }
    }
  }
}

export const logout = (token) => {
  return async dispatch => {
    try {
      await authService.logout(token)
      localStorage.removeUser()
    } catch (exception) {
      console.error(exception)
    } finally {
      dispatch(clearBucket())
      dispatch({
        type: LOGOUT
      })
    }
  }
}

export const refreshToken = (refreshToken) => {
  return async (dispatch, getState) => {
    try {
      const response = await authService.refreshToken(refreshToken)
      const updatedUser = {
        ...getState().user,
        idToken: response.idToken,
        accessToken: response.accessToken,
        expiresIn: response.expiresIn,
      }
      localStorage.saveUser(updatedUser)
      dispatch({
        type: REFRESH_TOKEN,
        data: response
      })
    } catch (exception) {
      dispatch(logout())
    }
  }
}

export default { login, logout, refreshToken }