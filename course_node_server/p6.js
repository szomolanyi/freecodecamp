/*jshint esversion:6*/

const http = require('http');

url = process.argv[2];

http.get(url, res => {
  res.setEncoding('utf8');
  res.on('data', data => {
    console.log(data);
  });
  res.on('error', console.error);
}).on('error', console.error);
