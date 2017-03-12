/*jshint esversion:6*/

fs = require('fs');
const path = require('path');

filepath = process.argv[2];
extension = process.argv[3];



fs.readdir(filepath, function(err, files) {
  if (err) throw(err);
  filtered = files.filter(e=>path.extname(e) === `.${extension}`);
  filtered.forEach(e=>console.log(e));
});
