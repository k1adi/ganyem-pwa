const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const WorkboxWebpackPlugin = require('workbox-webpack-plugin');

module.exports = {
  entry: {
    app: path.resolve(__dirname, 'src/scripts/index.js'),
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
      mode: 'webapp',
      devMode: 'webapp',
      cache: true,
      inject: true,
      favicons: {
        path: '/assets/favicon/',
        appName: 'Ganyem',
        appShortName: 'Ganyem',
        appDescription: 'Submission MFWDE Dicoding Restaurant Catalog with PWA',
        developerName: 'k1adi',
        developerURL: 'https://github.com/k1adi',
        start_url: '/index.html',
        display: 'standalone',
        orientation: 'any',
        background: '#fff',
        theme_color: '#FFCC1D',
        loadManifestWithCredentials: true,
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
    new WorkboxWebpackPlugin.GenerateSW({
      swDest: './sw.js',
      maximumFileSizeToCacheInBytes: 5000000,
      exclude: [/\.(?:png|jpg|jpeg|svg|)$/],
      runtimeCaching: [
        {
          urlPattern: /\.(?:png|jpg|jpeg|svg|)$/,
          handler: 'CacheFirst',
          options: {
            cacheName: 'images',
            expiration: {
              maxEntries: 100,
              maxAgeSeconds: 30 * 24 * 60 * 60,
            },
          },
        },
        {
          urlPattern: /^https:\/\/restaurant-api\.dicoding\.dev\/(?:(list|detail))/,
          handler: 'StaleWhileRevalidate',
          options: {
            cacheName: 'resto-api',
            expiration: {
              maxEntries: 100,
              maxAgeSeconds: 30 * 24 * 60 * 60,
            },
          },
        },
        {
          urlPattern: ({ request }) => request.destination === 'image',
          handler: 'CacheFirst',
          options: {
            cacheName: 'resto-image',
            cacheableResponse: {
              statuses: [0, 200],
            },
            expiration: {
              maxEntries: 100,
              maxAgeSeconds: 30 * 24 * 60 * 60,
            },
          },
        },
        {
          urlPattern: /https:\/\/use.fontawesome.com\/2678a3056c.css/,
          handler: 'CacheFirst',
          options: {
            cacheName: 'fontawesome-font-stylesheet',
            cacheableResponse: {
              statuses: [0, 200],
            },
            expiration: {
              maxEntries: 30,
            },
          },
        },
      ],
      skipWaiting: true,
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
