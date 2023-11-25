const app = require('express')();

const server = require('http').createServer(app);

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});

const io = require('socket.io')(server, {
  cors: { origin: '*' },
});

const PORT = process.env.PORT || 3001;

io.on('connection', (socket) => {
  console.log('Usuário conectado!', socket.id);

  socket.on('disconnect', (reason) => {
    console.log('Usuário desconectado!', socket.id);
  });

  socket.on('set_username', (username) => {
    socket.data.username = username;

    console.log(socket.data.username);
  });

  socket.on('message', (text) => {
    io.emit('receive_message', {
      text,
      authorId: socket.id,
      author: socket.data.username,
    });
  });
});

server.listen(PORT, () => console.log('Server running...'));
