const port = parseInt(process.argv[2], 10);
const Primus = require('primus');
const Democracy = require('democracy');

const primus = Primus.createServer({port, transformer: 'websockets', iknowhttpsisbetter: true});
const dem = new Democracy({
  source: `0.0.0.0:${port}`,
  peers: ['0.0.0.0:3000', '0.0.0.0:3001', '0.0.0.0:3002', '0.0.0.0:3003'],
});

let color = 'blue';
switch (port) {
  case 3001:
    color = 'red';
    break;

  case 3002:
    color = 'green';
    break;

  case 3003:
    color = 'purple';
    break;
}

dem.subscribe('global');
dem.on('global', (msg) => {
  primus.write(msg);
});

primus.on('connection', (ws) => {
  ws.on('data', (msg) => {
    msg.color = color;
    primus.write(msg);
    dem.publish('global', msg);
  });
});