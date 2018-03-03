import { Model } from 'mongoose';
import { messages } from '../../Constants';

class BasicModel extends Model {
  static messages = messages;
  
  static link() {
  }
}

export default BasicModel;