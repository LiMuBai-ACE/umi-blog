import { defineConfig } from 'umi';
// import proxy from './proxy'

export default defineConfig({
  title: '个人网站',
  favicon:
    'https://immisso-upload.oss-cn-hangzhou.aliyuncs.com/20200517/rc-upload-1589714215963-2.png',
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

  ...require('./init.config'),
  ...require('./router.config'),
  ...require('./Plugins.config'),
});
