var path = require('path');

module.exports{
  context: __dirname;
  entry: './index.jsx' ,
  devtool: 'source-map',
  output: {
    filename: './bundle.js',
    path: path.resolve(__dirname)
  },
  resolve:{
    extensions: ['js','jsx','*']
  },
  module: {
    loaders: [
      {
        test: [/\.jsx?$/],
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },
  webpack: {"webpack --watch"}

};
