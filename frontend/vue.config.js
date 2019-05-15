const path = require('path');
const webpack = require('webpack');

module.exports = {
  configureWebpack: () => ({
    devServer: {
      contentBase: path.join(__dirname, 'dist'),
      compress: true,
      port: 8118,
      open: true,
    },
    plugins: [
      // eslint-disable-next-line no-useless-escape
      new webpack.NormalModuleReplacementPlugin(/element-ui[\/\\]lib[\/\\]locale[\/\\]lang[\/\\]zh-CN/, 'element-ui/lib/locale/lang/en'),
    ],
    performance: {
      hints: false,
    },
    resolve: {
      alias: {
        'global-styles$': path.resolve(__dirname, 'src/assets/styles/globals/_variables.scss'),
      },
    },
  }),
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'scss',
      patterns: [
        path.resolve(__dirname, 'src/assets/styles/globals/*.scss'),
      ],
    },
    webpackBundleAnalyzer: {
      openAnalyzer: false,
    },
  },
};
