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
});

const Task = mongoose.model('tasks', TaskSchema);


export {Task};

const LoginSchema = new Schema({
  id: ObjectId,
  Firstname: {
  Type: String,
  },
  LastName: {
  Type: String,
  },
  Password: {
  Type: String,
  },
  ConfirmPassword: {
  Type: String,
  }
  });
  const login = mongoose.model('register', LoginSchema);

  export{login};
