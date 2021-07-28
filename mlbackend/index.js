'use strict'
// require('./lib/scheduleDeleteFiles')
const app = require('./app')
const port = 8001
app.listen(port, async() => {
    console.log(`el server esta corriendo en localhost: ${port}`)
})