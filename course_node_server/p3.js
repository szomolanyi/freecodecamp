fs = require('fs');

filepath = process.argv[2];

buf = fs.readFile(filepath, function(err, data) {
  if (err) throw(err);
  console.log(data.toString().split('\n').length-1);
});
