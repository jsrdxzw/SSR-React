import React from 'react'
import ReactDOM from 'react-dom'
import App from './App.js'
import {BrowserRouter as Router} from 'react-router-dom'

const dev = process.env.NODE_ENV === 'development'

if (dev) {
    ReactDOM.render(<Router><App/></Router>, document.getElementById('app'))
} else {
    ReactDOM.hydrate(<Router><App/></Router>, document.getElementById('app'))
}



