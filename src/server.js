const express = require('express')
const app = require ('./app.js')
const port = 6000


app.listen(port, () => console.log(`listening on port: ${port}`))
