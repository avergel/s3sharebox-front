import axios from 'axios'
import backendServerUrl from '../utils/config'

const baseUrl = `${backendServerUrl}/files`

const listFiles = async (token, prefixPath) => {
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  }
  const response = await axios.get(`${baseUrl}?prefix=${prefixPath}`, config)
  return response.data
}

export default { listFiles }
