const io = require('socket.io')(4500, {
    cors: {
        //origin: ['http://localhost:8080']
        origin: ['http://localhost:8080','https://danhenrydev.com']
    }
});

io.on('connection', socket => {
    console.log(socket.id)
    socket.on('send-message', (message, room) => {
        if (room === '') {
        socket.broadcast.emit('receive-message', message)
        // io.emit('receive-message', message)
        console.log(message)
    } else {
        socket.to(room).emit('receive-message', message)
    }
    })
    socket.on('join-room', (room, cb) => {
        socket.join(room)
        cb(`Joined ${room}`)
    })
})