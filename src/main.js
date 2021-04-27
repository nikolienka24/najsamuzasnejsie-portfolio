import Vue from 'vue'
import App from './App.vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'

Vue.config.productionTip = false

library.add(faArrowDown)
Vue.component('fontawesome', FontAwesomeIcon)

new Vue({
  render: h => h(App),
}).$mount('#app')
