<template>
  <div>
    <header-block />
    <div class="account">
      <div class="container">
        <ul class="breadcrumb breadcrumb--mobile">
          <li class="breadcrumb__back">
            <b-link @click="$router.go(-1)">
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M7.4128 2.5042C7.64061 2.732 7.64061 3.10135 7.4128 3.32916L4.32528 6.41668H11.0837C11.4058 6.41668 11.667 6.67784 11.667 7.00001C11.667 7.32218 11.4058 7.58334 11.0837 7.58334H4.32528L7.4128 10.6709C7.64061 10.8987 7.64061 11.268 7.4128 11.4958C7.185 11.7236 6.81565 11.7236 6.58785 11.4958L2.50451 7.41249C2.44859 7.35656 2.40639 7.2921 2.37792 7.2233C2.35054 7.15726 2.33493 7.08509 2.33373 7.00943M2.37792 6.77672C2.40639 6.70792 2.44859 6.64346 2.50451 6.58753L6.58785 2.5042C6.81565 2.27639 7.185 2.27639 7.4128 2.5042M2.37792 6.77672C2.35053 6.84276 2.33493 6.91493 2.33373 6.99059L2.37792 6.77672Z"
                  fill="#7F7F7F"
                />
                <mask
                  id="mask0_1354_96536"
                  style="mask-type:alpha"
                  maskUnits="userSpaceOnUse"
                  x="2"
                  y="2"
                  width="10"
                  height="10"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M7.4128 2.5042C7.64061 2.732 7.64061 3.10135 7.4128 3.32916L4.32528 6.41668H11.0837C11.4058 6.41668 11.667 6.67784 11.667 7.00001C11.667 7.32218 11.4058 7.58334 11.0837 7.58334H4.32528L7.4128 10.6709C7.64061 10.8987 7.64061 11.268 7.4128 11.4958C7.185 11.7236 6.81565 11.7236 6.58785 11.4958L2.50451 7.41249C2.44859 7.35656 2.40639 7.2921 2.37792 7.2233C2.35054 7.15726 2.33493 7.08509 2.33373 7.00943M2.37792 6.77672C2.40639 6.70792 2.44859 6.64346 2.50451 6.58753L6.58785 2.5042C6.81565 2.27639 7.185 2.27639 7.4128 2.5042M2.37792 6.77672C2.35053 6.84276 2.33493 6.91493 2.33373 6.99059L2.37792 6.77672Z"
                    fill="white"
                  />
                </mask>
                <g mask="url(#mask0_1354_96536)">
                  <rect
                    width="14"
                    height="14"
                    transform="matrix(-1 0 0 1 14 0)"
                    fill="#7F7F7F"
                  />
                </g>
              </svg>
              Назад
            </b-link>
          </li>
        </ul>
        <div class="account-inner">
          <h1>Личный кабинет</h1>
          <b-tabs>
            <b-tab
              title="Мой аккаунт"
              active
            >
              <div class="account-wrapper">
                <div class="account-column">
                  <validation-observer ref="accountForm">
                    <b-form
                      class="account-form"
                      @submit.prevent="accountUpdate"
                    >
                      <p class="account-form__title">
                        Данные владельца автомобиля
                      </p>
                      <b-form-group
                        label="ФИО"
                        label-for="name"
                      >
                        <validation-provider
                          #default="{ errors }"
                          name="name"
                          rules="required|regex:^[А-ЯЁ][а-яё]*([-][А-ЯЁ][а-яё]*)?\s[А-ЯЁ][а-яё]*\s[А-ЯЁ][а-яё]*$"
                        >
                          <b-form-input
                            id="name"
                            v-model="accountForm.full_name"
                            :state="errors.length > 0 ? false:null"
                            name="name"
                            placeholder="Например, Петров Петр Петрович"
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
                            v-model="accountForm.phone"
                            class="form-control"
                            :state="errors.length > 0 ? false:null"
                            name="phone"
                            :options="options.phone"
                            placeholder="+7 916 319-73-77"
                          />
                          <small class="text-danger">{{ errors[0] }}</small>
                        </validation-provider>
                      </b-form-group>
                      <b-form-group
                        label="Ваш e-mail"
                        label-for="email"
                      >
                        <validation-provider
                          #default="{ errors }"
                          name="Email"
                          rules="required|email"
                        >
                          <b-form-input
                            id="email"
                            v-model="accountForm.email"
                            :state="errors.length > 0 ? false:null"
                            name="login-email"
                            placeholder="john@example.com"
                          />
                          <div class="form-control__badge" v-if="false">
                            <h4>Требуется подтверждение</h4>
                            <p>На указанную почту отправлено письмо с подтверждением. В письме нажмите кнопку «Подтвердить почту».</p>
                          </div>
                          <small class="text-danger">{{ errors[0] }}</small>
                        </validation-provider>
                      </b-form-group>
                      <!-- submit buttons -->
                      <button
                        type="submit"
                        class="btn account-form__btn"
                        :disabled="accountForm.isLoading"
                      >
                        <span
                          v-if="accountForm.isLoading"
                          class="spinner-border spinner-border-sm"
                          role="status"
                          aria-hidden="true"
                        />
                        <span v-else>Сохранить</span>
                      </button>
                      <small
                        v-if="accountForm.error"
                        class="text-danger text-danger--mt"
                      >{{ accountForm.error }}</small>
                      <small
                        v-if="accountForm.isSuccess"
                        class="text-success text-success--mt"
                      >Сохранено</small>
                    </b-form>
                  </validation-observer>
                  <validation-observer
                    v-if="!accountColumnMidShow && !car.car_brand"
                    ref="carForm"
                    class="account-form--md"
                  >
                    <b-form
                      class="account-form"
                      @submit.prevent="carUpdate"
                    >
                      <p class="account-form__title">
                        Автомобиль
                      </p>
                      <b-form-group
                        label="Марка"
                        label-for="brand"
                      >
                        <validation-provider
                          #default="{ errors }"
                          name="car_brand"
                        >
                          <b-form-input
                            id="brand"
                            v-model="carForm.car_brand.data"
                            :state="errors.length > 0 ? false:null"
                            name="brand"
                            placeholder=""
                          />
                          <small class="text-danger">{{ errors[0] }}</small>
                        </validation-provider>
                      </b-form-group>
                      <b-form-group
                        label="Модель"
                        label-for="model"
                      >
                        <validation-provider
                          #default="{ errors }"
                          name="car_model"
                          rules="required"
                        >
                          <b-form-input
                            id="model"
                            v-model="carForm.car_model.data"
                            :state="errors.length > 0 ? false:null"
                            name="model"
                            placeholder=""
                          />
                          <small class="text-danger">{{ errors[0] }}</small>
                        </validation-provider>
                      </b-form-group>
                      <b-form-group
                        label="Год выпуска"
                        label-for="year"
                      >
                        <validation-provider
                          #default="{ errors }"
                          name="manufacture_year"
                          rules="required"
                        >
                          <b-form-input
                            id="year"
                            v-model="carForm.manufacture_year.data"
                            :state="errors.length > 0 ? false:null"
                            name="year"
                            placeholder=""
                          />
                          <small class="text-danger">{{ errors[0] }}</small>
                        </validation-provider>
                      </b-form-group>
                      <b-form-group
                        label="VIN"
                        label-for="vin"
                      >
                        <validation-provider
                          #default="{ errors }"
                          name="vin"
                          rules="required"
                        >
                          <b-form-input
                            id="vin"
                            v-model="carForm.vin.data"
                            :state="errors.length > 0 ? false:null"
                            name="vin"
                            placeholder=""
                          />
                          <small class="text-danger">{{ errors[0] }}</small>
                        </validation-provider>
                      </b-form-group>
                      <!-- submit buttons -->
                      <button
                        type="submit"
                        class="btn account-form__btn"
                        :disabled="carForm.isLoading"
                      >
                        <span
                          v-if="carForm.isLoading"
                          class="spinner-border spinner-border-sm"
                          role="status"
                          aria-hidden="true"
                        />
                        <span v-else>Сохранить</span>
                      </button>
                      <small
                        v-if="carForm.error"
                        class="text-danger text-danger--mt"
                      >{{ carForm.error }}</small>
                    </b-form>
                  </validation-observer>
                  <div
                    v-if="car && car.car_brand"
                    class="account-car"
                  >
                    <p class="account-car__title">
                      Автомобили
                    </p>
                    <div class="account-car-form">
                      <p class="account-car-form__title">
                        {{ car.car_brand }} {{ car.car_model }} {{ car.manufacture_year }}
                      </p>
                      <p class="account-car-form__vin">
                        <span>VIN:</span> {{ car.vin }}
                      </p>
                    </div>
                  </div>
                  <div class="account-form account-form--invite">
                    <p class="account-form__title">
                      Пригласить друзей
                    </p>
                    <p class="account-form__text">
                      За каждого, купившего тариф PRO по этой ссылке, мы выплачиваем 1 000 ₽
                    </p>
                    <div class="account-invite">
                      <div class="account-invite__left">
                        <p class="account-invite__title">
                          Персональная ссылка
                        </p>
                        <p class="account-invite__link">
                          ozpp.ri/hkbreer12
                        </p>
                      </div>
                      <button class="btn account-invite__btn">
                        Поделиться
                      </button>
                    </div>
                  </div>
                </div>
                <div
                  v-if="accountColumnMidShow && !car.car_brand"
                  class="account-column account-column--mid"
                >
                  <validation-observer ref="carForm">
                    <b-form
                      class="account-form"
                      @submit.prevent="carUpdate"
                    >
                      <p class="account-form__title">
                        Автомобиль
                      </p>
                      <b-form-group
                        label="Марка"
                        label-for="brand"
                      >
                        <validation-provider
                          #default="{ errors }"
                          name="car_brand"
                        >
                          <b-form-input
                            id="brand"
                            v-model="carForm.car_brand.data"
                            :state="errors.length > 0 ? false:null"
                            name="brand"
                            placeholder=""
                          />
                          <small class="text-danger">{{ errors[0] }}</small>
                        </validation-provider>
                      </b-form-group>
                      <b-form-group
                        label="Модель"
                        label-for="model"
                      >
                        <validation-provider
                          #default="{ errors }"
                          name="car_model"
                          rules="required"
                        >
                          <b-form-input
                            id="model"
                            v-model="carForm.car_model.data"
                            :state="errors.length > 0 ? false:null"
                            name="model"
                            placeholder=""
                          />
                          <small class="text-danger">{{ errors[0] }}</small>
                        </validation-provider>
                      </b-form-group>
                      <b-form-group
                        label="Год выпуска"
                        label-for="year"
                      >
                        <validation-provider
                          #default="{ errors }"
                          name="manufacture_year"
                          rules="required"
                        >
                          <b-form-input
                            id="year"
                            v-model="carForm.manufacture_year.data"
                            :state="errors.length > 0 ? false:null"
                            name="year"
                            placeholder=""
                          />
                          <small class="text-danger">{{ errors[0] }}</small>
                        </validation-provider>
                      </b-form-group>
                      <b-form-group
                        label="VIN"
                        label-for="vin"
                      >
                        <validation-provider
                          #default="{ errors }"
                          name="vin"
                          rules="required"
                        >
                          <b-form-input
                            id="vin"
                            v-model="carForm.vin.data"
                            :state="errors.length > 0 ? false:null"
                            name="vin"
                            placeholder=""
                          />
                          <small class="text-danger">{{ errors[0] }}</small>
                        </validation-provider>
                      </b-form-group>
                      <!-- submit buttons -->
                      <button
                        type="submit"
                        class="btn account-form__btn"
                        :disabled="carForm.isLoading"
                      >
                        <span
                          v-if="carForm.isLoading"
                          class="spinner-border spinner-border-sm"
                          role="status"
                          aria-hidden="true"
                        />
                        <span v-else>Сохранить</span>
                      </button>
                      <small
                        v-if="carForm.error"
                        class="text-danger text-danger--mt"
                      >{{ carForm.error }}</small>
                    </b-form>
                  </validation-observer>
                </div>
                <div class="account-right">
                  <div class="hero-banner">
                    <div class="hero-banner__img">
                      <img
                        src="../assets/images/hero-banner-img.svg"
                        alt="#"
                      >
                    </div>
                    <p class="hero-banner__text">
                      Безлимитная генерация документов <br> и бессрочный доступ <br> к платным статьям всего за
                    </p>
                    <div class="hero-banner__wrapper">
                      <p class="hero-banner__price">
                        3 900 ₽
                      </p>
                      <p class="hero-banner__price-old">
                        5 490 ₽
                      </p>
                    </div>
                    <b-link
                      :to="{name: 'subscription'}"
                      class="btn btn--light"
                    >
                      К предложению
                    </b-link>
                  </div>
                </div>
              </div>
            </b-tab>

            <b-tab ref="documentsTab" title="Сгенерированные документы">
              <div
                v-if="submissions"
                class="document-items"
              >
                <div
                  v-for="document in submissions"
                  :key="document.ID"
                  class="document-item"
                >
                  <div class="document-item__left">
                    <h3 class="document-item__title">
                      {{ document.title }}
                    </h3>
                    <p class="document-item__text">
                      {{ new Date(document.date).toLocaleString("ru").slice(0,17) }}
                    </p>
                  </div>
                  <div class="document-item__right">
                    <a
                      :href="document.download_url"
                      class="document-item__link icon icon-download"
                      download
                    >
                      <svg
                        width="24"
                        height="25"
                        viewBox="0 0 24 25"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M11 2.5V4.5H13V2.5H11ZM11 6.5V15.0859L7.70703 11.793L6.29297 13.207L12 18.9141L17.707 13.207L16.293 11.793L13 15.0859V6.5H11ZM2 17.5V20.5C2 21.5931 2.90694 22.5 4 22.5H20C21.0931 22.5 22 21.5931 22 20.5V17.5H20V20.5H4V17.5H2Z"
                          fill="#373737"
                        />
                      </svg>
                      <span>Скачать</span>
                    </a>
                  </div>
                </div>
              </div>
            </b-tab>
          </b-tabs>
        </div>
      </div>
    </div>
    <footer-block />
  </div>
</template>

<script>
import { ValidationProvider, ValidationObserver, Validator } from 'vee-validate'
import {
  BFormGroup, BFormInput, BForm, BLink, BTabs, BTab,
} from 'bootstrap-vue'
import { required, email } from '@validations'
import { mapActions, mapGetters } from 'vuex'
import Cleave from 'vue-cleave-component'
// eslint-disable-next-line import/no-extraneous-dependencies
import 'cleave.js/dist/addons/cleave-phone.ru'
import HeaderBlock from '../layouts/components/header-block/HeaderBlock.vue'
import FooterBlock from '../layouts/components/footer-block/FooterBlock.vue'

export default {
  components: {
    HeaderBlock,
    FooterBlock,
    BFormGroup,
    BFormInput,
    BForm,
    BLink,
    BTabs,
    BTab,
    ValidationProvider,
    ValidationObserver,
    Cleave,
  },
  computed: {
    ...mapGetters('account', ['account', 'car', 'submissions']),
    ...mapGetters('account', ['isLoggedIn', 'token']),
  },
  data() {
    return {
      accountForm: {
        full_name: '',
        phone: '',
        email: '',
        error: '',
        isLoading: false,
        isSuccess: false,
      },
      carForm: {
        car_brand: { data: '', error: '' },
        car_model: { data: '', error: '' },
        manufacture_year: { data: '', error: '' },
        vin: { data: '', error: '' },
        error: '',
        isLoading: false,
      },
      options: {
        phone: {
          phone: true,
          phoneRegionCode: 'RU',
        },
      },
      accountColumnMidShow: false,
      required,
      email,
    }
  },
  created() {
    window.addEventListener('resize', this.onResize)
  },
  destroyed() {
    window.removeEventListener('resize', this.onResize)
  },
  mounted() {
    if (!this.isLoggedIn) {
      this.$router.push('/login')
    }
    this.$nextTick(() => {
      if (this.$route.params.tab === 1) {
        this.$refs.documentsTab.activate()
      }
    })
    window.dispatchEvent(new Event('resize'))
    this.fetchAccount().then(() => {
      this.accountForm.full_name = this.account.full_name
      this.accountForm.phone = this.account.phone
      this.accountForm.email = this.account.email
    })
    this.fetchSubmissions()
    this.fetchCar()
  },
  methods: {
    ...mapActions('account', ['fetchAccount', 'updateAccount', 'updateCar', 'fetchCar', 'fetchSubmissions']),
    accountUpdate() {
      this.$refs.accountForm.validate().then(success => {
        if (success) {
          this.accountForm.error = ''
          this.accountForm.isLoading = true
          this.accountForm.isSuccess = false
          try {
            this.updateAccount(this.accountForm).then(res => {
              this.accountForm.isLoading = false
              if (res === true) {
                this.accountForm.isSuccess = true
                setTimeout(() => {
                  this.accountForm.isSuccess = false
                }, 1500)
              } else {
                this.accountForm.error = res.data
              }
            })
          } catch (err) {
            console.log(err)
          }
        }
      })
    },
    carUpdate() {
      this.carForm.error = ''
      this.carForm.isLoading = true
      this.carForm.isSuccess = false
      try {
        this.updateCar(this.carForm).then(res => {
          this.carForm.isLoading = false
          if (res.data && res.data.status === 400) {
            this.$refs.carForm.setErrors(res.data.params)
          } else {
            this.carForm.error = res.data
          }
        })
      } catch (err) {
        console.log(err)
      }
    },
    onResize() {
      this.accountColumnMidShow = window.innerWidth >= 1440
    },
  },
}
</script>

<style lang="scss">
</style>
