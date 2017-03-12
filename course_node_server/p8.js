/*jshint esversion:6*/

const http = require('http');
const bl = require('bl');

var result=[];
var count=0;

f=(url, pos, callback) => {
  http.get(url, res => {
    res.pipe(bl((err, data) => {
      callback(err, data, pos);
    }));
  }).on('error', (err) => callback(err, null, pos));
};

function parseResult(err, data, pos) {
  if (err) console.log(err);
  else result[pos]=data.toString();
  count += 1;
  if (count >=3) result.forEach(e => console.log(e));
}

for (i=2; i<process.argv.length; i++) {
  f(process.argv[i], i, parseResult );
}
