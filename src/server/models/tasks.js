import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const TaskSchema = new Schema({
  id: ObjectId,
  title: String,
  description: String,
  startDate: String,
  endDate: String,

});

const Task = mongoose.model('tasks', TaskSchema);

export {Task};
