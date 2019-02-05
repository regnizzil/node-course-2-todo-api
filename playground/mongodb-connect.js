// mongoclient - connects to mongo server
//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

// Don't have to create db first, just add collection name to url
// 2 arguments; 1. string - url where database lives
// 2. callback function
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }

    console.log('Connected to MongoDB server');

    // creates the collection, no need to create first
    // arg 1 - collection object arg 2 - callback function

    // db.collection('Todos').insertOne({
    //     text: 'Something to do',
    //     completed: false
    // }, (err, result) => {
    //     if (err) {
    //         return console.log('Unable to insert todo', err);
    //     }

    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });

    // db.collection('Users').insertOne({
    //     name: 'Liz',
    //     age: 39,
    //     location: 'Kitchener'

    // }, (err, result) => {

    //     if (err) {
    //         return console.log('Unable to insert user', err);
    //     }

    //     //console.log(JSON.stringify(result.ops, undefined, 2));
    //     console.log(result.ops[0]._id.getTimestamp());
    // });

    db.close();
});