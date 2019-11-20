import React, { useState } from 'react'
import { connect } from 'react-redux'
import { setNotification, clearNotification } from '../reducers/notificationReducer'
import { login } from '../reducers/userReducer'
import { Form, Button } from 'react-bootstrap'
import ReactLoading from 'react-loading';

const LoginForm = (props) => {
  const [loading, setLoading] = useState(false)

  const loginFormStyle = {
    width: '40%',
    margin: 'auto',
    padding: '40px',
    border: '#007bff solid 1px'
  }
  //TODO set proper loading
  const login = async (event) => {
    setLoading(true)
    event.preventDefault()
    const username = event.target.username.value
    const password = event.target.password.value
    props.login(username, password)
    setLoading(false)
  }
  //TODO Style and component for notification
  return (
    // <div style={loginFormStyle}>
    <div className="center-block" style={loginFormStyle}>
      {props.notification}
      {loading ?
        <ReactLoading type='spokes' delay={300} color='black' width='200px' height='200px' />
        :
        <Form onSubmit={login}>
          <Form.Group controlId="username">
            <Form.Label>Username</Form.Label>
            <Form.Control required type="email" placeholder="Username (email)" />
          </Form.Group>
          <Form.Group controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control required type="password" placeholder="Password" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Login
        </Button>
        </Form>
      }
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