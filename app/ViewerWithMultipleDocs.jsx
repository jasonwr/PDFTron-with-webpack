import React, { Fragment, useEffect, useState } from 'react'
import { DropArea } from './DropArea'
import Viewer from './Viewer'

const ViewerWithMultipleDocs = () => {
  // let instance = useRef()
  const [ref, setRef] = useState(null)
  const setInstance = ref => setRef(ref)
  const [file, setFile] = useState(null)

  // Whenever a file is set then load the file document
  useEffect(() => {
    if (file && ref) {
      console.log('load file: ', file)
      ref.loadDocument(file, file.name)
    }
  }, [file])

  return (
    <Fragment>
      <DropArea
        onFileSelection={files => setFile(files[0])}
      />
      <Viewer getViewerReference={setInstance} />
    </Fragment>
  )
}

export default ViewerWithMultipleDocs
