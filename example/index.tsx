import 'react-app-polyfill/ie11'
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Ellipsis } from '../'

const App = () => {
  return (
    <div>
      <Ellipsis />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
