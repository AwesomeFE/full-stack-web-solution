import schema from './schema';
import mongoose, { Schema } from 'mongoose';
import BasicModel from '../BasicModel';

class User extends BasicModel {
  constructor() {
    super();
  }

  static async signUp(user) {
    // return await this.findOne({username: 'roger'});
  }

  static async signIn() {
    // return await this.findOne({username: 'roger'});
  }
}

schema.loadClass(User);

export const UserController = mongoose.model('users', schema);
