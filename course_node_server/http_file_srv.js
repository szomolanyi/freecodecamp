/*jshint esversion:6*/

http = require('http');
fs = require('fs');

file = process.argv[3];

l = (req, res) => {
  console.log(file);
  r = fs.createReadStream(file);
  r.pipe(res);
};

srv = http.createServer(l);
srv.listen(process.argv[2]);
