import React from 'react'
import PropTypes from 'prop-types'
import buttonStyle from '../utils/styles'

File.propTypes = {
  file: PropTypes.object.isRequired,
  downloadFile: PropTypes.func.isRequired
}

const File = ({ file, downloadFile }) => {
  return (
    <div key={file.path}>
      <i className='fa fa-file-o'></i>&nbsp;
      <button style={buttonStyle} key={file.path} onClick={() => downloadFile(file.path)} >{file.name}</button>
    </div>
  )
}

export default File