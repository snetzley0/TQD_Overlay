

// Init socket.io, pass server for connection
// place hosts in dot env file for CORS origins
const io = require('socket.io')(6969, {
    cors: {
      origin: ['http://localhost:3000'],
    },
  });

// ROCKET LEAGUE STUFF:

let gameStreams = {};

io.on('connection', (socket) => {
  socket._id;
  socket.watching;

  socket.on('join', (id) => {
    socketId = id;
    if (!!socket._id) {
      socket.leave('game');
      endGameStream(socket._id);
      console.log(`Client ${id} left`);
    }
    socket._id = id;
    console.log(`Client ${id} connected, ID: ${socket.id}`);
  });

  socket.on('watchGame', () => {
    if (!socket.watching) {
      socket.join('game');
      createGameStream(socket._id);
      socket.watching = true;
      console.log(
        `Client ${socket._id} in rooms: ${Array.from(socket.rooms).join(', ')}`
      );
    }
  });

  socket.on('disconnect', () => {
    if (socket._id && socket.watching) {
      socket.leave('game');
      endGameStream(socket._id);
    }
  });

  // Emit payload data to clients
  socket.on('payload', (payload) => {
    // socket.to('REACTLOCAL').emit('payload', payload);
    // ! socket.to will NOT be received by the sender, change to io.to for single page apps if you want the sender to also receive the payload for state updates, etc. !
    socket.to('game').emit('payload', payload);
  });

  socket.on('error', (err) => {
    console.error(chalk.red(err.message));
  });
});

createGameStream = (id) => {
  if (gameStreams[id]) {
    gameStreams[id].connected++;
    return gameStreams[id];
  }
  gameStreams[id] = {
    ws: wsClient,
    connected: 1,
  };
};

endGameStream = (id) => {
    if (gameStreams[id]) {
      gameStreams[id].connected--;
      if (gameStreams[id].connected < 1) {
        console.log(`Client ${id} disconnected`);
        gameStreams[id].ws.close();
        delete gameStreams[id];
      }
    }
  };



  const WebSocket = require('ws');
  
  let wsClient;
  const initWsClient = () => {
    wsClient = new WebSocket('http://localhost:49122');
    wsClient.onclose = () => {
      setTimeout(() => {
        console.error('Rocket League WebSocket Server Closed!');
        console.log('Attempting reconnection...');
        initWsClient();
      }, 10000);
    };
  
    wsClient.onopen = function open() {
      console.log(
        `Connected to Rocket League on rlHost`
      );
    };
  
    wsClient.onmessage = (message) => {
      let data = JSON.parse(message.data);
      console.log(data);
      io.in('game').emit('update', data);
    };
  
    wsClient.onerror = (err) => {
      console.error(
          'Error connecting to SOS, is the plugin running? Try plugin load SOS from BakkesMod console to be sure'
      );
      wsClient.close();
    };
  
    wsClient.on('error', (err) => {
      console.error(err.message);
      wsClient.close();
    });
  };
  initWsClient();