# Setup Instructions:
Remember to run "npm i" within client and server folders to install dependencies <br>
To start the server, run: "npm run devStart" <br>
To start the client, run: "npm start" <br>

# Features Instructions:
Open multiple windows to create multiple 'clients' <br>
Enter text into the room field in two users' join field and click join to join a private room <br>
Delete the text and click join to return to the main room and message everyone.

# Instructions Video URL:
 https://www.youtube.com/watch?v=ZKEqqIO7n-k

 # Functionality Information:

 ## Server Side:

Require in socket.io and assign to the variable: "io"<br>
 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;const io = require('socket.io')

<br>
Code to run when the connection starts: <br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;io.on("connection", socket => {
        etc...
    })

<br>
Here message, room, and send-message match the front end <br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;socket.on('send-message', (message, room) => {

})

<br>
When 'receive-message' comes in from the front end, send the message to all connected hosts. <br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;socket.emit('receive-message', message)

<br>
The .broadcast removes the sender from the list of receipients
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;socket.broadcast.emit('receive-message', message)

<br>
This sends the message only to those who belong to the room. <br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;socket.to(room).emit('receive-message', message)

<br>
When 'join-room' comes in, run the callback that is sent in (cb) to display which room has been joined (`Joined ${room}`)<br>

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;socket.on('join-room', (room, cb) => { cb(`Joined ${room}`) })

<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;socket.join(room)
<hr>

 ## Client Side:

The <b>displayMessage(message)</b> function creates an html div element, sets the inner text to the message parameter, and appends the element to the "message-container".

<br>
Assign the socket variable to the io, imported from 'socket.io-client', to the url and port of the server backend.<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;const socket = io(url_string)<br>
<br>
When 'connect' is received, display a message validating the connection
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;socket.on("connect", () => {
    displayMessage(`You conected with id: ${socket.id}`)
})
<br>

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

