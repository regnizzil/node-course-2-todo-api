var express = require('express');
var bodyParser = require('body-parser');
//this is destructuring, essentially creating a local variable called mongoose equal to
    //the mongoose property on the object, the object is the return result form requiring the
    //mongoose.js file
var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

var app = express();

// sends back a function to convert json to an object
app.use(bodyParser.json());

// POST route will create new Todos
// REST API - has basic CRUD operations
// to create a resource use POST http method and send that resource as the body
// to make a new Todo a JSON object is sent to the server
// server will get properties and create a new model then send the complete model back to client
app.post('/todos', (req, res) => {
    var todo = new Todo({
        text: req.body.text
    });

    todo.save().then((doc) => {
        res.send(doc);
    }, (e) => {
        res.status(400).send(e);
    });
    //console.log(req.body);
});


app.listen(3000, () => {
    console.log('Started on port 3000');
});

