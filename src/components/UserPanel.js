import React from 'react'
import { logout } from '../reducers/userReducer'
import { connect } from 'react-redux'

const UserPanel = (props) => {
  return (
    <div>
      {JSON.parse(window.localStorage.getItem('user')) ? JSON.parse(window.localStorage.getItem('user')).username : null}
      <button type="submit" onClick={props.logout}>logout</button>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

const mapDispatchToProps = {
  logout
}

export default connect(mapStateToProps, mapDispatchToProps)(UserPanel)