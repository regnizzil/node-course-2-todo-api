// mongoclient - connects to mongo server
//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }

    console.log('Connected to MongoDB server');

    // find returns MongoDB cursor, not actual documents
    // pointer to documents, cursor has methods 
    // toArray returns a promise

    // db.collection('Todos').find({
    //         _id: new ObjectID('5c5715700db9da646ea2b9ec')}).toArray().then((docs) => {
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, (err) => {
    //     console.log('Unable to fetch todos', err);
    // });
    
    // count
    // db.collection('Todos').find().count().then((count) => {
    // console.log(`Todos count: ${count}`);
    // }, (err) => {
    //     console.log('Unable to fetch todos', err);
    // });

    // find by name property
    db.collection('Users').find({name: 'Hank'}).toArray().then((docs) => {
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
        console.log('Unable to find name in db')
    });




    //db.close();
});