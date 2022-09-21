<template>
  <div style="min-height: 100vh;overflow: hidden">
    <header-block :template="'light'" />
    <div class="registration">
      <div class="container">
        <div class="registration__inner">
          <div class="login">
            <div class="login__inner">
              <p class="login__title">
                Регистрация
              </p>
              <validation-observer ref="registrationForm">
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
                  <!-- submit buttons -->
                  <button
                    type="submit"
                    class="btn login__btn"
                  >
                    Зарегистрироваться
                  </button>
                  <small class="text-danger text-danger--mb">{{ error }}</small>

                  <p class="login__text">
                    Есть аккаунт?
                    <b-link :to="{name:'login'}">
                      <span>Войдите</span>
                    </b-link>
                  </p>

                  <p class="login__text login__text--registration">
                    Регистрируясь или авторизуясь, вы принимаете <a href="#">оферту</a> и соглашаетесь с <a href="#">правилами пользования сервисом.</a>
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
import ToastificationContent from '@core/components/toastification/ToastificationContent.vue'
import axios from '@/libs/axios'
import { mapActions, mapGetters } from 'vuex'
import store from '@/store'
import { setToken } from '@/auth/utils'
import API from '../api/api'
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
      password: '',
      username: '',
      required,
      email,
      error: '',
    }
  },
  mounted() {
    console.log(this.isLoggedIn)
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
      this.$refs.registrationForm.validate().then(success => {
        if (success) {
          try {
            const formdata = new FormData()
            formdata.append('email', this.username)
            formdata.append('password', this.password)

            const requestOptions = {
              method: 'POST',
              body: formdata,
              redirect: 'follow',
            }

            fetch(`${API}/v1/register`, requestOptions)
              .then(response => response.json())
              .then(result => {
                console.log(result)
                if (result.success) {
                  store.dispatch('account/setUserId', { val: result.data.id })
                  store.dispatch('account/setUserToken', { val: result.data.token })
                  setToken(result.data.token)
                  this.fetchAccount()
                  this.$router.push('/')
                } else {
                  this.error = result.data
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

<style lang="scss">
</style>
