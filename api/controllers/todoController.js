const mongoose = require('mongoose');
const Todo = mongoose.model('todos');

module.exports = (app) = {
    async index(req, res) {
      Todo.find({}, function(err, todo) {
        if (err) {
          res.send(err);
        }
        res.json(todo);
      });
    },

    async create(req, res) {
      var new_todo = new Todo(req.body);
      new_todo.save(function(err, todo) {
        if (err) {
          res.send(err);
        }
        res.json(todo);
      });
    },

    async show(req, res) {
      Todo.findById(req.params.todoId, function(err, todo) {
        if (err) {
          res.send(err);
        }
        res.json(todo);
      });
    },

    async update(req, res) {
      Todo.findOneAndUpdate({_id: req.params.todoId}, req.body, {new: true}, function(err, todo) {
        if (err) {
          res.send(err);
        }
        res.json(todo);
      });
    },

    async delete(req, res) {
      Todo.remove({
        _id: req.params.todoId
      }, function(err, todo) {
        if (err) {
          res.send(err);
        }
        res.json({ message: 'Task successfully deleted' });
      });
    },
}
