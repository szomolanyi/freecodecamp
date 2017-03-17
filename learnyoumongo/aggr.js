var mongo = require('mongodb').MongoClient;

mongo.connect('mongodb://localhost:27017/learnyoumongo', function(err, db) {
  // db gives access to the database
  coll = db.collection('prices');
  coll.aggregate([
    {$match:{size:process.argv[2]}},
    {$group:{_id:'avg',average:{$avg: '$price'}}}
  ], function(err, data) {
    if (err) console.log(err);
    else console.log(data[0].average.toFixed(2));
    db.close();
  });
});
