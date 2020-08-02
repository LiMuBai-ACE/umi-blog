import { defineConfig } from 'umi';
// import defaultSettings from './defaultSettings';
import proxy from './proxy';
const { NODE_ENV } = process.env;
export default defineConfig({
  title: '这是个人网站首页',
  favicon:
    'https://immisso-upload.oss-cn-hangzhou.aliyuncs.com/20200517/rc-upload-1589714215963-2.png',

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
  proxy: proxy[NODE_ENV || 'development'],
  manifest: {
    basePath: '/',
  },
  ...require('./router.config'),
  ...require('./Plugins.config'),
});
