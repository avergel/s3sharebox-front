import React from 'react'
import { connect } from 'react-redux'
import { logout } from '../actions/userActions'
import { appName } from '../utils/config'

const UserPanel = (props) => {
  const userBarStyle = {
    width: '100%',
    backgroundColor: '#000',
    textAlign: 'right',
    color: '#eee',
    paddingRight: '20px',
    paddingLeft: '20px'
  }
  const logoutButtonStyle = {
    background: 'none',
    border: 'none',
    padding: '0',
    fontSize: '0.8em',
    fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"',
    color: '#eee',
    textDecoration: 'underline',
    cursor: 'pointer'
  }

  const logout = async (userToken) => {
    props.logout(userToken)
  }

  return (
    <div style={userBarStyle}>
      <div className="row" style={{ height: '100%' }}>
        <div className="col text-left">
          <h3><i className='fa fa-cloud-upload'></i>&nbsp;{appName}</h3>
        </div>
        <div className="col" >
          <i className='fa fa-user'></i>&nbsp;{props.user.username}&nbsp;<br />
          <button type="submit" style={logoutButtonStyle} onClick={() => logout(props.userToken)}>
            logout <i className='fa fa-sign-out'></i>
          </button>&nbsp;&nbsp;
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    user: state.user.user,
    userToken: state.user.userToken
  }
}

const mapDispatchToProps = {
  logout
}


export default connect(mapStateToProps, mapDispatchToProps)(UserPanel)