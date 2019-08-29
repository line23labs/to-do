import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const TaskSchema = new Schema({
  id: ObjectId,
  name: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
  start_date: {
    type: Date,
    required: true,
    trim: true,
  },
  end_date: {
    type: Date,
    required: true,
    trim: true,
  },
  time: {
    type: Date,
    required: true,
    trim: true,
  },
});

const Task = mongoose.model('tasks', TaskSchema);


export {Task};
