import axios from 'axios'
import backendServerUrl from '../utils/config'
import getHeaderWithToken from '../utils/util'

const baseUrl = `${backendServerUrl}/files`

const getFileName = (key) => {
  let splitted = key.split('/').filter(k => k !== '')
  return splitted[splitted.length - 1]

}

const listFiles = async (token, prefixPath) => {
  const response = await axios.get(`${baseUrl}/list?prefix=${prefixPath}`, getHeaderWithToken(token))
  return response.data
}

const getFile = async (token, key) => {
  const response = await axios.get(`${baseUrl}?key=${key}`, {
    ...getHeaderWithToken(token),
    responseType: 'blob'
  })
  const url = window.URL.createObjectURL(new Blob([response.data]));
  const link = document.createElement('a');
  link.href = url;
  link.setAttribute('download', getFileName(key));
  document.body.appendChild(link);
  link.click();
}

const uploadFile = async (token, file, path) => {
  const formData = new FormData();
  formData.append('file', file)
  formData.append('path', path)

  await axios.post(`${baseUrl}/upload`, formData, {
    ...getHeaderWithToken(token),
    'content-type': 'multipart/form-data'
  })
}

export default { listFiles, getFile, uploadFile }
