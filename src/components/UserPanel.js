import React from 'react'
import { connect } from 'react-redux'
import { loadUser, removeUser } from '../utils/localStorage'

const UserPanel = (props) => {
  const logout = async() => {
    removeUser()
    props.setUser(null)
  }
  return (
    <div>
      {loadUser() ? loadUser().username : null}
      <button type="submit" onClick={logout}>logout</button>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}


export default connect(mapStateToProps)(UserPanel)