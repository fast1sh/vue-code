<template>
  <modal-block
    v-show="show"
    class="modal--login"
    @close="close"
  >
    <div
      slot="body"
    >
      <div class="login">
        <div class="login__inner">
          <p class="login__title">
            Войти в аккаунт
          </p>
          <validation-observer ref="loginForm">
            <b-form
              class="login__form"
              @submit.prevent="submit"
            >
              <!-- email -->
              <b-form-group
                label="Ваш e-mail"
                label-for="login-email"
              >
                <validation-provider
                  #default="{ errors }"
                  name="Email"
                  rules="required|email"
                >
                  <b-form-input
                    id="login-email"
                    v-model="username"
                    :state="errors.length > 0 ? false:null"
                    name="login-email"
                    placeholder="john@example.com"
                  />
                  <small class="text-danger">{{ errors[0] }}</small>
                </validation-provider>
              </b-form-group>

              <!-- forgot password -->
              <b-form-group>
                <div class="d-flex justify-content-between">
                  <label for="login-password">Пароль</label>
                </div>
                <validation-provider
                  #default="{ errors }"
                  name="Password"
                  rules="required"
                >
                  <b-input-group
                    class="input-group-merge"
                    :class="errors.length > 0 ? 'is-invalid':null"
                  >
                    <b-form-input
                      id="login-password"
                      v-model="password"
                      :state="errors.length > 0 ? false:null"
                      class="form-control-merge"
                      :type="passwordFieldType"
                      name="login-password"
                      placeholder="············"
                    />
                    <b-input-group-append is-text>
                      <feather-icon
                        class="cursor-pointer"
                        :icon="passwordToggleIcon"
                        @click="togglePasswordVisibility"
                      />
                    </b-input-group-append>
                  </b-input-group>
                  <small class="text-danger">{{ errors[0] }}</small>
                </validation-provider>
              </b-form-group>

              <b-link
                :to="{name:'reset'}"
                class="login__text login__forgot-password"
              >
                <span>Восстановить пароль</span>
              </b-link>

              <!-- submit buttons -->
              <button
                type="submit"
                class="btn login__btn"
              >
                Войти
              </button>
              <small class="text-danger text-danger--mb">{{ error }}</small>

              <p class="login__text">
                Нет аккаунта?
                <b-link :to="{name:'registration'}">
                  <span>Зарегистрируйтесь бесплатно</span>
                </b-link>
              </p>
            </b-form>
          </validation-observer>
        </div>
      </div>
    </div>
  </modal-block>
</template>

<script>

import { getToken, setToken } from '@/auth/utils'
import API from '@/api/api'
import { email, required } from '@core/utils/validations/validations'
import {
  BForm, BFormGroup, BFormInput, BInputGroup, BInputGroupAppend, BLink,
} from 'bootstrap-vue'
import { ValidationObserver, ValidationProvider } from 'vee-validate'
import store from '@/store'
import {togglePasswordVisibility} from "@core/mixins/ui/forms";
import {mapActions} from "vuex";

export default {
  name: 'LoginModal',
  components: {
    BFormGroup,
    BFormInput,
    BInputGroupAppend,
    BInputGroup,
    BForm,
    BLink,
    ValidationProvider,
    ValidationObserver,
  },
  mixins: [togglePasswordVisibility],
  props: {
    show: {
      type: Boolean,
      required: true,
      default: false,
    },
  },

  data() {
    return {
      status: '',
      password: '',
      username: '',
      required,
      email,
      error: '',
    }
  },
  computed: {
    passwordToggleIcon() {
      return this.passwordFieldType === 'password' ? 'EyeIcon' : 'EyeOffIcon'
    },
  },
  mounted() {
  },

  methods: {
    ...mapActions('account', ['fetchAccount']),
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

    submit() {
      this.$refs.loginForm.validate().then(success => {
        if (success) {
          try {
            const formdata = new FormData()
            formdata.append('username', this.username)
            formdata.append('password', this.password)

            const requestOptions = {
              method: 'POST',
              body: formdata,
              redirect: 'follow',
            }

            fetch(`${API}/jwt-auth/v1/token`, requestOptions)
              .then(response => response.json())
              .then(result => {
                if (result.success) {
                  store.dispatch('account/setUserId', { val: result.data.id })
                  store.dispatch('account/setUserToken', { val: result.data.token })
                  setToken(result.data.token)
                  this.fetchAccount()
                  this.close()
                  return
                }

                if (!result.success) {
                  console.log(result.success)

                  this.error = result.message
                }
              })
              .catch(error => console.log('error', error))
          } catch (err) {
            console.log(err)
          }
        }
      })
    },
  },
}
</script>
