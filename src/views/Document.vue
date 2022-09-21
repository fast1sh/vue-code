<template>
  <div>
    <header-block />
    <div
      v-if="document"
      class="document"
    >
      <div class="container">
        <ul class="breadcrumb">
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
          <li>
            <b-link
              :to="{name: 'index'}"
            >
              Главная
            </b-link>
          </li>
          <li>
            <a href="#">
              {{ document.post_title }}
              <svg
                width="8"
                height="8"
                viewBox="0 0 8 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_1790_91021)">
                  <path
                    d="M2 3L4 5L6 3L2 3Z"
                    stroke="#ACACAC"
                    stroke-width="2"
                    stroke-linecap="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1790_91021">
                    <rect
                      width="8"
                      height="8"
                      fill="white"
                    />
                  </clipPath>
                </defs>
              </svg>
            </a>
          </li>
        </ul>
        <div
          class="document-inner"
        >
          <validation-observer ref="documentForm">
            <b-form
              class="document-form"
              @submit.prevent="submit"
            >
              <b-link
                href="#"
                class="link-back document-form__link-back"
                @click="$router.go(-1)"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M12.7071 19.7071C13.0976 19.3166 13.0976 18.6834 12.7071 18.2929L7.41421 13L19 13C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11L7.41421 11L12.7071 5.70711C13.0976 5.31658 13.0976 4.68342 12.7071 4.29289C12.3166 3.90237 11.6834 3.90237 11.2929 4.29289L4.29361 11.2922C4.29119 11.2946 4.28879 11.297 4.2864 11.2994C4.1099 11.4792 4.0008 11.7254 4 11.997C4 11.998 4 11.999 4 12C4 12.001 4 12.002 4 12.003C4.0004 12.1375 4.02735 12.2657 4.07588 12.3828C4.12357 12.498 4.19374 12.6062 4.2864 12.7005C4.28875 12.703 4.29112 12.7053 4.29351 12.7077M4.29351 12.7077L11.2929 19.7071C11.6834 20.0976 12.3166 20.0976 12.7071 19.7071"
                    fill="#7F7F7F"
                  />
                  <mask
                    id="mask0_1372_91513"
                    style="mask-type:alpha"
                    maskUnits="userSpaceOnUse"
                    x="4"
                    y="4"
                    width="16"
                    height="16"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M12.7071 19.7071C13.0976 19.3166 13.0976 18.6834 12.7071 18.2929L7.41421 13L19 13C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11L7.41421 11L12.7071 5.70711C13.0976 5.31658 13.0976 4.68342 12.7071 4.29289C12.3166 3.90237 11.6834 3.90237 11.2929 4.29289L4.29361 11.2922C4.29119 11.2946 4.28879 11.297 4.2864 11.2994C4.1099 11.4792 4.0008 11.7254 4 11.997C4 11.998 4 11.999 4 12C4 12.001 4 12.002 4 12.003C4.0004 12.1375 4.02735 12.2657 4.07588 12.3828C4.12357 12.498 4.19374 12.6062 4.2864 12.7005C4.28875 12.703 4.29112 12.7053 4.29351 12.7077M4.29351 12.7077L11.2929 19.7071C11.6834 20.0976 12.3166 20.0976 12.7071 19.7071"
                      fill="white"
                    />
                  </mask>
                  <g mask="url(#mask0_1372_91513)">
                    <rect
                      x="24"
                      y="24"
                      width="24"
                      height="24"
                      transform="rotate(-180 24 24)"
                      fill="#7F7F7F"
                    />
                  </g>
                </svg>
                <span>
                  Назад
                </span>
              </b-link>
              <h3 class="document-form__title">
                {{ document.post_title }}
              </h3>
              <b-form-group
                v-for="field in document.form_fields"
                :key="field.input_name"
                :label="field.label"
                :label-for="field.input_name"
                class="document-form__group"
                :class="{ 'form-group--disabled': car.hasOwnProperty(field.input_name) }"
              >
                <validation-provider
                  #default="{ errors }"
                  name="name"
                  :rules="`required${field.regex ? '|regex:' + field.regex : ''}`"
                >
                  <b-form-input
                    :id="field.input_name"
                    v-model="formData[field.input_name]"
                    :state="errors.length > 0 ? false:null"
                    :name="field.input_name"
                    :type="field.type"
                    :placeholder="field.placeholder"
                  />
                  <small
                    v-if="errors.length > 0"
                    class="text-danger"
                  >{{ field.error_message }}</small>
                </validation-provider>
              </b-form-group>
              <button
                type="submit"
                class="btn document__btn"
                :disabled="btnDisabled || isLoading"
              >
                <span
                  v-if="isLoading"
                  class="spinner-border spinner-border-sm"
                  role="status"
                  aria-hidden="true"
                />
                <span v-else>Генерировать документ</span>
              </button>
            </b-form>
          </validation-observer>
          <div class="document-right">
            <div class="document-right__img">
              <img
                src="../assets/images/document-right.svg"
                alt="#"
              >
            </div>
            <div class="document-right__checked">
              <img
                src="../assets/images/document-checked.svg"
                alt="#"
              >
              <p>
                Документ соответствует законодательству
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <modal-payment
      :show="paymentModal"
      @close="closeModalPayment"
    />
    <modal-success
      :show="successModal"
      @close="closeModalSuccess"
      :downloadUrl="downloadUrl"
    />
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import { ValidationProvider, ValidationObserver } from 'vee-validate'
import { required, email } from '@validations'
import {
  BLink, BForm, BFormGroup, BFormInput, BFormCheckbox, BFormRadio,
} from 'bootstrap-vue'
import { eventHub } from '@/auth/utils'
import HeaderBlock from '../layouts/components/header-block/HeaderBlock.vue'

export default {
  components: {
    HeaderBlock,
    BLink,
    BForm,
    BFormGroup,
    BFormInput,
    BFormCheckbox,
    BFormRadio,
    ValidationProvider,
    ValidationObserver,
  },
  data() {
    return {
      formData: {
      },
      text: '',
      btnDisabled: true,
      paymentModal: false,
      successModal: false,
      isLoading: false,
      downloadUrl: '',
      required,
    }
  },
  created() {
    eventHub.$on('openModal:payment', () => {
      this.paymentModal = true
    })
    eventHub.$on('openModal:success', () => {
      this.successModal = true
    })
  },
  computed: {
    ...mapGetters('document', ['document', 'documentCreated']),
    ...mapGetters('account', ['account', 'car']),
    documentId() {
      return this.$route.params.document
    },
  },
  watch: {
    '$route.params.document': {
      handler() {
        this.resetDocumentState()
        this.fetchDocumentById(this.documentId)
        this.fetchCar()
      },
      deep: true,
      immediate: true,
    },
    formData: {
      handler(val) {
        this.btnDisabled = Object.entries(val).filter(([key, value]) => !value).length > 0
      },
      deep: true,
      immediate: true,
    },
    document: {
      handler() {
        if (this.document && this.document.form_fields) {
          this.document.form_fields.forEach(item => {
            this.$set(this.formData, item.input_name, '')
          })
        }
      },
      deep: true,
      immediate: true,
    },
    car: {
      handler() {
        if (this.document && this.document.form_fields && this.car && this.car.car_brand) {
          Object.keys(this.car).forEach(key => {
            // eslint-disable-next-line no-prototype-builtins
            if (this.formData.hasOwnProperty(key)) {
              this.formData[key] = this.car[key]
            }
          })
        }
      },
      deep: true,
      immediate: true,
    },
  },
  methods: {
    ...mapActions('document', ['fetchDocumentById', 'resetDocumentState', 'createDocument']),
    ...mapActions('account', ['fetchAccount', 'fetchCar']),
    submit() {
      this.$refs.documentForm.validate().then(success => {
        if (success) {
          this.isLoading = true

          if (this.account.has_paid_document_generation || this.account.subscription_ends_at) {
            try {
              const formData = new FormData()
              formData.append('document_id', this.$route.params.document)
              Object.entries(this.formData).forEach(item => {
                formData.append(item[0], item[1])
              })

              this.createDocument(formData).then(res => {
                this.isLoading = false
                if (res.download_url) {
                  this.downloadUrl = res.download_url
                  this.openModalSuccess()
                  setTimeout(() => {
                    eventHub.$emit('successModal:download')
                  }, 400)
                }

                this.fetchAccount()
              })
            } catch (err) {
              console.log(err)
            }
          } else {
            this.openModalPayment()
            this.isLoading = false
          }
        }
      })
    },
    openModalPayment() {
      eventHub.$emit('openModal:payment')
    },
    closeModalPayment() {
      this.paymentModal = false
    },
    openModalSuccess() {
      eventHub.$emit('openModal:success')
    },
    closeModalSuccess() {
      this.successModal = false
    },
  },
}
</script>

<style lang="scss">
</style>
