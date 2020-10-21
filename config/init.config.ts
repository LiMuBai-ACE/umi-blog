module.exports = {
  outputPath: '/dist', // 修改打包路径
  antd: {
    dark: false,
  },
  publicPath: '/',
  manifest: {
    basePath: '/',
  },
  hash: true, // 开启哈希模式 生产文件后缀名带有哈希值 避免浏览器缓存
  history: { type: 'hash' },
  devtool: false, // devtool: 'source-map',//生成map文件 devtool: 'eval',
  esbuild: {},
  dva: {
    immer: true, // 表示是否启用 immer 以方便修改 reducer
    hmr: true, // 表示是否启用 dva model 的热更新
  },
  targets: {
    ie: 11,
  },
  nodeModulesTransform: {
    type: 'none',
  },
  theme: {},
  ignoreMomentLocale: true,
  // 预渲染配置
  // history: { type: 'browser' },
  // ssr: {},
  // exportStatic: {
  //     // 预渲染动态路由：默认情况下，预渲染不会渲染动态路由里的所有页面，如果需要渲染动态路由中的页面，可通过配置 `extraRoutePaths`
  // },
};
