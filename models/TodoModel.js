const mongoose = require('mongoose')

const TodoSchema = new mongoose.Schema({
    task: String,
    description: String,
    status: String
})

const TodoModel = mongoose.model("todo-list", TodoSchema)
module.exports = TodoModel