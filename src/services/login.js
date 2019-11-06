import axios from 'axios'
import backendServerUrl from '../utils/config'

const baseUrl = `${backendServerUrl}/auth/login`

const login = async credentials => {
  const response = await axios.post(baseUrl, credentials)
  return response.data
}

export default { login }