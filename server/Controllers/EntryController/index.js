import schema from './schema';
import mongoose, { Schema } from 'mongoose';
import BasicModel from '../BasicModel';

class Entry extends BasicModel {
  static async log(ip, user) {
    return await this.create({ip, userId: user._id});
  }
}

schema.loadClass(Entry);

export const EntryController = mongoose.model('entries', schema);
