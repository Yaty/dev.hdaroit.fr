// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueScrollTo from 'vue-scrollto'
import VueI18n from 'vue-i18n'
import VueLazyload from 'vue-lazyload'
import App from './App'
import messages from './assets/i18n.json'
import 'font-awesome/css/font-awesome.min.css'

Vue.config.productionTip = false
Vue.use(VueScrollTo, { offset: -50 })
Vue.use(VueI18n)
Vue.use(VueLazyload, { observer: true })

const i18n = new VueI18n({
  locale: 'en',
  messages
})

/* eslint-disable no-new */
new Vue({
  i18n,
  el: '#app',
  template: '<App/>',
  components: { App }
})
