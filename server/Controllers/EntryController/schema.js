import { Schema } from 'mongoose';

const EntrySchema = new Schema({
  userId:  {
    type: Schema.Types.ObjectId
  }
}, {timestamps: true});

export default EntrySchema;