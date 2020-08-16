import '@/assets/iconfont/icon.scss';
import '@/assets/scss/reset.scss';
import '@/assets/scss/layout.scss';
import models from './models/index';
import dva from './utils/dva';
const dvaApp = dva.createApp({
  initialState: {},
  models,
});

const store = dvaApp.getStore();
console.log(store, '------>');
