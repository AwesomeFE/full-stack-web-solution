import webpack from 'webpack';

export function hotModuleReplacementPlugin(options) {
  const { isHotReplace } = options;
  const plugin = [];

  if(isHotReplace) {
    plugin.push(new webpack.HotModuleReplacementPlugin());
    plugin.push(new webpack.NoEmitOnErrorsPlugin());
  }

  return plugin;
}