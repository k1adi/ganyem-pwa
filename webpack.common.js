const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');

module.exports = {
  entry: {
    app: path.resolve(__dirname, 'src/scripts/index.js'),
    // sw: path.resolve(__dirname, 'src/scripts/sw.js'),
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.resolve(__dirname, 'src/templates/index.html'),
    }),
    new MiniCssExtractPlugin({
      filename: 'style-[contenthash].css',
    }),
    new FaviconsWebpackPlugin({
      logo: './src/images/favicon.png',
      prefix: 'assets/favicon/',
      cache: true,
      inject: true,
      favicons: {
        path: '/',
        appName: 'Ganyem',
        appShortName: 'Ganyem',
        appDescription: 'Submission MFWDE Dicoding Restaurant Catalog with PWA',
        developerName: 'k1adi',
        developerURL: 'https://github.com/k1adi',
        start_url: '/index.html',
        display: 'standalone',
        orientation: 'potrait',
        background: '#fff',
        theme_color: '#FFCC1D',
        loadManifestWithCredentials: true,
        manifestMaskable: true,
        icons: {
          android: true,
          appleIcon: true,
          appleStartup: true,
          favicons: true,
          windows: true,
          yandex: true,
        },
      },
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
      {
        test: /\.html$/i,
        loader: 'html-loader',
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
};
