import Vue from 'vue'
import FeatherIcon from '@core/components/feather-icon/FeatherIcon.vue'
import ModalBlock from './layouts/components/modals/Modal.vue'
import PaymentModal from './layouts/components/modals/PaymentModal.vue'
import CallModal from './layouts/components/modals/CallModal.vue'
import SuccessModal from './layouts/components/modals/SuccessModal.vue'
import LoginModal from './layouts/components/modals/LoginModal.vue'

Vue.component(FeatherIcon.name, FeatherIcon)
Vue.component('modal-block', ModalBlock)
Vue.component('modal-payment', PaymentModal)
Vue.component('modal-call', CallModal)
Vue.component('modal-success', SuccessModal)
Vue.component('modal-login', LoginModal)
