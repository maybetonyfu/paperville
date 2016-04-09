var path = require('path')
var webpack = require('webpack')

module.exports = {
  entry: [
    // 'webpack-hot-middleware/client',
    './index.js'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  // plugins: [
  //   new webpack.optimize.OccurenceOrderPlugin(),
  //   new webpack.HotModuleReplacementPlugin()
  // ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel' ,
        exclude: /node_modules/,
        include: __dirname,
        query: {
            "presets": ["es2015", "react"]
        }
      }
    ]
  }
}
