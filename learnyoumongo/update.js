var mongo = require('mongodb').MongoClient;

mongo.connect('mongodb://localhost:27017/'+process.argv[2], function(err, db) {
  // db gives access to the database
  coll = db.collection('users');
  coll.update({username:'tinatime'}, {$set:{age:40}}, function (err, doc) {
    if (err) concole.log('Error:' + err);
    db.close();
  });
});
