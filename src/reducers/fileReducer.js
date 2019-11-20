import { SET_BUCKET, CLEAR_BUCKET } from '../actionTypes'

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
    case SET_BUCKET:
      return action.data
    case CLEAR_BUCKET:
      return initialState
    default:
      return state
  }
}

export default reducer