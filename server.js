const app = require('express')()
const http = require('http').createServer(app)
const io = require('socket.io')(http)

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

io.on('connection', (socket) => {
    socket.on('msg', (msg) => {
        socket.broadcast.emit('msg', "<b>[" + socket.id+"] says: </b>" + msg)
    })
})

http.listen(3000, () => {
    console.log('listening on port 3000')
})