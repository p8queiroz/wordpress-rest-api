const path = require('path')
const autoPrefixer = require('autoprefixer')
const flexBugFixes = require('postcss-flexbugs-fixes')
const appPath = path.resolve(__dirname, 'app')

module.exports = {
  entry: ['babel-polyfill', path.resolve(appPath, '', 'index.js')],
  output: {
    path: path.resolve(appPath, 'Scripts'),
    filename: 'bundle.js'
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.s?css$/,
        exclude: /node_modules/,
        use: [
          {loader: 'style-loader'},
          {
            loader: 'css-loader',
            options: {minimize: true, importLoaders: 1}
          },
          {loader: 'sass-loader'},
          {
            loader: 'postcss-loader',
            options: {
              plugins: () => [
                flexBugFixes,
                autoPrefixer({browsers: ['last 40 versions']})
              ]
            }
          }
        ]
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|libs)/,
        use: [
          {loader: 'ng-annotate-loader'},
          {loader: 'babel-loader', options: {presets: ['env']}}
        ]
      },
      {
        test: /\.(png|jpe?g|gif)$/,
        loader: 'url-loader?limit=100000'
      },
      {
        test: /\.(ttf|eot|svg|woff2?)(\?[a-zA-Z0-9.=]+)?$/,
        loader: 'url-loader?limit=100000'
      }
    ]
  }
}
