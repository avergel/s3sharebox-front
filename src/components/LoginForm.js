import React, { useState } from 'react'
import { connect } from 'react-redux'
import { setNotification, clearNotification } from '../actions/notificationActions'
import { login } from '../actions/userActions'
import { Form, Button } from 'react-bootstrap'
import ReactLoading from 'react-loading'
import Notification from './Notification'

const LoginForm = (props) => {
  const [loading, setLoading] = useState(false)

  const loginFormStyle = {
    width: '40%',
    margin: 'auto',
    padding: '40px',
    border: '#007bff solid 1px'
  }
  const login = async (event) => {
    setLoading(true)
    event.preventDefault()
    const username = event.target.username.value
    const password = event.target.password.value
    await props.login(username, password)
    setLoading(false)
  }
  return (
    <React.Fragment>
      {loading ?
        <div className="center-block">
          <ReactLoading type='spokes' style={{ margin: 'auto', width: '200px', height: '200px' }} delay={300} color='black' />
        </div>
        :
        <div className="center-block" style={loginFormStyle}>
          <Notification />
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
        </div>
      }
    </React.Fragment>
  )
}

const mapDispatchToProps = {
  login,
  setNotification,
  clearNotification
}

export default connect(null, mapDispatchToProps)(LoginForm)