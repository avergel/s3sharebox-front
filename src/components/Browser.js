import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { setBucket } from '../reducers/fileReducer'
import { refreshToken } from '../reducers/userReducer'
import fileService from '../services/file'
import ReactLoading from 'react-loading';
import Files from './Files'
import Folders from './Folders'
import PreviousPath from './PreviousPath'
import BreadCrumb from './BreadCrumb'
const Browser = (props) => {
  const [prefixPath, setPrefixPath] = useState(props.bucket.currentFolder.path)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fileService.listFiles(props.userToken, prefixPath)
      .then(response => {
        props.setBucket(response)
        setLoading(false)
      })
      .catch(exception => {
        //TODO check token expired
        console.error(exception)
        props.callRefreshToken(props.refreshToken)
      })
  }, [prefixPath, props.userToken])

  const handlePrefixPath = (path) => {
    setPrefixPath(path)
    setLoading(true)
  }

  return (
    <React.Fragment>
      {loading ?
        <ReactLoading type='spokes' delay={300} color='black' width='200px' height='200px' />
        :
        <div>
          <BreadCrumb path={props.bucket.currentFolder.path} setPrefixPath={handlePrefixPath} />
          {props.bucket.folders.length + props.bucket.files.length > 0 ?
            <div>
              <Folders folders={props.bucket.folders} setPrefixPath={handlePrefixPath} />
              <Files files={props.bucket.files} />
            </div>
            :
            <div>
              No files
            </div>
          }
        </div>
      }
    </React.Fragment>
  )
}

const mapStateToProps = (state) => {
  return {
    bucket: state.bucket,
    userToken: state.user.userToken,
    refreshToken: state.user.refreshToken
  }
}

const mapDispatchToProps = {
  setBucket,
  callRefreshToken: refreshToken
}

export default connect(mapStateToProps, mapDispatchToProps)(Browser)