const port = parseInt(process.argv[2], 10);
const Primus = require('primus');
const Democracy = require('democracy');

const primus = Primus.createServer({port, transformer: 'websockets'});
const dem = new Democracy({
  source: `0.0.0.0:${port}`,
  peers: ['0.0.0.0:3000', '0.0.0.0:3001'],
});

dem.subscribe('global');
dem.on('global', (msg) => {
  primus.write(msg);
});

primus.on('connection', (ws) => {
  ws.on('data', (msg) => {
    primus.write(msg);
    dem.publish('global', msg);
  });
});