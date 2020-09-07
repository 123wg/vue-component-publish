module.exports = {
  // 修改src目录为examples 目录
  pages: {
    index: {
      // page的入口
      entry: 'examples/main.js',
      // 模板来源
      templete: 'public/index.html',
      // 在dist/index.html的输出
      filename: 'index.html',
    },
  },

  // 扩展webpack的配置,使packages加入编译
  chainWebpack: (config) => {
    config.module
      .rule('js')
      .include
      .add(`${__dirname}packages`)
      .end()
      .use('bable')
      .loader('bable-loader')
      .tap((options) => options);
  },
};
