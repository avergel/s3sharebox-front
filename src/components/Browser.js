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
      // props.listFiles(prefixPath, 'eyJraWQiOiJzK0pyYmpEbGtIOFFFaVwvTEpwbEt1RFdEeTYyTTQ2RWFkNVJUWTgxeGdNZz0iLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiI0N2E3OTE2NC04ZWZhLTRjNWUtODdlYS1lNDNkN2MwMTNlZjIiLCJhdWQiOiI2NHFjZGY1ZjVtcmMxbThrcjFvc3RzYzlqNSIsImV2ZW50X2lkIjoiZDZjMWM5M2MtZDQ4My00ZjIwLTgzNzAtZDQxMzE0MjA5MGZiIiwidG9rZW5fdXNlIjoiaWQiLCJhdXRoX3RpbWUiOjE1NzMzMjYxMjMsImlzcyI6Imh0dHBzOlwvXC9jb2duaXRvLWlkcC5ldS13ZXN0LTEuYW1hem9uYXdzLmNvbVwvZXUtd2VzdC0xX0JpanFwRjdoMCIsImNvZ25pdG86dXNlcm5hbWUiOiI0N2E3OTE2NC04ZWZhLTRjNWUtODdlYS1lNDNkN2MwMTNlZjIiLCJleHAiOjE1NzM1ODM4NjYsImlhdCI6MTU3MzU4MDI2NywiZW1haWwiOiJzdHJhdy50b3JvQGdtYWlsLmNvbSJ9.Nyq2TM5DPwZ3ubhetgW5NxMxRPypOeLh-wtYttT07xDaHuLvS_V5AKdrSF7MVWavtk816Y-UF3WlP54jdY0ov975cQaE8AZQSrK7_2eqL2RwvzBa2xinyZcc9RPTR7wv0hVR39nQA5TmVhl6eD233AemnLORPPawdaxtZEtfG4NnQPt8Q5EkiaezdMkqCSiTHZ4NUSHRwJY5JPCIlQ0p9-Dv9U3Z4xOeGH4eGXSOQYbcOCi3RC44abSYr7z5OG6YbhhnhGitAgn0wVg1ApzrXp21PPKKTYLjU-NLwcUuMN24ta0aMA9_SnNdd277I8OdaiZzmu1Kll_2dyp_9_WFew', props.refreshToken)
      .then(() => setLoading(false))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [prefixPath])

  const handlePrefixPath = (path) => {
    setPrefixPath(path)
    setLoading(true)
  }

  const handleDownloadFile = (path) => {
    props.getFile(path, props.userToken, props.refreshToken)
  }

  const handleUploadFileDropzone = (files) => {
    console.log(files[0].file)
    props.uploadFile(files[0].file, prefixPath, props.userToken, props.refreshToken)
    setModalShow(false)
  }

  const getUploadParams = ({ meta }) => { return { url: 'https://httpbin.org/post' } }

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
          <Modal show={modalShow} onHide={() => setModalShow(false)}>
            <Modal.Header closeButton>
              <Modal.Title>Upload</Modal.Title>
            </Modal.Header>
            <ModalBody>
              <Dropzone
                styles={{ dropzone: { overflow: 'hidden' } }}
                multiple={false}
                maxFiles={1}
                onSubmit={handleUploadFileDropzone}
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