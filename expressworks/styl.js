express =  require('express');
path = require('path');

var app = express();

app.use(express.static(process.argv[3]||path.join(__dirname, 'public')));
app.use(require('stylus').middleware(process.argv[3]||path.join(__dirname, 'public')));


app.get('/home', function(req, res) {
  res.end('Hello World!');
});


console.log(__dirname);


app.listen(process.argv[2]);
