const initialState = {
  currentFolder: {
    path: '/',
    name: '/'
  },
  files: [],
  folders: []
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_BUCKET':
      return action.data
    case 'CLEAR_BUCKET':
      return initialState
    default:
      return state
  }
}

export const setBucket = (bucket) => {
  return async dispatch => {
    dispatch({
      type: 'SET_BUCKET',
      data: bucket
    })
  }
}

// export const getFiles = (token, refreshTokenToken, prefixPath) => {
//   return async dispatch => {
//     console.log('getFiles antes de la llamada al Servicio')
//     const response = await fileService.listFiles(token, prefixPath)
//     console.log('getFiles despues de la llamada al Servicio')
//     dispatch({
//       type: 'SET_FILES',
//       data: response
//     })
//   }
// }

export default reducer