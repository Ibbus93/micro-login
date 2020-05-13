const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack').container
  .ModuleFederationPlugin;

module.exports = {
  entry: './src/index',
  cache: false,

  mode: 'development',
  devtool: 'source-map',

  devServer: {
    contentBase: './dist',
    port: '3000',
  },

  optimization: {
    minimize: false,
  },

  output: {
    publicPath: 'http://app-micro-login.s3-website-eu-west-1.amazonaws.com/',
    // 'http://localhost:3000/',
  },

  resolve: {
    extensions: ['.jsx', '.js', '.json'],
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: require.resolve('babel-loader'),
        exclude: /node_modules/,
        options: {
          presets: [require.resolve('@babel/preset-react')],
        },
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },

  plugins: [
    new ModuleFederationPlugin({
      name: 'sign_up',
      library: { type: 'var', name: 'sign_up' },
      filename: 'remoteEntry.js',
      remotes: {
        component_library: 'component_library',
      },
      exposes: {
        SignIn: './src/App',
      },
      shared: ['react', 'react-dom', '@material-ui/core', '@material-ui/icons'],
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
      chunks: ['main'],
    }),
  ],
};
