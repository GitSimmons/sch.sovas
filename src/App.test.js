import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

/* globals test */

test('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<App />, div)
  ReactDOM.unmountComponentAtNode(div)
})
