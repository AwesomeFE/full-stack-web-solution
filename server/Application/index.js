import http from 'http';
import express from 'express';
import bodyParser from 'body-parser';
import session from 'express-session';

import Logger from '../Services/Logger';
import Database from '../Services/Database';

import ApiRouter from '../ApiRouter';
import WebRouter from '../WebRouter';

class Application extends Database {

  host = process.env.SERVER_HOST;
  port = process.env.SERVER_PORT;
  secret = process.env.SERVER_SECRET;
  extends = process.env.EXTENDS.split(',');

  app = express();
  server = http.createServer(this.app);

  useLogger() {
    // create loggers
    Logger.createLogger('http');
    Logger.createLogger('system');
    Logger.createLogger('controller');

    // startup loggers
    Logger.startupLogger();

    // log the http requests
    this.app.use(Logger.getHttpLogger());
  }

  useSession() {
    const sessionStore = session({
      secret: this.secret,
      store: this.getSessionStore(),
      resave: false,
      saveUninitialized: true
    });

    this.app.use(sessionStore);
  }

  useStaticResource() {
    this.app.use('/public', express.static(path.join(__dirname, '../../../client/dist')));
    this.app.use('/public', express.static(path.join(__dirname, '../../../uploads')));
  }

  useBodyParser() {
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({extended: true}));
  }

  useViewEngine() {
    this.app.set('views', path.join(__dirname, '../../client/views'));
    this.app.set('view engine', 'ejs');
  }

  async useExtends() {
    for(const name of this.extends) {
      try {
        const { default: extendModule } = await import(`../Extends/${name}`);
        extendModule(this.app);
      } catch (e) {
        console.warn(`[Warning]: Extend application "${name}" is not existed.`);
      }
    }
  }

  run() {
    this.server.listen(this.port, this.host);
  }
}

export default Application;