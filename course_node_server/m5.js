/*jshint esversion:6*/

const fs = require('fs');
const path = require('path');


module.exports = function(filepath, extension, callback ) {
  fs.readdir(filepath, function(err, files) {
    if (err) callback(err, undefined);
    else callback(null, files.filter(e=>path.extname(e) === `.${extension}`));
  });
};
