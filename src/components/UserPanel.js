import React from 'react'
import { connect } from 'react-redux'
import { logout } from '../reducers/userReducer'

const UserPanel = (props) => {
  const logout = async() => {
    props.logout()
  }
  return (
    <div>
      {props.user ? props.user.username : null}
      <button type="submit" onClick={logout}>logout</button>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    user: state.user.user
  }
}

const mapDispatchToProps = {
  logout
}


export default connect(mapStateToProps, mapDispatchToProps)(UserPanel)