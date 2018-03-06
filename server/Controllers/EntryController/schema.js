import { Schema } from 'mongoose';

const EntrySchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId
  },
  ip: {
    type: String
  }
}, {timestamps: true});

export default EntrySchema;