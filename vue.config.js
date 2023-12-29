const { defineConfig } = require("@vue/cli-service");
const path = require("path");

module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  css: {
    loaderOptions: {
      less: {
        lessOptions: {
          // additionalData: `@import "~@/assets/less/variable.less";`,
          javascriptEnabled: true,
        },
      },
    },
  },
  pluginOptions: {
    "style-resources-loader": {
      preProcessor: "less",
      patterns: [
        // 这个是加上自己的路径，注意此处不能使用别名路径
        path.resolve(__dirname, "./src/assets/less/variable.less"),
      ],
    },
  },
});
