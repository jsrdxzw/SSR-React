const express = require('express')
const path = require('path')
const app = express()
const ReactDOMServer = require('react-dom/server')
// const serverEntry = require('../build/server-entry').default
const fs = require('fs')
const template = fs.readFileSync(path.resolve(__dirname,'../build/index.html'),'utf8')
import React from 'react'
import {StaticRouter} from 'react-router-dom'
import App from '../src/App'

app.use('/public',express.static(path.resolve(__dirname,'../build')))

app.get('*',(req,res)=>{
    const context = {}
    const html = ReactDOMServer.renderToString(
        <StaticRouter location={req.url} context={context}>
            <App/>
        </StaticRouter>
    )
    // const appStr = ReactDOMServer.renderToString(serverEntry)
    const file = template.replace('<!--app-->',html);
    res.send(file)
})

app.listen(2333,()=>{
    console.log('server is running at 2333')
})