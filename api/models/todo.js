const mongoose = require('mongoose');
const { Schema } = mongoose;

const todoSchema = new Schema({
  name: String,
  active: Boolean
});

mongoose.model('todos', todoSchema);
