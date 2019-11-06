const Path = require('path')
const DotenvFlowPlugin = require('dotenv-flow-webpack')
const SVGSpritemapPlugin = require('svg-spritemap-webpack-plugin')

module.exports = {
  entry: {
    main: Path.resolve(__dirname, '../src/scripts/main.js'),
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
  resolve: {
    alias: {
      '~': Path.resolve(__dirname, '../src'),
      'TweenLite': 'gsap/src/minified/TweenLite.min.js',
      'TweenMax': 'gsap/src/minified/TweenMax.min.js',
      'TimelineLite': 'gsap/src/minified/TimelineLite.min.js',
      'TimelineMax': 'gsap/src/minified/TimelineMax.min.js',
      'ScrollMagic': 'scrollmagic/scrollmagic/minified/ScrollMagic.min.js',
      'animation.gsap': 'scrollmagic/scrollmagic/minified/plugins/animation.gsap.min.js',
      'debug.addIndicators': 'scrollmagic/scrollmagic/minified/plugins/debug.addIndicators.min.js',
      'vue$': 'vue/dist/vue.esm.js',
    },
  },
  plugins: [
    new DotenvFlowPlugin(),
    new SVGSpritemapPlugin(Path.resolve(__dirname, '../src/icons/*.svg'), {
      output: {
        filename: 'icons.svg',
      },
      sprite: {
        generate: {
          title: false,
        },
        prefix: false,
      },
    }),
  ],
}
