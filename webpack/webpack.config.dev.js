const Fs = require('fs')
const Path = require('path')
const Webpack = require('webpack')
const merge = require('webpack-merge')
const globImporter = require('node-sass-glob-importer') // allows import all files inside 'scss' directory
const HtmlWebpackPlugin = require('html-webpack-plugin')
const PrettierPlugin = require('prettier-webpack-plugin')

const common = require('./webpack.common.js') 
const prettierConfig = require('../.prettierrc.js')

const pages = Fs
  .readdirSync(Path.resolve('./src'))
  .filter(path => path.endsWith('.html'))

module.exports = merge(common, {
  mode: 'development',
  devtool: 'cheap-eval-source-map',
  output: {
    chunkFilename: 'js/[name].chunk.js',
  },
  devServer: {
    inline: true,
  },
  plugins: [
    new PrettierPlugin(prettierConfig),
    new Webpack.DefinePlugin({
      'NODE_ENV': "development",
    }),
    ...pages.map(
      page =>
      new HtmlWebpackPlugin({
        meta: {
          viewport: 'width=device-width, initial-scale=1',
        },
        filename: `${page}`,
        template: Path.resolve(__dirname, `../src/${page}`),
        title: 'Po stronie Farmaceuty',
      })
    ),
  ],
  module: {
    rules: [
      {
        test: /\.(js)$/,
        include: Path.resolve(__dirname, '../src'),
        enforce: 'pre',
        loader: 'eslint-loader',
        options: {
          emitWarning: true,
        },
      },
      {
        test: /\.(js)$/,
        include: Path.resolve(__dirname, '../src'),
        loader: 'babel-loader',
      },
      {
        test: /\.s?css$/i,
        use: [
          'style-loader',
          'css-loader?sourceMap=true',
          {
            loader: 'sass-loader',
            options: {
              importer: globImporter(),
            },
          },
        ],
      },
      {
        test: /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2)(\?.*)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[path][name].[ext]',
            }
          },

// to test image optimise uncomment lines below


          // {
          //   loader: 'image-webpack-loader',
          //   options: {
          //     mozjpeg: {
          //       progressive: true,
          //       quality: 65
          //     },
          //     pngquant: {
          //       quality: [0.65, 0.90],
          //       speed: 4
          //     },
          //     gifsicle: {
          //       interlaced: false,
          //     },
          //     webp: {
          //       quality: 75
          //     }
          //   }
          // }
        ],
      },
      {
        test: /\.html$/,
        include: Path.resolve(__dirname, '../src/components'),
        use: {
          loader: 'html-loader',
          options: {
            interpolate: true,
          },
        },
      },
    ],
  },
})
