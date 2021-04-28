import Vue from 'vue'
import App from './App.vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faAngleDoubleDown, faChevronDown, faArrowDown } from '@fortawesome/free-solid-svg-icons'
import { faWordpressSimple, faPhp, faVuejs, faLaravel, faBootstrap, faJava, faJs } from '@fortawesome/free-brands-svg-icons'
import ImageIconComponent from "@/components/ImageIconComponent";

Vue.config.productionTip = false

let icons = [
    faAngleDoubleDown,
    faChevronDown,
    faArrowDown,
    faWordpressSimple,
    faPhp,
    faVuejs,
    faLaravel,
    faBootstrap,
    faJava,
    faJs
]

icons.forEach(icon => {
  library.add(icon);
});

Vue.component('fontawesome', FontAwesomeIcon)
Vue.component('i-icon', ImageIconComponent)

new Vue({
  render: h => h(App),
}).$mount('#app')
