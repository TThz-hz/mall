module.exports = {
  // publicPath: './',
  configureWebpack: {
    resolve: {
      // extensions: {/* 省略后缀名 */},
      alias: {/* 别名 */
        'assets': '@/assets',
        'common': '@/common',
        'components': '@/components',
        'network': '@/network',
        'pages': '@/pages'
      }
    }
  },
  chainWebpack: config => {/* html中的注释、回车换行、引号等等 */
    config.plugin("html").tap(args => {
      args[0].minify = false;
      return args;
    });
  },
}