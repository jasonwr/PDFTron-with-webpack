import '@babel/polyfill'
import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import ViewerAndUpdator from './ViewerAndUpdator'
import ViewerWithMultipleDocs from './ViewerWithMultipleDocs'

const App = () => (
  <Router>
    <div>
      <nav>
        <ul>
          <li>
            <Link to='/'>Web Viewer (Multiple Docs Support)</Link>
          </li>
          <li>
            <Link to='/uploader'>File Uploader + Converter</Link>
          </li>
          <li>
            <Link to='/viewPlusUpload'>
              Web Viewer + File Uploader + Converter
            </Link>
          </li>
        </ul>
      </nav>

      {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
      <Switch>
        <Route path='/viewPlusUpload'>
          <ViewerAndUpdator
            loadOnConvert
            onFilesConvert={blobs => console.log('blobs', blobs)}
            styles={{
              parent: { padding: 20 },
              uploader: { marginBottom: 20 },
              viewer: { height: 'calc(100vh - 250px)' },
            }}
          />
        </Route>
        <Route path='/uploader'>
          <ViewerAndUpdator
            hideViewer
            onFilesConvert={blobs => console.log('blobs', blobs)}
          />
        </Route>
        <Route path='/'>
          <ViewerWithMultipleDocs />
        </Route>
      </Switch>
    </div>
  </Router>
)

export default App
