<template>
  <div>
    <header-block />
    <div class="subscription">
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
              Подписка
            </a>
          </li>
        </ul>
        <div class="subscription-inner">
          <h1>Подписка</h1>
          <list-block
            v-if="account.subscription_ends_at"
            :list="lists[2]"
            class="list-block--active"
          />
          <div class="subscription-wrapper">
            <div class="subscription-left">
              <list-block :list="lists[0]" />
              <list-block :list="lists[1]" />
            </div>
            <div
              v-if="!account.subscription_ends_at"
              class="hero-banner hero-banner--subscription"
            >
              <div class="hero-banner__img">
                <img
                  :src="bannerImg"
                  alt="#"
                >
                <span>— подписка</span>
              </div>
              <div class="hero-banner__wrapper">
                <p class="hero-banner__price">
                  3 900 ₽
                </p>
                <p class="hero-banner__price-old">
                  5 490 ₽
                </p>
              </div>
              <a
                v-if="isLoggedIn"
                :href="subscriptionUrl"
                class="btn btn--light"
                target="_blank"
              >
                Купить
              </a>
              <a
                v-else
                href="#"
                class="btn btn--light"
                @click="openModalLogin"
              >
                Купить
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <footer-block />
  </div>
</template>

<script>
import ListBlock from '@/layouts/components/list-block/ListBlock.vue'
import { BLink } from 'bootstrap-vue'
import { eventHub, getToken } from '@/auth/utils'
import API from '@/api/api'
import { mapGetters } from 'vuex'
import bannerImg from '../assets/images/hero-banner-img.svg'
import HeaderBlock from '../layouts/components/header-block/HeaderBlock.vue'
import FooterBlock from '../layouts/components/footer-block/FooterBlock.vue'

export default {
  components: {
    FooterBlock,
    HeaderBlock,
    ListBlock,
    BLink,
  },
  computed: {
    ...mapGetters('account', ['isLoggedIn', 'account']),
  },
  data() {
    return {
      subscriptionUrl: '#',
      bannerImg,
      lists: [
        {
          id: 0,
          title: 'Приобретая подписку ПРО, вы получаете:',
          listItems: [
            'Доступ к базовым текстовым материалам',
            'Доступ к платным текстовым материалам',
            'Доступ к шаблонам юридических документов',
            'Генерация персонализированных документов <span>без ограничений</span>',
            'Консультация по индивидуальным вопросам',
          ],
        },
        {
          id: 1,
          title: 'С бесплатным пакетом вам доступны:',
          listItems: [
            'Доступ к базовым текстовым материалам',
            'Генерация персонализированных документов - <span>190 ₽ за документ</span>',
          ],
        },
        {
          id: 2,
          listItems: [
            'Подписка активна',
          ],
        },
      ],
    }
  },
  mounted() {
    this.fetchPaymentUrl()
  },
  updated() {
    this.fetchPaymentUrl()
  },
  methods: {
    openModalLogin() {
      eventHub.$emit('openModal:login')
    },
    fetchPaymentUrl() {
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
    },
  },
}
</script>

<style scoped>
</style>
