const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = (env, argv) => {
  var config = {
    context: path.resolve(__dirname),
    entry: './main.js',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'bundle.js',
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: 'index.html',
      })
    ],
    module: {
      rules: [
        {
          test: /\.css$/i,
          use: ["style-loader", "css-loader"],
        },
      ],
    },
    devServer: {
      static: 'dist',
      hot: true,
      watchFiles: ['index.html']
    }
  }

  if (argv.mode === 'development') {
    config.devtool = 'eval-source-map'
  }

  return config
}
