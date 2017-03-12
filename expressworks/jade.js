express =  require('express');
path = require('path');

var app = express();

app.set('views', process.argv[3]||path.join(__dirname, 'templates'));
app.set('view engine', 'pug');

app.get('/home', function(req, res) {
  res.render('index.jade', {'date':new Date().toDateString()});
});


console.log(__dirname);

app.use(express.static(process.argv[3]||path.join(__dirname, 'public')));

app.listen(process.argv[2]);
