var mongo = require('mongodb').MongoClient;

mongo.connect('mongodb://localhost:27017/learnyoumongo', function(err, db) {
  // db gives access to the database
  coll = db.collection('parrots');
  coll.find({'age': {'$gt':Number(process.argv[2])}}).toArray(function(err, doc) {
    if (err) {
      console.log('Error: '+err);
    }
    else console.log(doc);
    db.close();
  });
});
