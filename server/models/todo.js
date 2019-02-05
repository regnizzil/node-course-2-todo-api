var mongoose = require('mongoose');

// create a model
// 1 arg - string name   2 arg - object that defines properties of collection
var Todo = mongoose.model('Todo', {
   text: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
   }, 
   completed: {
        type: Boolean,
        default: false
   }, 
   completedAt: {
        type: Number,
        default: null
   }
});

module.exports = {Todo};