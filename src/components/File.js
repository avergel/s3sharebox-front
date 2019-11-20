import React from 'react'
import buttonStyle from '../utils/styles'

const File = ({ file, downloadFile }) => {
  return (
    <div key={file.path}>
      <i className='fa fa-file-o'></i>&nbsp;
      <button style={buttonStyle} key={file.path} onClick={() => downloadFile(file.path)} >{file.name}</button>
    </div>
  )
}

export default File