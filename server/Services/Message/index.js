import log4js from 'log4js';
import uuid from 'node-uuid';
const GrobalTracer = log4js.getLogger('system');

class Message {

  constructor({name, message, stack, status, type, code}) {
    this.name = name;
    this.message = message && message.replace('\\', '\n');
    this.stack = stack;
    this.status = code || status;
    this.type = type;
    this.code = code;
    this.id = uuid.v4();
  }

  static handler(msg, req, res, next) {
    const message = new Message(msg);
    const isServerError = !message.status || (message.status >= 500 && message.status <= 800);
    const status = !message.status || isServerError ? 500 : 200;

    if(status === 500) {
      console.error(message);
      GrobalTracer.error(message);
    } else {
      console.warn(message);
      delete message.stack;
      
      GrobalTracer.warn(message);
    }

    res.status(status).json(message);
  }
}

export default Message;