/*jshint esversion:6*/

const http = require('http');

url = process.argv[2];

http.get(url, res => {
  res.setEncoding('utf8');
  let all_data = '';
  res.on('data', data => {
    all_data+=data;
  });
  res.on('end', () => {
    console.log(all_data.length);
    console.log(all_data);
  });
  res.on('error', console.error);
}).on('error', console.error);
