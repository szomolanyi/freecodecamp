/*jshint esversion:6*/

const filter_ls = require('./m5.js');


filepath = process.argv[2];
extension = process.argv[3];

filter_ls(filepath, extension, (err, data)=>{
  if (err) {
    console.log(`Error : ${err}`);
  }
  else {
    data.forEach(e=>console.log(e));
  }
});
