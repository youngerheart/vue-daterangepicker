const webpack = require('webpack');
const isProduction = process.env.NODE_ENV === 'production';
const isWatch = process.env.NODE_ENV === 'watch';

module.exports = {
  entry: {
    'vue-daterangepicker': './src/index.js'
  },
  output: {
    path: './dist',
    publicPath: '/dist/',
    library: 'VueDateRangePicker',
    libraryTarget: 'umd',
    filename: isProduction ? '[name].min.js' : '[name].js'
  },
  babel: {
    presets: ['es2015']
  },
  module: {
    preLoaders: [
      {test: /\.js$/, exclude: [/node_modules/, /dist/], loader: 'eslint'}
    ],
    loaders: [
      {test: /\.js$/, exclude: /node_modules/, loader: 'babel'},
      {test: /\.vue$/, loader: 'vue'}
    ]
  }
};

if (isProduction) {
  module.exports.plugins = [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  ];
} else {
  // 启动服务
  if(isWatch) require('./server');
}
