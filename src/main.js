// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'bulma/css/bulma.css'
import 'bulma'

import VueCarousel from 'vue-carousel';
Vue.use(VueCarousel);
import { Carousel, Slide } from 'vue-carousel';

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  Carousel,
  Slide,
  components: { App },
  template: '<App/>'
});

