import React from 'react'
import LoginForm from './components/LoginForm'
import UserPanel from './components/UserPanel'
import {
  BrowserRouter as Router, Route, Redirect
} from 'react-router-dom'
import AuthenticatedRoute from './components/AuthenticatedRoute'
import { connect } from 'react-redux'

const App = ({ isLoggedIn }) => {
  return (
    <div className="App">
      <Router>
        <React.Fragment>
          <Route path="/" render={() =>
            !isLoggedIn ?
              <div>
                <h1>S3ShareBox</h1>
                <LoginForm />
              </div>
              :
              <Redirect to="/files" />
          } />
          <AuthenticatedRoute path="/files" component={() => <UserPanel />} />
        </React.Fragment>
      </Router>
    </div>

  )
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.user.isLoggedIn || false,
  }
}
export default connect(mapStateToProps)(App)
