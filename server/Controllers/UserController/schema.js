import { Schema } from 'mongoose';

const UserSchema = new Schema({
  username:  {
    type: String,
    unique: true,
    sparse: true
  },
  password: {
    type: String,
    required: true
  }
}, {timestamps: true});

export default UserSchema;