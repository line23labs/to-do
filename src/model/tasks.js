const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const TaskSchema = new Schema({
  id: ObjectId,
  name: String,
  body: String,
  date: Date,
});

const Task = mongoose.model('task', TaskSchema);

module.exports={Task};
