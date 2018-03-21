const todoController = require('../controllers/todoController');

module.exports = (app) => {
  app.route('/todos')
    .get(todoController.index)
    .post(todoController.create);

  app.route('/todos/:todoId')
    .get(todoController.show)
    .put(todoController.update)
    .delete(todoController.delete);
}
