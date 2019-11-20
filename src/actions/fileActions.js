import fileService from '../services/file'
import { refreshToken } from '../actions/userActions'
import { SET_BUCKET, CLEAR_BUCKET } from '../actionTypes'

export const listFiles = (prefixPath, token, refreshTokenToken) => {
  return async (dispatch, getState) => {
    try {
      const response = await fileService.listFiles(token, prefixPath)
      dispatch({
        type: SET_BUCKET,
        data: response
      })
    } catch (exception) {
      if (refreshTokenToken && exception.response.status === 401 && exception.response.data.message === 'Expired JWT') {
        await dispatch(refreshToken(refreshTokenToken))
        dispatch(listFiles(prefixPath, getState().user.userToken))
      }
    }
  }
}

export const getFile = (prefixPath, token, refreshTokenToken) => {
  return async (dispatch, getState) => {
    try {
      await fileService.getFile(token, prefixPath)
    } catch (exception) {
      if (refreshTokenToken && exception.response.status === 401) {
        await dispatch(refreshToken(refreshTokenToken))
        dispatch(getFile(prefixPath, getState().user.userToken))
      }
    }
  }
}

export const clearBucket = () => {
  return (dispatch) => {
    dispatch({
      type: CLEAR_BUCKET
    })
  }
}

export default { listFiles, getFile, clearBucket }