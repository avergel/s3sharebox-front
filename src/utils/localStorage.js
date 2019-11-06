const loadUser = () => {
  try {
    return JSON.parse(localStorage.getItem('user'))
  } catch (error) {
    return undefined
  }
}
const saveUser = (user) => {
  try {
    localStorage.setItem('user', JSON.stringify(user))
  } catch (error) {
    //TODO
  }
}

const removeUser = () => {
  try {
    localStorage.removeItem('user')
  } catch (error) {
    //TODO
  }
}

export default { loadUser, saveUser, removeUser }