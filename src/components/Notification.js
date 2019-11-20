import React from 'react'
import { connect } from 'react-redux'
import { Alert } from 'react-bootstrap'

const Notification = (props) => {
  return (
    <React.Fragment>
      {props.message !== '' ?
        <Alert variant={props.variant}>
          {props.message}
        </Alert>
        :
        null
      }
    </React.Fragment>
  )
}

const mapStateToProps = (state) => {
  return {
    message: state.notification.message,
    variant: state.notification.variant
  }
}

export default connect(mapStateToProps)(Notification)