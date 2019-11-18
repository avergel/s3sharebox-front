import React from 'react'
import buttonStyle from '../utils/styles'

const PreviousPath = ({ path, setPrefixPath }) => {

  const deleteSlashesFromStartAndEnd = (path) => {
    if (path.startsWith('/')) {
      path = path.substring(1)
    }
    if (path.endsWith('/')) {
      path = path.substring(0, path.length - 1)
    }
    return path
  }

  const getPreviousFolder = (path) => {
    path = deleteSlashesFromStartAndEnd(path)
    const splitted = path.split('/');
    let previousFolder = '/'

    for (let i = 0; i < splitted.length - 1; i++) {
      previousFolder = previousFolder + splitted[i] + '/'
    }
    return previousFolder
  }

  const getPreviousFolderButton = (path) => {
    if (path !== '/') {
      const link =
        <div>
          <i className='fa fa-arrow-left'></i>&nbsp;
          <button style={buttonStyle} onClick={() => {
            setPrefixPath(getPreviousFolder(path))
          }}>Go Back</button>
        </div>

      return link
    }
  }

  return (
    <React.Fragment>
      {getPreviousFolderButton(path)}
    </React.Fragment>
  )
}

export default PreviousPath