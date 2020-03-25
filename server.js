const express = require('express');
const app = express();
const WebSocketServer = require('ws').Server;

app.get( '/', ( req, res ) => {
})

const port = 5000
app.listen( port, () => {
    console.log(`server running on port ${port}`)

})

var wss = new WebSocketServer({port: 8080});

wss.on('connection', function connection(ws) {
    ws.on('message', function incoming(data) {

      wss.clients.forEach(function each(client) {
        if (client !== ws) {
          client.send(data);
        }
      });

    });
  }); 
  