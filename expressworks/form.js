express =  require('express');
path = require('path');
bp = require('body-parser');

var app = express();

app.set('views', process.argv[3]||path.join(__dirname, 'templates'));
app.set('view engine', 'pug');
app.use(express.static(process.argv[3]||path.join(__dirname, 'public')));
app.use(bp.urlencoded({extended:false}));


app.post('/form', function(req, res) {
  console.log('tusom');
  console.log(req.body);
  res.send(req.body.str.split('').reverse().join(''));
});

app.get('/form', function(req, res) {
  res.render('form.jade');
});
console.log(__dirname);

app.listen(process.argv[2]);
