import React from 'react'

const File = ({ file }) => {
  return (
    <div key={file.path}>
      <i className='fa fa-file-o'></i>&nbsp;{file.name}
    </div>
  )
}

export default File