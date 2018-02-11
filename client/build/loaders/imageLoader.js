export default () => [
  {
    loader: 'url-loader',
    options: {
      name: 'images/[hash].[ext]',
      limit: '5000'
    }
  }
]