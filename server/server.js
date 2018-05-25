const express = require('express')
const path = require('path')
const app = express()
const ReactDOMServer = require('react-dom/server')
const serverEntry = require('../build/server-entry').default
const fs = require('fs')
const template = fs.readFileSync(path.resolve(__dirname,'../build/index.html'),'utf8')

app.use('/public',express.static(path.resolve(__dirname,'../build')))

app.get('*',(req,res)=>{
    const appStr = ReactDOMServer.renderToString(serverEntry)
    const file = template.replace('<!--app-->',appStr);
    res.send(file)
})

app.listen(2333,()=>{
    console.log('server is running at 2333')
})