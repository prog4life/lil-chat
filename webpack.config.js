const path = require('path');

module.exports = {
  entry: './src/index.jsx', // TODO: add babel-polyfill later
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public')
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        include: [
          path.resolve(__dirname, 'src')
        ],
        exclude: [
          path.resolve(__dirname, 'node_modules'),
          path.resolve(__dirname, 'bower_components')
        ],
        loader: 'babel-loader',
        options: {
          presets: ['react', 'env'] // TODO: add stage-? later
        }
      }
    ]
  },
  resolve: {
    alias: {
      App: path.resolve(__dirname, 'src/components/App.jsx')
    },
    modules: [
      path.resolve(__dirname, 'src'),
      'node_modules'
    ],
    extensions: ['.js', '.json', '.jsx', '.css', '*']
  },
  devtool: 'source-map'
};
