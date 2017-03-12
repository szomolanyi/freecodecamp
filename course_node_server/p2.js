fs = require('fs');

filepath = process.argv[2];

buf = fs.readFileSync(filepath);

console.log(buf.toString().split('\n').length-1);
