import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './assets/css/global.scss'
// import VueSocketio from 'vue-socket.io';
// import socketio from 'socket.io-client';

// Vue.use(VueSocketio, socketio('ws://10.120.115.71:8093'));
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
