import React from 'react'
import * as ReactDOM from 'react-dom'
import { Default as Ellipsis } from '../stories/Ellipsis.stories'

describe('Default', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Ellipsis />, div)
    ReactDOM.unmountComponentAtNode(div)
  })
})
