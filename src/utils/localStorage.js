const loadUser = () => {
  return JSON.parse(localStorage.getItem('user'))
}

const saveUser = (user) => {
  localStorage.setItem('user', JSON.stringify(user))
}

const removeUser = () => {
  localStorage.removeItem('user')
}

export default { loadUser, saveUser, removeUser }