import Vue from 'vue';
import App from './App.vue';
var AwesomeSwiper = require('vue-awesome-swiper');


// global use
Vue.use(AwesomeSwiper);

new Vue({
  el: '#app',
  render: h => h(App)
});
