import { defineConfig } from 'umi';
// import defaultSettings from './defaultSettings';
// import routes from './router.config';
import proxy from './proxy';
const { REACT_APP_ENV } = process.env;
export default defineConfig({
  publicPath: '/',
  hash: true,   // 开启哈希模式 生产文件后缀名带有哈希值 避免浏览器缓存
  history: { type: 'hash', },
  // devtool: 'source-map',//生成map文件 devtool: 'eval',
  devtool: false,
  antd: {
    dark: false,
  },
  esbuild: {},
  dva: {
    immer: true, // 表示是否启用 immer 以方便修改 reducer
    hmr: true, // 表示是否启用 dva model 的热更新
  },
  dynamicImport: {
    loading: '@/components/loading',
  },
  targets: {
    ie: 11,
  },
  nodeModulesTransform: {
    type: 'none',
  },
  ...require('./router.config'),
  theme: {

  },
  // @ts-ignore
  title: false,
  ignoreMomentLocale: true,
  proxy: proxy[REACT_APP_ENV || 'dev'],
  manifest: {
    basePath: '/',
  },
  ...require('./Plugins.config'),
});
