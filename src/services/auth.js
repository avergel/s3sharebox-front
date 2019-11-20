import axios from 'axios'
import backendServerUrl from '../utils/config'
import getHeaderWithToken from '../utils/util'

const baseUrl = `${backendServerUrl}/auth`

const login = async credentials => {
  const response = await axios.post(`${baseUrl}/login`, credentials)
  return response.data
}

const logout = async token => {
  const response = await axios.post(`${baseUrl}/logout`, getHeaderWithToken(token))
  return response.data
}

const refreshToken = async refreshToken => {
  const response = await axios.post(`${baseUrl}/refreshToken`, {
    refreshToken
  })
  return response.data
}

export default { login, logout, refreshToken }