const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost/talesfromthecrpyto', {useMongoClient: true});

var db = mongoose.connection;

db.once('opne', () => {
    console.log(`Connected to MongoDB ${db.name}`);
});