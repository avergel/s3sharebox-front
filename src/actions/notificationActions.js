export const setNotification = (message, variant) => {
  return async dispatch => {
    dispatch({
      type: 'SET_NOTIFICATION',
      data: { message, variant }
    })
  }
}

export const clearNotification = () => {
  return async dispatch => {
    dispatch({
      type: 'CLEAR_NOTIFICATION'
    })
  }
}

export default { setNotification, clearNotification }