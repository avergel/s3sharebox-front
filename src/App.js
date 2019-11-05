import React from 'react'
import { useState } from 'react'
import loginService from './services/login'
import fileService from './services/file'
import LoginForm from './components/LoginForm'

function App() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState(null)

  const showMessage = (msg) => {
    setMessage(msg)
    setTimeout(() => {
      setMessage(null)
    }, 5000)
  }


  const handleLogin = async (event) => {
    event.preventDefault()
    try {
      const response = await loginService.login({ username, password })
      window.localStorage.setItem(
        'authUser', JSON.stringify(response)
      )
      fileService.setToken(response.idToken)
    } catch (exception) {
      console.error(exception)
      showMessage('Wrong Credentials')
    }
  }

  return (
    <div className="App">
      <h1>S3ShareBox</h1>
      {message}
      <LoginForm handleLogin={handleLogin} setUsername={setUsername} setPassword={setPassword} />
    </div>
  )
}

export default App
