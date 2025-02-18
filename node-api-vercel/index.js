const express = require('express')
const app = express()
const PORT = 4000

app.listen(PORT, () =>{
    console.log('API Listening On PORT ${PORT}')
})

app.get('/', (req, res ) =>{
    res.send('This is my API running...')
})

MediaSourceHandle.export = app