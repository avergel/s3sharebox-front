import React from 'react'
import buttonStyle from '../utils/styles'
import PropTypes from 'prop-types'

Folder.propTypes = {
  folder: PropTypes.object.isRequired,
  setPrefixPath: PropTypes.func.isRequired
}

const Folder = ({ folder, setPrefixPath }) => {
  return (
    <div key={folder.path}>
      <i className='fa fa-folder-open'></i>&nbsp;
      <button style={buttonStyle} key={folder.path} onClick={() => setPrefixPath(folder.path)} >{folder.name}</button>
    </div>
  )
}

export default Folder