<template>
  <div>
    <header-block :template="'light'" />
    <div class="login">
      <div class="login__inner">
        <p class="login__title reset__title">
          Забыли пароль?
        </p>
        <p class="reset__text">
          Введите адрес электронной почты, который вы использовали при регистрации, мы вышлем на нее код для сброса вашего пароля.
        </p>
        <validation-observer ref="resetForm">
          <b-form
            class="login__form"
            @submit.prevent="submit"
          >
            <!-- email -->
            <b-form-group
              label="E-mail"
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
                v-else>
                Сбросить
                пароль
              </span>
            </button>
            <small class="text-danger text-danger--mb">{{ error }}</small>
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
  BFormGroup, BFormInput, BForm,
} from 'bootstrap-vue'
import { required, email } from '@validations'
import { togglePasswordVisibility } from '@core/mixins/ui/forms'
import store from '@/store'
import ToastificationContent from '@core/components/toastification/ToastificationContent.vue'
import API from '@/api/api'
import { setToken } from '@/auth/utils'
import { mapGetters } from 'vuex'
import HeaderBlock from '../layouts/components/header-block/HeaderBlock.vue'

export default {
  components: {
    HeaderBlock,
    BFormGroup,
    BFormInput,
    BForm,
    ValidationProvider,
    ValidationObserver,
  },
  mixins: [togglePasswordVisibility],
  data() {
    return {
      status: '',
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
  computed: {
    ...mapGetters('account', ['isLoggedIn', 'token']),
    passwordToggleIcon() {
      return this.passwordFieldType === 'password' ? 'EyeIcon' : 'EyeOffIcon'
    },
  },
  methods: {
    submit() {
      this.$refs.resetForm.validate().then(success => {
        if (success) {
          this.isLoading = true

          try {
            const formdata = new FormData()
            formdata.append('email', this.username)

            const requestOptions = {
              method: 'POST',
              body: formdata,
              redirect: 'follow',
            }

            fetch(`${API}/bdpwr/v1/reset-password`, requestOptions)
              .then(response => response.json())
              .then(result => {
                this.isLoading = false

                if (result.data.status === 200) {
                  store.dispatch('account/setResetSent', { val: true })
                  this.$router.push('/reset-code')
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
  },
}
</script>

<style lang="scss">
</style>
