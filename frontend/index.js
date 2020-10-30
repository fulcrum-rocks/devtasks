const http = require('http')
const WebSocket = require('ws');

const { generateRandomNumber } = require('./helpers');

const server = http.createServer()
const wss = new WebSocket.Server({ server });

wss.on('connection', ws => {

  ws.on('message', message => {
    console.log('received: %s', message);
  });

  const interval = setInterval(() => {
    ws.send(JSON.stringify({
      date: Number(new Date()),
      value: generateRandomNumber(),
    }));
  }, 2000);
  
  ws.on('close', () => {
    console.log('Connection is closed');
    clearInterval(interval);
  });
});

server.listen(process.env.PORT || 8080);
