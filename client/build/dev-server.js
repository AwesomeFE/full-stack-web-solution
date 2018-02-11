import opn from 'opn';
import path from 'path';
import express from 'express';
import webpack from 'webpack';
import devMiddleWare from 'webpack-dev-middleware';
import hotMiddleWare from 'webpack-hot-middleware';
import proxyMiddleWare from 'http-proxy-middleware';
import historyApifFallback from 'connect-history-api-fallback';

class DevServer {
  static usedPort = 4000;

  constructor(webpackConfig, proxyConfig) {
    this.host = 'localhost';
    this.port = DevServer.usedPort += 1;
    this.webpackConfig = this.getDevWebpackConfig(webpackConfig);
    this.proxyConfig = proxyConfig || {};

    this.initDevServer();
    this.useHotMiddleware();
    this.useProxyMiddleWare();
    this.useHistoryApiCallback();
    this.useDevMiddleware();
    this.useStaticSource();
    this.setListeningCallback();
    this.runServer();
  }

  getDevWebpackConfig(webpackConfig) {
    webpackConfig.entry.app = ['./client/build/dev-client'].concat(webpackConfig.entry.app);
    return webpackConfig;
  }

  initDevServer() {
    this.app = express();
    this.compiler = webpack(this.webpackConfig);
  }

  useDevMiddleware() {
    this.devMiddleware = devMiddleWare(this.compiler, {
      publicPath: this.webpackConfig.output.publicPath,
      stats: { colors: true }
    });

    this.app.use(this.devMiddleware);
  }

  useHotMiddleware() {
    this.hotMiddleware = hotMiddleWare(this.compiler, {
      log: false,
      heartbeat: 2000
    });

    // this.enableForceReload();

    this.app.use(this.hotMiddleware);
  }

  useStaticSource() {
  }

  useProxyMiddleWare() {
    const proxyTabel = Object.entries(this.proxyConfig);

    for(const [context, options] of proxyTabel) {
      this.app.use(proxyMiddleWare(context, options));
    }
  }

  /**
   * History api callback middleware
   * 
   * @description Force 404 to index.html
   * @link https://github.com/bripkens/connect-history-api-fallback/issues/21#issuecomment-199144586
   */
  useHistoryApiCallback() {
    this.app.use(historyApifFallback({
      index: `${this.webpackConfig.output.publicPath}index.html`
    }));
  }

  setListeningCallback() {
    const url = `http://${this.host}:${this.port}`;

    this.devMiddleware.waitUntilValid(() => {
      console.log(`> Listening at ${url}`);
      opn(url);
    });
  }

  runServer() {
    this.app.listen(this.port, this.host);
  }

  /**
   * Reload the full page, after index.html changed.
   * 
   * @deprecated
   * @link https://github.com/webpack/webpack/issues/5505
   */
  enableForceReload() {
    this.compiler.plugin('compilation', (compilation) => {
      compilation.plugin('html-webpack-plugin-after-emit', (data, cb) => {
        this.hotMiddleware.publish({ action: 'reload' });
        cb();
      });
    });
  }
}

function createDevServers(webpackDevConfigs, proxyConfig) {
  return webpackDevConfigs.map(webpackDevConfig => new DevServer(webpackDevConfig, proxyConfig));
}

export default createDevServers;