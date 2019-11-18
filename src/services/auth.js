import axios from 'axios'
import backendServerUrl from '../utils/config'

const baseUrl = `${backendServerUrl}/auth`

const login = async credentials => {
  const response = await axios.post(`${baseUrl}/login`, credentials)
  return response.data
}

const refreshToken = async refreshToken => {
  const response = await axios.post(`${baseUrl}/refreshToken`, {
    refreshToken
  })
  return response.data
}
export default { login, refreshToken }