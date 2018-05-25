import React from 'react'
import ReactDOM from 'react-dom'
import App from './App.js'

const dev = process.env.NODE_ENV === 'development'

if (dev) {
    ReactDOM.render(<App/>, document.getElementById('app'))
} else {
    ReactDOM.hydrate(<App/>, document.getElementById('app'))
}



