import React from 'react'
import File from './File'

const Files = ({ files }) => {
  return (
    <div>
      {files.map(f => <File key={f.path} file={f} />)}
    </div>
  )
}

export default Files