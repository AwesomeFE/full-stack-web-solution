import morgan from 'morgan';
import log4js from 'log4js';

class Logger {
  LEVEL = process.env.LOG_LEVEL || 'DEBUG';
  PATH = process.env.LOG_PATH || './logs';

  logConfig = {
    appenders: {},
    categories: {
      default: {
        appenders: [],
        level: this.LEVEL
      }
    }
  }

  createLogger(loggerName) {
    this.logConfig.appenders[loggerName] = this._getLoggerConfig(loggerName);
    this.logConfig.categories[loggerName] = this._getLoggerCategory(loggerName);
    this.logConfig.categories.default.appenders.push(loggerName);
  }

  startupLogger() {
    log4js.configure(this.logConfig);
  }

  getHttpLogger() {
    const httpLogger = log4js.getLogger('http');
    const morganFormat = ':remote-addr :method :url :status :response-time ms';
    const mroganOptions = { stream: { write: str => {

      if(httpLogger.level.levelStr !== 'OFF') {
        httpLogger.info(str.trim());
      }
      console.log(str.trim());

    }}};

    return morgan(morganFormat, mroganOptions);
  }

  _getLoggerConfig(loggerName) {
    return {
      type: 'dateFile',
      filename: `${this.PATH}/${loggerName}/${loggerName}.log`,
      pattern: '.yyyy-MM-dd',
      daysToKeep: 30,
      keepFileExt: true,
      compress: true
    };
  }

  _getLoggerCategory(loggerName) {
    return {
      appenders: [ loggerName ],
      level: this.LEVEL
    };
  }
}

export default new Logger();