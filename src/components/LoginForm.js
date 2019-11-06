import React from 'react'
import { connect } from 'react-redux'
import { setNotification, clearNotification } from '../reducers/notificationReducer'
import { login } from '../reducers/userReducer'

const LoginForm = (props) => {
  const login = async (event) => {
    event.preventDefault()
    const username = event.target.username.value
    const password = event.target.password.value
    props.login(username, password)
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
  login,
  setNotification,
  clearNotification
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm)