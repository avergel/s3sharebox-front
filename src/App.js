import React, { useState } from 'react'
import LoginForm from './components/LoginForm'
import UserPanel from './components/UserPanel'
import {
  BrowserRouter as Router, Route, Redirect
} from 'react-router-dom'

const App = () => {
  const [user, setUser] = useState(JSON.parse(window.localStorage.getItem('user')))
  return (
    <div className="App">
      <Router>
        <React.Fragment>
          <Route path="/" render={() =>
            !user ?
              <div>
                <h1>S3ShareBox</h1>
                <LoginForm setUser={setUser} />
              </div>
              :
              <Redirect to="/files" />
          } />
          <Route path="/files" render={() =>
            !user ?
              < Redirect to="/" />
              :
              <div>
                <UserPanel setUser={setUser} />
                <h1>S3ShareBox</h1>
              </div>
          } />
        </React.Fragment>
      </Router>
    </div>

  )
}

export default App
