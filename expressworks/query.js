express =  require('express');
path = require('path');

var app = express();

app.use(express.static(process.argv[3]||path.join(__dirname, 'public')));
app.use(require('stylus').middleware(process.argv[3]||path.join(__dirname, 'public')));


app.get('/home', function(req, res) {
  res.end('Hello World!');
});

app.get('/search', function(req, res) {
  /*r = {};
    req.query.forEach(e => r )*/
  res.send(req.query);
});

app.put('/message/:id', function(req, res) {
  r = require('crypto')
      .createHash('sha1')
      .update(new Date().toDateString() + req.params.id)
      .digest('hex');

  res.end(r);
}) ;

console.log(__dirname);


app.listen(process.argv[2]);
