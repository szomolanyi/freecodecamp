var mongo = require('mongodb').MongoClient;

mongo.connect('mongodb://localhost:27017/learnyoumongo', function(err, db) {
  // db gives access to the database
  coll = db.collection('parrots');
  coll.count({'age': {'$gt':Number(process.argv[2])}},function(err, count) {
    if (err) {
      console.log('Error: '+err);
    }
    else console.log(count);
    db.close();
  });
});
