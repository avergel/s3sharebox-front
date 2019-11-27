import React from 'react'
import Folder from './Folder'
import PropTypes from 'prop-types'

Folders.propTypes = {
  folders: PropTypes.object.isRequired,
  setPrefixPath: PropTypes.func.isRequired
}

const Folders = ({ folders, setPrefixPath }) => {
  return (
    <div>
      {folders.map(f => <Folder key={f.path} folder={f} setPrefixPath={setPrefixPath} />)}
    </div>
  )
}

export default Folders