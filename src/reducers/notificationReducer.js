const reducer = (state = null, action) => {
  switch (action.type) {
    case 'SET_NOTIFICATION':
      return action.data
    case 'CLEAR_NOTIFICATION':
      return null
    default:
      return state
  }
}

export const setNotification = (message) => {
  return async dispatch => {
    dispatch ({
      type: 'SET_NOTIFICATION',
      data: message
    })
  }
}
export default reducer