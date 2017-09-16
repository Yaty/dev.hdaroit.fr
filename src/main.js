// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueScrollTo from 'vue-scrollto'
import 'bulma/css/bulma.css'
import App from './App'

Vue.config.productionTip = false
Vue.use(VueScrollTo, {
  offset: -50
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})

// TODO Prerendering : https://github.com/vuejs-templates/pwa/blob/bcf1b27e12637dfef4c5b18ae9af1ce1a95449ca/docs/prerender.md
// TODO Checklist : https://developers.google.com/web/progressive-web-apps/checklist
// TODO Update /static/img/icons icons
