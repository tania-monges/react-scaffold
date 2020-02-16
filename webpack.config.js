const path = require('path');
module.exports = {
    entry: "./src/index.jsx",
    output: {
        path: path.resolve(__dirname, '/public/js'),
        filename: "bundle.js",
        publicPath: '/'
    },
    module: {
      rules: [
        {
          test: /\.jsx$/,
          exclude: /(node_modules)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env']
            }
          }
        }
      ]
    }
    mode: 'development'
};
