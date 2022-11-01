import {createApp} from 'vue'
import App from './App.vue'
import VueLazyload from './modules/vue-lazyload';
const app = createApp(App);

app.use(VueLazyload, {
  loading: 'https://cn.bing.com/images/search?q=Loading%E5%9B%BE%E7%89%87&FORM=IQFRBA&id=F430CE46A7EE3D80A14F42D0C98651A531AC32E3',
  error: 'https://www.freeiconspng.com/uploads/shiny-metal-red-error-image-designs-1.png',
  preload: 1 // 距离屏幕多少就要加载
})
app.mount("#app");

