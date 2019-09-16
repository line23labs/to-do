import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const LoginSchema = new Schema({
  id: ObjectId,
  Firstname:String,

  LastName: String,
  Email:  String,
  Username: String,
  Password: String,
  Type: String,

  ConfirmPassword:  String,



});
  const registerUser = mongoose.model('todousers', LoginSchema);

  export {registerUser};
