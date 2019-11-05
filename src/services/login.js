import axios from 'axios'
import backendServer from '../utils/config'

const baseUrl = `${backendServer}/auth/login`

const login = async credentials => {
  console.log(credentials)
  const response = await axios.post(baseUrl, credentials)
  return response.data
}

export default { login }