var ExtractTextPlugin = require('extract-text-webpack-plugin');
var webpack = require('webpack');

var isProduction = process.env.NODE_ENV === 'production';
var port = parseInt(process.env.PORT, 10) || 5000;

function concat() {
  return [].slice.call(arguments).reduce(function (arr, elems) {
    return elems ? arr.concat(elems) : arr;
  }, []);
}

module.exports = {
  entry: {
    app: concat(
      './src/client',
      !isProduction && [
        'webpack/hot/only-dev-server',
        'webpack-dev-server/client?http://localhost:' + port
      ]
    ),
    vendor: [
      'classnames',
      'react',
      'react-router',
      'react-redux',
      'redux'
    ]
  },

  output: {
    path: './build',
    filename: 'scripts/app.js'
  },

  module: {
    loaders: [{
      test: /\.png$/,
      loaders: [
        'url'
      ]
    }, function () {
      var module = {
        test: /\.css$/
      };

      var loaders = concat(
        !isProduction && 'style',
        'css?' + concat(
          'importLoaders=1',
          'localIdentName=[name]--[local]--[hash:base64:5]',
          'modules',
          isProduction && 'sourceMap'
        ).join('&'),
        'cssnext'
      );

      if (isProduction) {
        module.loader = ExtractTextPlugin.extract(loaders.join('!'));
      } else {
        module.loaders = loaders;
      }

      return module;
    }(), {
      test: /\.js$/,
      exclude: /node_modules/,
      loaders: concat(
        !isProduction && 'react-hot',
        'babel?optional[]=runtime&stage=0',
        !isProduction && 'eslint'
      )
    }]
  },

  devtool: isProduction ? 'source-map' : 'eval',
  devServer: !isProduction && {
    stats: {
      colors: true
    },
    proxy: {
      '*': 'http://localhost:' + (port + 1)
    },
    hot: true,
    historyApiFallback: true
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin('vendor', 'scripts/vendor.js')
  ].concat(isProduction ? [
    new ExtractTextPlugin('styles/main.css')
  ] : [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ]),
  cssnext: {
    url: {
      url: function () {}
    }
  }
};
