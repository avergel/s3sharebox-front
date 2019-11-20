import React from 'react'
import File from './File'

const Files = ({ files, downloadFile }) => {
  return (
    <div>
      {files.map(f => <File key={f.path} downloadFile={downloadFile} file={f} />)}
    </div>
  )
}

export default Files