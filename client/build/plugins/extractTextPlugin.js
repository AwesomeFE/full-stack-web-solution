import ExtractTextPlugin from 'extract-text-webpack-plugin';

export function extractTextPlugin(options) {
  const { extract, chunkHash } = options;
  const plugin = [];

  if(extract) {
    plugin.push(new ExtractTextPlugin(`stylesheets/app${chunkHash}.css`))
  }

  return plugin;
}