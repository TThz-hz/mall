module.exports = {
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
  }
}