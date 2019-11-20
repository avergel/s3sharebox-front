import localStorage from '../utils/localStorage'

const userLocalStorage = localStorage.loadUser();
const initState = {
  user: userLocalStorage,
  isLoggedIn: userLocalStorage ? true : false,
  userToken: userLocalStorage ? userLocalStorage.idToken : null,
  refreshToken: userLocalStorage ? userLocalStorage.refreshToken : null
}

const reducer = (state = initState, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        user: action.data,
        userToken: action.data.idToken,
        refreshToken: action.data.refreshToken,
        isLoggedIn: true
      }
    case 'LOGOUT':
      return {
        ...state,
        user: null,
        userToken: null,
        refreshToken: null,
        isLoggedIn: false
      }
    case 'REFRESH_TOKEN':
      var updatedUser = {
        ...state.user,
        idToken: action.data.idToken,
        accessToken: action.data.accessToken,
        expiresIn: action.data.expiresIn,
      }
      return {
        ...state,
        user: updatedUser,
        userToken: action.data.idToken
      }
    default:
      return state
  }
}

export default reducer