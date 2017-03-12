/*jshint esversion:6*/
http = require('http');
url = require('url');

handler = (req, res) => {
  q = url.parse(req.url, true);
  d=new Date(q.query.iso);
  if (q.pathname === '/api/parsetime') {
    console.log(q.query.iso);
    console.log(d);
    console.log('parsetime');
    result = {
      'hour': d.getHours(),
      'minute': d.getMinutes(),
      'second': d.getSeconds()
    };
    console.log(result);
    res.write(JSON.stringify(result));
  }
  else if (q.pathname === '/api/unixtime') {
    console.log('unixtime');
    result = {
      'unixtime': d.getTime()
    };
    res.write(JSON.stringify(result));
  }
  else {
    res.write('Invalid request');
  }
  console.log(q);
  res.end();
};

srv = http.createServer(handler);
srv.listen(Number(process.argv[2]));
