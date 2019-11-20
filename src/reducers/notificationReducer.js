import { SET_NOTIFICATION, CLEAR_NOTIFICATION } from '../actionTypes'

const initState = { message: '', variant: 'success' }

const reducer = (state = initState, action) => {
  switch (action.type) {
    case SET_NOTIFICATION:
      return action.data
    case CLEAR_NOTIFICATION:
      return initState
    default:
      return state
  }
}

export default reducer