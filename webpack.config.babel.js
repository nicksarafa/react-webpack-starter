import ExtractTextPlugin from 'extract-text-webpack-plugin'

export default {
  output: {
    filename: 'client-bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: [/node_modules/],
        loader: 'babel',
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style', 'css'),
      },
      {
        test: /\.scss$/,
        loader: [
          ExtractTextPlugin.extract(
            'style',
            'css-loader?modules&importLoaders=1&localIdenName=[path]___[name]__[local]___[hash:base64:5]',
          ),
        ],
      },
    ],
  },
  plugins: [new ExtractTextPlugin('styles.css')],
  resolve: {
    extensions: ['', '.js', '.jsx', '.css', '.scss'],
  },
};
