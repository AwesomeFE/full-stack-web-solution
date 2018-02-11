import '../../config';
import webpack from 'webpack';
import webpackDevServer from './dev-server';
import webpackDevConfig from './config.development';
import webpackStagingConfig from './config.staging';
import webpackProductionConfig from './config.production';

let compiler = {};

switch (process.env.NODE_ENV) {
  case 'development': {
    const { SERVER_HOST, SERVER_PORT } = process.env;
    const proxyConfig = {
      '/api': {
        target: `http://${SERVER_HOST}:${SERVER_PORT}`,
        changeOrigin: true,
        headers: {
          Referer: `http://${SERVER_HOST}:${SERVER_PORT}/`
        }
      }
    };

    webpackDevServer(webpackDevConfig, proxyConfig);
    break;
  }
  case 'staging': {
    compiler = webpack(webpackStagingConfig);
    compiler.run(resultHandler);
    break;
  }
  case 'production': {
    compiler = webpack(webpackProductionConfig);
    compiler.run(resultHandler);
    break;
  }
}

function resultHandler(err, stats) {
  if (err) throw err;

  for(let stat of stats.stats) {
    process.stdout.write(stat.toString({
        colors: true,
        modules: false,
        children: false,
        chunks: false,
        chunkModules: false
      }) + '\n');
  }
}