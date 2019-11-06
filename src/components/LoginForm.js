import React from 'react'
import { connect } from 'react-redux'
import { setNotification, clearNotification } from '../reducers/notificationReducer'
import loginService from '../services/login'
import { saveUser } from '../utils/localStorage'

const LoginForm = (props) => {
  const login = async (event) => {
    event.preventDefault()
    const username = event.target.username.value
    const password = event.target.password.value
    try {
      const user = await loginService.login({ username, password })
      saveUser(user)
      props.setUser(user)
      props.clearNotification()
    } catch (exception) {
      console.error(exception)
      props.setNotification('Wrong Credentials')
    }
  }
  return (
    <div>
      {props.notification}
      <form onSubmit={login}>
        <div>
          username <input type="text" name="username" />
        </div>
        <div>
          password <input type="password" name="password" />
        </div>
        <button type="submit">login</button>
      </form>

    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    notification: state.notification
  }
}

const mapDispatchToProps = {
  setNotification,
  clearNotification
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm)