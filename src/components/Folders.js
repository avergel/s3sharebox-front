import React from 'react'
import Folder from './Folder'
const Folders = ({ folders, setPrefixPath }) => {
  return (
    <div>
      {folders.map(f => <Folder key={f.path} folder={f} setPrefixPath={setPrefixPath} />)}
    </div>
  )
}

export default Folders