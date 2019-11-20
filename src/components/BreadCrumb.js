import React from 'react'
import { buttonStyle } from '../utils/styles'
import { appName } from '../utils/config'

const BreadCrumb = ({ path, setPrefixPath }) => {
  const breadCrumbButtonStyle = { ...buttonStyle, fontWeight: 500 }

  const rootButton = <button style={breadCrumbButtonStyle} key='/' onClick={() => setPrefixPath('/')}>S3ShareBox</button>

  const buildButton = (splitted, i) => {
    const path = splitted.slice(0, i).join('/') + '/' + splitted[i] + '/'
    return (
      <button style={breadCrumbButtonStyle} key={path} onClick={() => setPrefixPath(path)} >
        {splitted[i]}
      </button>
    )
  }

  const buildBreadCrumb = (path) => {
    let breadcrumb = []
    if (path === '/') {
      breadcrumb.push(appName)
    } else {
      breadcrumb.push(rootButton)
      breadcrumb.push(' > ')
    }

    let splitted = path.split('/').filter(p => p !== '')
    for (let i = 0; i < splitted.length; i++) {
      if (i === (splitted.length - 1)) {
        breadcrumb.push(splitted[i])
      } else {
        breadcrumb.push(buildButton(splitted, i))
        breadcrumb.push(' > ')
      }
    }
    return breadcrumb.map(p => p)
  }

  return (
    <div>
      <h1>{buildBreadCrumb(path)}</h1>
    </div>
  )
}

export default BreadCrumb