const express = require('express')

console.log('start server')

const server = express()

server.get('/downloadBig', ( _ , res ) => {
  const urFile = '/Users/kim-dong-o/dev/workspace/global-admin-ui/test.zip'
  res.download(urFile)
})

server.get('/downloadPackage', ( _ , res ) => {
  res.download('./package.json')
})

server.listen(8080, () => {
  console.log('ok')
})
