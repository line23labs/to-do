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
  startDate: {
    type: Date,
    required: true,
    trim: true,
  },
  endDate: {
    type: Date,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    lowercase: true,
  },
});

const Task = mongoose.model('tasks', TaskSchema);


export {Task};
