module.exports = {
  entry: './app/assets/frontend/main.jsx',
  output: {
    path: __dirname + "/app/assets/javascripts",
    filename: 'bundle.js'
  },
  module: {
      loaders: [{
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
          query: {
              presets: ['react']
          }
      }]
  },
  externals: {
      // Don't bundle the 'react' npm package with the component.
      'react': 'React'
  },
  resolve: {
      // Include empty string '' to resolve files by their explicit extension
      // (e.g. require('./somefile.ext')).
      // Include '.js', '.jsx' to resolve files by these implicit extensions
      // (e.g. require('underscore')).
      extensions: ['.js', '.jsx']
  }
};
