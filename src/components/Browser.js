import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { listFiles, getFile, uploadFile } from '../actions/fileActions'
import { Modal, Button, ModalBody } from 'react-bootstrap'
import 'react-dropzone-uploader/dist/styles.css'
import Dropzone from 'react-dropzone-uploader'
import ReactLoading from 'react-loading';
import Files from './Files'
import Folders from './Folders'
import BreadCrumb from './BreadCrumb'

const Browser = (props) => {
  const [prefixPath, setPrefixPath] = useState(props.bucket.currentFolder.path)
  const [loading, setLoading] = useState(true)
  const [modalShow, setModalShow] = useState(false)

  useEffect(() => {
    props.listFiles(prefixPath, props.userToken, props.refreshToken)
      .then(() => {
        setLoading(false)
        console.log('bla')
      })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [prefixPath])

  const handlePrefixPath = (path) => {
    setPrefixPath(path)
    setLoading(true)
  }

  const handleDownloadFile = (path) => {
    props.getFile(path, props.userToken, props.refreshToken)
  }

  const handleUploadFile = async (files) => {
    setLoading(true)
    console.log(files[0].file)
    setModalShow(false)
    await props.uploadFile(files[0].file, prefixPath, props.userToken, props.refreshToken)
    setLoading(false)
  }

  return (
    <React.Fragment>
      {loading ?
        <ReactLoading type='spokes' delay={300} color='black' width='200px' height='200px' />
        :
        <div>
          <Button onClick={() => setModalShow(true)}><i className='fa fa-upload' /> Upload</Button>
          <br /><br />
          <BreadCrumb path={props.bucket.currentFolder.path} setPrefixPath={handlePrefixPath} />
          {props.bucket.folders.length + props.bucket.files.length > 0 ?
            <div>
              <Folders folders={props.bucket.folders} setPrefixPath={handlePrefixPath} />
              <Files files={props.bucket.files} downloadFile={handleDownloadFile} />
            </div>
            :
            <div>
              No files
            </div>
          }
          <Modal
            size='lg'
            centered
            show={modalShow}
            onHide={() => setModalShow(false)}>
            <Modal.Header closeButton>
              <Modal.Title>Upload</Modal.Title>
            </Modal.Header>
            <ModalBody>
              <Dropzone
                styles={{
                  dropzone: {
                    overflow: 'hidden',
                    minHeight: '480px',
                    backgroundColor: '#e3eefc'
                  }
                }}
                multiple={false}
                maxFiles={1}
                onSubmit={handleUploadFile}
                maxSizeBytes={5 * 1024 * 1024} />
            </ModalBody>
          </Modal>
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
  listFiles,
  getFile,
  uploadFile
}

export default connect(mapStateToProps, mapDispatchToProps)(Browser)