import Vue from 'vue'
import App from './App.vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faAngleDoubleDown, faChevronDown, faArrowDown } from '@fortawesome/free-solid-svg-icons'
import { faWordpressSimple, faPhp, faVuejs, faLaravel } from '@fortawesome/free-brands-svg-icons'

Vue.config.productionTip = false

let icons = [
    faAngleDoubleDown,
    faChevronDown,
    faArrowDown,
    faWordpressSimple,
    faPhp,
    faVuejs,
    faLaravel
]

icons.forEach(icon => {
  library.add(icon);
});

Vue.component('fontawesome', FontAwesomeIcon)


new Vue({
  render: h => h(App),
}).$mount('#app')
