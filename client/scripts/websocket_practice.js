// https://www.youtube.com/watch?v=ZKEqqIO7n-k&t=825s

const joinRoomButton = document.getElementById("room-button");
const messageInput = document.getElementById("message-input");
const roomInput = document.getElementById("room-input");
const form = document.getElementById("form")

form.addEventListener("submit", e => {
    e.preventDefault()
    console.log("Hello?")
    const message = messageInput.value
    const room = roomInput.value

    if(message === "") return 
    displayMessage(message)
    messageInput.value = ""
})

joinRoomButton.addEventListener("click", () => {
    const room = roomInput.value
})

function displayMessage(message) {
    const div = document.createElement('div')
    div.textContent = message
    document.getElementById("message-container").append(div)
}


import {io} from "socket.io-client"

// const socket = io("http://www.danhenrydev.com/jeopardy_gameplay_socket_controller")

const socket = io(`http://localhost:3000`);


// // Create WebSocket connection:
// const exampleSocket = new WebSocket("wss://www.danhenrydev.com/jeopardy_gameplay_socket_controller", [
//     "protocolOne",
//     "protocolTwo",
// ]);

// exampleSocket.onopen = function(e) {
//     alert("[open] Connection established");
//     alert("Sending to server");
//     exampleSocket.send("My name is Daniel");
// };

// exampleSocket.onmessage = function(event) {
//     alert(`[message] Data received from server: ${event.data}`);
// }

// exampleSocket.onclose = function (event) {
//     if (event.wasClean) {
//         alert `[close] Connection closed cleanly, code=${event.code} reason=${event.reason}`;
//     } else {
//         // e.g. server process killed or network down
//         // event.code is sually 1006 in this case
//         alert('[close] Connection died');
//     }
// }

// exampleSocket.onerror = function (error) {
//     alert(`[error]`);
// }
// // Connection opened:
// exampleSocket.addEventListener("message", (event) => {
//     exampleSocket.send("Hello Server!");
// });

// // Listen for messages:
// WebSocket.addEventListener("message", (event) => {
//     console.log("Message from server ", event.data);
// });

