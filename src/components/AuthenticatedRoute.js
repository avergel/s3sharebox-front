import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import UserPanel from './UserPanel'

const AuthenticatedRoute = (
  {
    component,
    isLoggedIn,
    ...rest
  }
) => {
  return (
    <Route {...rest} render={() =>
      isLoggedIn ? (
        <React.Fragment>
          <UserPanel />
          <div className='component'>{component}</div>
        </React.Fragment>
      ) : (
          <Redirect to='/' />
        )
    } />
  )
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.user.isLoggedIn || false,
    token: state.user.userToken
  }
}

export default connect(mapStateToProps)(AuthenticatedRoute)
