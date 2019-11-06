import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

const AuthenticatedRoute = (
  {
    component: Component,
    isLoggedIn,
    ...rest
  }
) => {
  return (
    <Route {...rest} render={props =>
        isLoggedIn ? (
        <Component {...props} />
        ) : (
        <Redirect to='/' />
        )
      } />
  )
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.user.isLoggedIn || false
  }
}

export default connect(mapStateToProps)(AuthenticatedRoute)
