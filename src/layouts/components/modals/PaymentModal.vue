<template>
  <modal-block
    v-show="show"
    class="modal--payment"
    @close="close"
  >
    <div
      slot="body"
    >
      <div class="modal-payment__wrapper">
        <div class="payment-banner">
          <p class="payment-banner__title">
            PRO-подписка
          </p>
          <ul class="payment-banner__list">
            <li>
              Бесплатная генерация документа
            </li>
            <li>
              Доступ к платным материалам
            </li>
            <li>
              Безлимитная генерирация документов
            </li>
          </ul>
          <div class="payment-banner__wrapper">
            <div class="hero-banner__wrapper">
              <p class="hero-banner__price">
                3 900 ₽
              </p>
              <p class="hero-banner__price-old">
                5 490 ₽
              </p>
            </div>
            <a
              :href="subscriptionUrl || '#'"
              class="btn"
              target="_blank"
            >
              Купить подписку
            </a>
          </div>
        </div>
        <div class="buy-banner">
          <p class="buy-banner__title">
            Оплатить документ
          </p>
          <p class="buy-banner__text">
            Единоразовая оплата документа
          </p>
          <a
            :href="paymentUrl"
            class="btn btn--gray"
            target="_blank"
          >
            Оплатить 190 ₽
          </a>
        </div>
      </div>
    </div>
  </modal-block>
</template>

<script>

import { getToken } from '@/auth/utils'
import API from '@/api/api'

export default {
  name: 'PaymentModal',
  props: {
    show: {
      type: Boolean,
      required: true,
      default: false,
    },
  },

  data() {
    return {
      paymentUrl: '#',
      subscriptionUrl: '#',
    }
  },

  mounted() {
    const token = getToken()
    const myHeaders = new Headers()
    myHeaders.append('Authorization', `Bearer ${token}`)

    try {
      const formData = new FormData()
      formData.append('order_type', 'subscription')

      const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: formData,
        redirect: 'follow',
      }

      fetch(`${API}/v1/subscription/payment-url`, requestOptions)
        .then(response => response.json())
        .then(res => {
          this.subscriptionUrl = res.payment_url
        })
    } catch (err) {
      console.log(err)
    }

    try {
      const formData = new FormData()
      formData.append('order_type', 'document_generation')

      const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: formData,
        redirect: 'follow',
      }

      fetch(`${API}/v1/subscription/payment-url`, requestOptions)
        .then(response => response.json())
        .then(res => {
          this.paymentUrl = res.payment_url
        })
    } catch (err) {
      console.log(err)
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
