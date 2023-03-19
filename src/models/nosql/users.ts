import { Schema, model } from "mongoose";

const UserSchema = new Schema({
  name: {type: String},
  age: {type: Number},
  email: {type: String, unique: true},
  password: {type: String},
  role: {type: ['user', 'admin'], default: 'user'}
}, {
  timestamps: true,
  versionKey: false
});

const User = model('User', UserSchema)

export default User;