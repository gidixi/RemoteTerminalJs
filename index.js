const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const pty = require('node-pty');
const { Client } = require('ssh2');
const app = express();
const server = http.createServer(app);
const io = socketIo(server);

app.use(express.static('public'));

io.on('connection', (socket) => {
  let shell = null;

  socket.on('startTerminal', (data) => {
    // Valida i dati di input
    const { host, port, username, password } = data;

    // Configura la connessione SSH
    const conn = new Client();
    conn.on('ready', () => {
      conn.shell((err, stream) => {
        if (err) throw err;

        shell = stream;

        shell.on('data', (data) => {
          socket.emit('output', data.toString());
        }).on('close', () => {
          conn.end();
        });

        socket.on('input', (input) => {
          shell.write(input);
        });

        socket.on('disconnect', () => {
          if (shell) shell.end();
        });
      });
    }).connect({
      host: host,
      port: port || 22,
      username: username,
      password: password
    });
  });
});

server.listen(3000, () => {
  console.log('Server in esecuzione sulla porta 3000');
});
