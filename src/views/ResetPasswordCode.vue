<template>
  <div>
    <header-block :template="'light'" />
    <div class="login">
      <div
        class="login-badge"
        :class="{ 'is-active': $store.state.account.sentResetMail }"
      >
        <p>
          Мы выслали вам код для сброса пароля. Пожалуйста, проверьте свою электронную почту.
        </p>
        <button
          class="login-badge__close"
          @click="badgeClose"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g opacity="0.3">
              <path
                d="M18.7 17.3C19.1 17.7 19.1 18.3 18.7 18.7C18.5 18.9 18.3 19 18 19C17.7 19 17.5 18.9 17.3 18.7L12 13.4L6.7 18.7C6.5 18.9 6.3 19 6 19C5.7 19 5.5 18.9 5.3 18.7C4.9 18.3 4.9 17.7 5.3 17.3L10.6 12L5.3 6.7C4.9 6.3 4.9 5.7 5.3 5.3C5.7 4.9 6.3 4.9 6.7 5.3L12 10.6L17.3 5.3C17.7 4.9 18.3 4.9 18.7 5.3C19.1 5.7 19.1 6.3 18.7 6.7L13.4 12L18.7 17.3Z"
                fill="#373737"
              />
              <mask
                id="mask0_1681_91794"
                style="mask-type:alpha"
                maskUnits="userSpaceOnUse"
                x="5"
                y="5"
                width="14"
                height="14"
              >
                <path
                  d="M18.7 17.3C19.1 17.7 19.1 18.3 18.7 18.7C18.5 18.9 18.3 19 18 19C17.7 19 17.5 18.9 17.3 18.7L12 13.4L6.7 18.7C6.5 18.9 6.3 19 6 19C5.7 19 5.5 18.9 5.3 18.7C4.9 18.3 4.9 17.7 5.3 17.3L10.6 12L5.3 6.7C4.9 6.3 4.9 5.7 5.3 5.3C5.7 4.9 6.3 4.9 6.7 5.3L12 10.6L17.3 5.3C17.7 4.9 18.3 4.9 18.7 5.3C19.1 5.7 19.1 6.3 18.7 6.7L13.4 12L18.7 17.3Z"
                  fill="white"
                />
              </mask>
              <g mask="url(#mask0_1681_91794)">
                <rect
                  width="24"
                  height="24"
                  fill="#373737"
                />
              </g>
            </g>
          </svg>
        </button>
      </div>
      <div class="login__inner">
        <p class="login__title">
          Восстановить пароль
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
                <label for="login-password">Код</label>
              </div>
              <validation-provider
                #default="{ errors }"
                name="code"
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
                    name="login-password"
                  />
                </b-input-group>
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
                Сбросить пароль
              </span>
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
</template>

<script>
/* eslint-disable global-require */
import { ValidationProvider, ValidationObserver } from 'vee-validate'
import {
  BFormGroup, BFormInput, BInputGroupAppend, BInputGroup, BForm, BLink,
} from 'bootstrap-vue'
import { required, email } from '@validations'
import { togglePasswordVisibility } from '@core/mixins/ui/forms'
import store from '@/store'
import API from '@/api/api'
import { setToken } from '@/auth/utils'
import { mapActions, mapGetters } from 'vuex'
import HeaderBlock from '../layouts/components/header-block/HeaderBlock.vue'

export default {
  components: {
    HeaderBlock,
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
  data() {
    return {
      status: '',
      password: '',
      username: '',
      required,
      email,
      error: '',
      isLoading: false,
    }
  },
  mounted() {
    if (this.isLoggedIn) {
      this.$router.push('/')
    }
  },
  destroyed() {
    store.dispatch('account/setResetSent', { val: false })
  },
  computed: {
    ...mapGetters('account', ['isLoggedIn', 'token']),
    passwordToggleIcon() {
      return this.passwordFieldType === 'password' ? 'EyeIcon' : 'EyeOffIcon'
    },
  },
  methods: {
    ...mapActions('account', ['fetchAccount']),
    submit() {
      this.$refs.loginForm.validate().then(success => {
        if (success) {
          this.isLoading = true

          try {
            const formdata = new FormData()
            formdata.append('email', this.username)
            formdata.append('code', this.password)

            const requestOptions = {
              method: 'POST',
              body: formdata,
              redirect: 'follow',
            }

            fetch(`${API}/bdpwr/v1/validate-code`, requestOptions)
              .then(response => response.json())
              .then(result => {
                this.isLoading = false

                if (result.data.status === 200) {
                  this.$router.push('/login')
                  return
                }

                this.error = result.message
              })
              .catch(error => console.log('error', error))
          } catch (err) {
            console.log(err)
          }
        }
      })
    },
    badgeClose() {
      store.dispatch('account/setResetSent', { val: false })
    },
  },
}
</script>

<style lang="scss">
</style>
