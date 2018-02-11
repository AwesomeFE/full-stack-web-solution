import log4js from 'log4js';
import mongoose from 'mongoose';
import session from 'express-session';
import connectMongo from 'connect-mongo';
const GrobalTracer = log4js.getLogger('system');

mongoose.Promise = global.Promise;

class Database {
  dbConfig = {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    name: process.env.DB_NAME,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD
  };

  constructor() {
    this._validation();

    this._reject = this._reject.bind(this);
    this._resolve = this._resolve.bind(this);
  }

  getSessionStore() {
    const MongoStore = connectMongo(session);

    return new MongoStore({mongooseConnection: mongoose.connection});
  }

  connectDB() {
    const { host, port, name, username, password } = this.dbConfig;
    const options = {
      user: username,
      pass: password
    };

    if(!options.user) {
      delete options.user;
    }
    if(!options.pass) {
      delete options.pass;
    }

    mongoose.connect(`mongodb://${host}:${port}/${name}`, options)
      .then(this._resolve, this._reject);
  }

  /**
   * Class Validation
   * @method _validation
   * @desc Check class props value is valid.
   * @private
   */
  _validation() {
    const requiredKey = ['host', 'port', 'name'];

    for(var key in this.dbConfig) {
      if(requiredKey.includes(key) && !this.dbConfig[key]) {
        throw `The key "${key}" of database configuration is required.`;
      }
    }
  }

  /**
   * MongoDB connection Resolver
   * @method _resolve
   * @desc MongoDB connect success function
   * @private
   */
  _resolve() {
    const { host, port, name, username, password } = this.dbConfig;
    const message = `Connect database mongodb://${host}:${port}/${name} successfully!`;

    GrobalTracer.info(message);
    console.log(message);
  }

  /**
   * MongoDB connection Rejecter
   * @method _reject
   * @desc MongoDB connect failed function
   * @private
   * @param {*} error
   */
  _reject(error) {
    const { host, port, name, username, password } = this.dbConfig;
    const message = `Connect database Error! Please check the connect string "mongodb://${host}:${port}/${name}"!`;

    GrobalTracer.error(message);
    GrobalTracer.error(error);

    console.error(message);
    console.error(error);

    process.exit(0);
  }
}

export default Database;