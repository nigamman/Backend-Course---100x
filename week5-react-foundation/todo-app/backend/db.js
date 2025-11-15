const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://nigamman:Rishi20@100xdevs.bgvyutl.mongodb.net/todos")
const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const todo = mongoose.model('todos', todoSchema);

module.exports = {
    todo
}