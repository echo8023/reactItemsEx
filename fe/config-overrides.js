const { override, fixBabelImports, addWebpackAlias } = require('customize-cra');

const path = require("path")
module.exports = override(
  fixBabelImports('antd', {
    libraryDirectory: 'es',
    style: 'css',
  }),
  addWebpackAlias({
      //别名：绝对路径（要写绝对路径，就要用到path模块，在上面引入）
    "@": path.join(__dirname, "src")
  }),
);