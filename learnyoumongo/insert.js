var mongo = require('mongodb').MongoClient;

mongo.connect('mongodb://localhost:27017/learnyoumongo', function(err, db) {
  // db gives access to the database
  coll = db.collection('docs');
  obj = {'firstName':process.argv[2], 'lastName':process.argv[3]};
  console.log(JSON.stringify(obj));
  coll.insert(obj);
  db.close();
});
