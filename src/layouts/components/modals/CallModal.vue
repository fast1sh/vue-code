<template>
  <modal-block
    v-show="show"
    class="modal--call"
    @close="close"
  >
    <div
      slot="body"
    >
      <div class="modal-call">
        <p class="modal-call__title">
          Получить консультацию
        </p>
        <p class="modal-call__text">
          Оставьте ваши контакты и наш менеджер свяжется с вами
        </p>
        <validation-observer ref="callForm">
          <b-form
            class="modal-call__form"
            @submit.prevent="submit"
          >
            <b-form-group
              label="Имя"
              label-for="name"
            >
              <validation-provider
                #default="{ errors }"
                name="Name"
                rules="required"
              >
                <b-form-input
                  id="name"
                  v-model="formName"
                  :state="errors.length > 0 ? false:null"
                  name="name"
                />
                <small class="text-danger">{{ errors[0] }}</small>
              </validation-provider>
            </b-form-group>

            <b-form-group
              label="Телефон"
              label-for="phone"
            >
              <validation-provider
                #default="{ errors }"
                name="phone"
                rules="required"
              >
                <cleave
                  id="phone"
                  v-model="formPhone"
                  class="form-control"
                  :state="errors.length > 0 ? false:null"
                  name="phone"
                  :options="options.phone"
                  placeholder="+7 916 319-73-77"
                />
                <small class="text-danger">{{ errors[0] }}</small>
              </validation-provider>
            </b-form-group>

            <!-- submit buttons -->
            <button
              type="submit"
              class="btn login__btn"
            >
              <span
                v-if="isLoading"
                class="spinner-border spinner-border-sm"
                role="status"
                aria-hidden="true"
              />
              <span
                v-else
              >
                Отправить
              </span>
            </button>
            <small class="text-danger text-danger--mb">{{ error }}</small>

            <p class="login__text">
              Согласен с <a href="#">
                политикой обработки
                персональных данных
              </a>
            </p>
          </b-form>
        </validation-observer>
      </div>
    </div>
  </modal-block>
</template>

<script>
import { ValidationProvider, ValidationObserver, Validator } from 'vee-validate'
import Cleave from 'vue-cleave-component';
import 'cleave.js/dist/addons/cleave-phone.ru'
import {BForm, BFormGroup, BFormInput} from "bootstrap-vue";

export default {
  name: 'CallModal',
  props: {
    show: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  components: {
    BFormGroup,
    BFormInput,
    BForm,
    ValidationProvider,
    ValidationObserver,
    Cleave,
  },

  data() {
    return {
      isLoading: false,
      error: '',
      formName: '',
      formPhone: '',
      options: {
        phone: {
          phone: true,
          phoneRegionCode: 'RU',
        },
      },
    }
  },

  methods: {
    close() {
      this.enableBodyScroll()
      this.$emit('close')
    },

    closeOnOverlay() {
      this.close()
    },

    disableBodyScroll() {
      document.body.classList.add('modal-opened')
    },

    enableBodyScroll() {
      document.body.classList.remove('modal-opened')
    },
  },
}
</script>
