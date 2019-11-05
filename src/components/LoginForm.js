import React from 'react'

const LoginForm = (props) => {
  return (
    <div>
      <form onSubmit={props.handleLogin}>
        <div>
          username <input type="text" name="Username" onChange={({ target }) => props.setUsername(target.value)} />
        </div>
        <div>
          password <input type="password" name="Passsword" onChange={({ target }) => props.setPassword(target.value)} />
        </div>
        <button type="submit">login</button>
      </form>

    </div>
  )
}

export default LoginForm