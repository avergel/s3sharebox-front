import React from 'react'
import { connect } from 'react-redux'
import { logout } from '../reducers/userReducer'

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

  const logout = async () => {
    props.logout()
  }
  return (
    <div style={userBarStyle}>
      <div className="row" style = {{ height: '100%' }}>
        <div className="col text-left">
          <h3><i className='fa fa-cloud-upload'></i>&nbsp;S3ShareBox</h3>
        </div>
        <div className="col" >
          <i className='fa fa-user'></i>&nbsp;{props.user.username}&nbsp;<br />
          <button type="submit" style={logoutButtonStyle} onClick={logout}>logout <i className='fa fa-sign-out'></i></button>&nbsp;&nbsp;
        </div>
      </div>
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