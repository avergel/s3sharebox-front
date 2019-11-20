import React from 'react'
import LoginForm from './LoginForm'
import { appName } from '../utils/config'

const Home = () => {
  const titleStyle = {
    textAlign: 'center',
    fontSize: '4em',
    paddingBottom: '20px'
}
return (
  <div className="container">
    <div>
      <h1 style={titleStyle}><i className='fa fa-cloud-upload'></i>&nbsp;{appName}</h1>
    </div>
    <LoginForm />
  </div>
)
}

export default Home