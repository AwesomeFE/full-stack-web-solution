export default () => [
  {
    loader: 'url-loader',
    options: {
      name: 'fonts/[hash].[ext]',
      limit: '10000'
    }
  }
]