const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// var id = '5c5c5f44f9e4a40e1f8b6acc11';

// if (!ObjectID.isValid(id)){
//     console.log('Id not valid');
// }

// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log('Todos', todos);
// });


// // best if not using id as search criteria
// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log('Todo', todo);
// });

// best if using id as search criteria
// Todo.findById(id).then((todo) => {
//     if(!todo){
//         return console.log('Id not found');
//     }
//     console.log('Todo By Id', todo);
// }).catch((e) => console.log(e));

// challenge - User.findByID - handle 3 cases
// 1. query works but no user - user not found
// 2. user found - print user 
// 3. handle errors - print error object

var id = '5c59a8e3094ffe92deb9c520';

User.findById(id).then((user) => {
    if (!user){
       return console.log('User not found');
    }

    console.log(JSON.stringify(user, undefined, 2));
}).catch((e) => console.log(e)); 