const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
    configureWebpack: config => {
      if(process.env.NODE_ENV === "production") {
        config.output.filename = 'js/[name].js'
        config.output.chunkFilename = 'js/[name].min.js'
      } else {
        config.output.filename = 'js/[name].js'
        config.output.chunkFilename = 'js/[name].chunk.js';
      }
    },
    css: {
      extract: {
        filename: 'css/[name].css',
        chunkFilename: 'css/[name].css',
      },
    },
    chainWebpack: config => {
      config.module
        .rule('vue')
        .use('vue-loader')
        .tap(options => ({
          ...options,
          compilerOptions: {
            isCustomElement: tag => tag.startsWith('brightside-')
          }
        }))
    },
})
