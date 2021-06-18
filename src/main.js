import Vue from 'vue'
import VueScrollTo from 'vue-scrollto'
import VueI18n from 'vue-i18n'
import VueLazyload from 'vue-lazyload'
import App from './App'
import messages from './assets/i18n.json'
import '@fortawesome/fontawesome-free/css/all.min.css'

Vue.config.productionTip = false
Vue.use(VueScrollTo, { offset: -50 })
Vue.use(VueI18n)
Vue.use(VueLazyload, { observer: true })

const i18n = new VueI18n({
  locale: 'fr',
  messages
})

new Vue({
  i18n,
  el: '#app',
  render: h => h(App),
  components: { App }
})
