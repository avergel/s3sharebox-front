import React from 'react'
import PropTypes from 'prop-types'
import File from './File'

Files.propTypes = {
  files: PropTypes.object.isRequired,
  downloadFile: PropTypes.func.isRequired
}

const Files = ({ files, downloadFile }) => {
  return (
    <div>
      {files.map(f => <File key={f.path} downloadFile={downloadFile} file={f} />)}
    </div>
  )
}

export default Files