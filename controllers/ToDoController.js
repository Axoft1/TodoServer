const TodoModel = require('../models/TodoModel')

module.exports.getAllToDo = async (req, res) => {
    await TodoModel.find()
        .then(result => res.send(result))
        .catch(err => res.json(err))    
}

module.exports.addToDo = async (req, res) => {
    const task = req.body.task
    const description = req.body.description
    const status = req.body.status
    await TodoModel.create({ task, description, status })
        .then(result => res.send(result))
        .catch(err => res.json(err))
}

module.exports.deleteToDo = async (req, res) => {
    const { id } = req.params
    await TodoModel.findByIdAndDelete({ _id: id })
        .then(result => res.send(result))
        .catch(err => res.json(err))
}
module.exports.updateStatus = async (req, res) => {
    const { _id, status } = req.body
    await TodoModel.findByIdAndUpdate(_id, { status })
        .then(result => res.send(result))
        .catch(err => res.json(err))
}
module.exports.updateTitle = async (req, res) => {
    const { _id, task } = req.body
    await TodoModel.findByIdAndUpdate(_id, { task })
        .then(result => res.send(result))
        .catch(err => res.json(err))
}
module.exports.updateDescription = async (req, res) => {
    const { _id, description } = req.body
    await TodoModel.findByIdAndUpdate(_id, { description })
        .then(result => res.send(result))
        .catch(err => res.json(err))
}


