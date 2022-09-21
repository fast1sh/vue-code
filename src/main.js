import Vue from 'vue'
import { ToastPlugin, ModalPlugin } from 'bootstrap-vue'
import VueCompositionAPI from '@vue/composition-api'
import { localize, extend } from 'vee-validate'
import ru from 'vee-validate/dist/locale/ru.json'
import VueJivosite from '@bchteam/vue-jivosite'

import { required } from 'vee-validate/dist/rules'
import router from './router'
import store from './store'
import App from './App.vue'

// Global Components
import './global-components'

// 3rd party plugins
import '@/libs/portal-vue'
import '@/libs/toastification'

Vue.use(VueJivosite, {
  widgetId: 'LQFTtd5dGi',
})

localize({
  ru,
})
localize('ru')

extend('required', {
  ...required,
  message: 'Поле обязательно для заполнения',
})

// BSV Plugin Registration
Vue.use(ToastPlugin)
Vue.use(ModalPlugin)

// Composition API
Vue.use(VueCompositionAPI)

// import core styles
require('@core/scss/core.scss')

// import assets styles
require('@/assets/scss/style.scss')

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
