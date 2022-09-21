<template>
  <div>
    <header-block :template="'light'" />
    <div class="registration">
      <div
        class="login-badge"
        :class="{ 'is-active': $store.state.account.sentResetMail }"
      >
        <p>
          Мы выслали вам инструкции по сбросу пароля. Пожалуйста, проверьте свою электронную почту.
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
      <div class="container">
        <div class="registration__inner">
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
          <div class="registration-right">
            <p class="registration-right__title">
              Что вы получите
            </p>
            <div class="registration-items">
              <div class="registration-item registration-item--documents">
                <div class="registration-item__img">
                  <img
                    src="../assets/images/registration-1.png"
                    alt="#"
                  >
                </div>
                <p class="registration-item__text">
                  Возможность генерации персональных документов
                </p>
              </div>
              <div class="registration-item registration-item--rights">
                <div class="registration-item__img">
                  <img
                    src="../assets/images/registration-2.png"
                    alt="#"
                  >
                </div>
                <p class="registration-item__text">
                  Доступ к материалам по защите прав потребителей
                </p>
              </div>
              <div class="registration-item registration-item--situation">
                <div class="registration-item__img">
                  <img
                    src="../assets/images/registration-3.png"
                    alt="#"
                  >
                </div>
                <p class="registration-item__text">
                  Профессиональное решение вашей уникальной ситуации
                </p>
              </div>
            </div>
            <b-link
              :to="{name: 'subscription'}"
              class="btn btn--light registration-right__btn"
            >
              Подробнее о тарифах
            </b-link>
          </div>
        </div>
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
    }
  },
  mounted() {
    if (this.isLoggedIn) {
      this.$router.push('/')
    }
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
                  this.$router.push('/')
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
    badgeClose() {
      store.dispatch('account/setResetSent', { val: false })
    },
  },
}
</script>

<style lang="scss">
</style>
