import { defineConfig } from 'umi';
// import proxy from './proxy'

export default defineConfig({
  title: '这是个人网站首页',
  favicon:
    'https://immisso-upload.oss-cn-hangzhou.aliyuncs.com/20200517/rc-upload-1589714215963-2.png',
  outputPath: '/umi-blog', // 修改打包路径
  antd: {
    dark: false,
  },
  esbuild: {},
  dva: {
    immer: true, // 表示是否启用 immer 以方便修改 reducer
    hmr: true, // 表示是否启用 dva model 的热更新
  },
  dynamicImport: {
    // loading: '@/components/loading',
  },
  targets: {
    ie: 11,
  },
  nodeModulesTransform: {
    type: 'none',
  },
  theme: {},
  // @ts-ignore
  title: false,
  ignoreMomentLocale: true,
  /*
   * 注： proxy只为开发环境做代理 生产环境需要重新配置 可在request里面查看生产环境配置
   *      当然你可以直接在request直接配置url地址
   *
   */
  // proxy: {
  //   '/api/': {
  //     target: 'http://localhost:4000/',
  //     changeOrigin: true,
  //     pathRewrite: { '^/api': '' },
  //   },
  // },
  manifest: {
    basePath: '/',
  },
  ...require('./router.config'),
  ...require('./Plugins.config'),
});
