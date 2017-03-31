import React from 'react'
import { render } from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import App from './App.js'
import '!style-loader!css-loader!./GlobalStyles.css'

window.addEventListener('load', function () {
  render(
    <AppContainer><App /></AppContainer>,
    document.getElementById('react')
  )
})
if (module.hot) {
  module.hot.accept('./App.js', () => {
    let HotApp = require('./App.js').default
    render(
      <AppContainer><HotApp /></AppContainer>,
      document.getElementById('react')
    )
  })
}