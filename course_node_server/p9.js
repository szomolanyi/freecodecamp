/*jshint esversion:6*/

net = require('net');

l = (s) => {
  d=new Date();
  s.end(`${d.getFullYear()}-${('00'+(d.getMonth()+1)).slice(-2)}-${('00'+d.getDate()).slice(-2)} ${d.getHours()}:${d.getMinutes()}\n`);
};

server = net.createServer(l);
server.listen(parseInt(process.argv[2]));
