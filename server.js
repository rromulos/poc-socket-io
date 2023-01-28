const app = require('express')()
const http = require('http').createServer(app)
const io = require('socket.io')(http)

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

io.on('connection', (socket) => {
    console.log('A new user has connected', socket.id)
    socket.on('msg', (msg) => {
        console.log(msg)
        socket.broadcast.emit('msg', msg)
    })
})

http.listen(3000, () => {
    console.log('listening on port 3000')
})