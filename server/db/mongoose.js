var mongoose = require('mongoose');

// set up mongoose to use promises
mongoose.Promise = global.Promise;
//connect to database,
mongoose.connect('mongodb://localhost:27017/TodoApp');

module.exports = {mongoose};