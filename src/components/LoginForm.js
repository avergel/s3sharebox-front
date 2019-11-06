import React from 'react'
import { connect } from 'react-redux'
import { login } from '../reducers/userReducer'
import { withRouter } from 'react-router-dom'
const LoginForm = withRouter((props) => {
  const login = async (event) => {
    event.preventDefault()
    const username = event.target.username.value
    const password = event.target.password.value
    props.history.push('/files');
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
})

const mapStateToProps = (state) => {
  return {
    notification: state.notification
  }
}

const mapDispatchToProps = {
  login
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm)