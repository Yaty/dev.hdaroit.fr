// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})

// TODO Prerendering : https://github.com/vuejs-templates/pwa/blob/bcf1b27e12637dfef4c5b18ae9af1ce1a95449ca/docs/prerender.md
// TODO Checklist : https://developers.google.com/web/progressive-web-apps/checklist
