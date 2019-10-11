const Primus = require('primus');

const primus = Primus.createServer({port: 2000, transformer: 'websockets'});

primus.on('connection', (ws) => {
  ws.on('data', (msg) => {
    primus.write(msg);
  });
});