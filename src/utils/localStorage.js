export const loadUser = () => {
  try {
    return JSON.parse(localStorage.getItem('user'))
  } catch (error) {
    return undefined
  }
}
export const saveUser = (user) => {
  try {
    console.log('save User')
    localStorage.setItem('user', JSON.stringify(user))
  } catch (error) {
    //TODO
  }
}

export const removeUser = () => {
  try {
    console.log('remove User')
    localStorage.removeItem('user')
  } catch (error) {
    //TODO
  }
}