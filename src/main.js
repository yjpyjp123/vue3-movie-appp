import { createApp } from 'vue'
import App from './App.vue'
import router from './routes'
import store from './store'
import loadImage from './plugins/loadimage'

createApp(App)
  .use(router) // $router $route
  .use(store) // $store
  .use(loadImage) //$loadImage
  .mount('#app')