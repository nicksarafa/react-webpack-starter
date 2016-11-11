import ExtractTextPlugin from 'extract-text-webpack-plugin'

export default {
  output: {
    filename: 'client-bundle.js',
  },
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: [/node_modules/],
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('css!sass!autoprefixer'),
      },
    ],
  },
  plugins: [
    new ExtractTextPlugin('styles.css', {
      allChunks: true,
    }),
  ],
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
};
