express =  require('express');
path = require('path');

var app = express();

app.get('/home', function(req, res) {
  res.end('Hello World!');
});


console.log(__dirname);

app.use(express.static(process.argv[3]||path.join(__dirname, 'public')));

app.listen(process.argv[2]);
