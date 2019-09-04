import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const LoginSchema = new Schema({
  id: ObjectId,
  Firstname: {
  Type: String,
  },
  LastName: {
  Type: String,
  },
  Email: {
    Type: String,
  },
  Username: {
    Type: String,
  },
  Password: {
  Type: String,
  },
  ConfirmPassword: {
  Type: String,
  }
  },
  { timestamps: true },
  );
  const registerUser = mongoose.model('todoUsers', LoginSchema);

  export {registerUser};
