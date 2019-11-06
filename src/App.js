import React from 'react'
import LoginForm from './components/LoginForm'
import UserPanel from './components/UserPanel'
import {
  BrowserRouter as Router,
  Route, Link, Redirect, withRouter
} from 'react-router-dom'
const App = () => {

  return (
    <div className="App">
      <Router>
        <React.Fragment>
          <Route path="/" render={() =>
            !JSON.parse(window.localStorage.getItem('user')) ?
              <div>
                <h1>S3ShareBox</h1>
                <LoginForm />
              </div>
              :
              <Redirect to="/files" />
          } />
          <Route path="/files" render={() =>
            !JSON.parse(window.localStorage.getItem('user')) ?
              <Redirect to="/" />
              :
              <div>
                <UserPanel />
                <h1>S3ShareBox</h1>
              </div>
          } />
        </React.Fragment>
      </Router>
    </div>

  )
}

export default App
