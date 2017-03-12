/*jshint esversion:6*/

http = require('http');
fs = require('fs');
tmap = require('through2-map');


l = (req, res) => {
  req.pipe(tmap(chunk => {
    return chunk.toString().toUpperCase();
  })).pipe(res);
};

srv = http.createServer(l);
srv.listen(Number(process.argv[2]));
