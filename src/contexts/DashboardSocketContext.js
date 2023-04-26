import React from 'react'
import io from 'socket.io-client'

const socket = io.connect('http://localhost:6969', {
    withCredentials: true,
});

socket.on('connect', () => {
    socket.emit('join', 'REACT-DASHBOARD')
    socket.emit('watchGame')
})

const SocketContext = React.createContext(socket)

export default SocketContext;