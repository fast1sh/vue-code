<template>
  <section class="section hero">
    <div class="container">
      <div class="hero__inner">
        <h1 class="hero__title">
          Всё о защите прав покупателей автомобилей
        </h1>
        <div class="hero__wrapper">
          <div
            v-if="mainArticles && mainArticles.data"
            class="hero-links"
          >
            <b-link
              v-for="article in mainArticlesComputed"
              :to="{name:'article',params: { article: article.ID }}"
              class="hero-link"
              :class="[article.class, { 'hero-link--big' : article.isBig }]"
              :key="article.ID"
            >
              <h3 class="hero-link__title">
                {{ article.post_title }}
              </h3>
              <div class="hero-link__arrow">
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.4435 7.22182L14.1506 7.92892C14.5411 7.5384 14.5411 6.90524 14.1506 6.51472L13.4435 7.22182ZM6.51457 12.7365C6.12405 13.1271 6.12405 13.7602 6.51457 14.1507C6.9051 14.5413 7.53826 14.5413 7.92879 14.1507L6.51457 12.7365ZM7.92894 0.292901C7.53842 -0.0976275 6.90526 -0.0976346 6.51473 0.292885C6.1242 0.683405 6.12419 1.31657 6.51471 1.7071L7.92894 0.292901ZM0.999999 6.22183C0.447715 6.22183 -3.57628e-07 6.66954 0 7.22183C3.57628e-07 7.77411 0.447716 8.22183 1 8.22183L0.999999 6.22183ZM12.7364 6.51471L6.51457 12.7365L7.92879 14.1507L14.1506 7.92892L12.7364 6.51471ZM6.51471 1.7071L12.7364 7.92892L14.1506 6.51472L7.92894 0.292901L6.51471 1.7071ZM13.4435 6.22182L0.999999 6.22183L1 8.22183L13.4435 8.22182L13.4435 6.22182Z"
                    fill="#373737"
                  />
                </svg>
              </div>
              <div class="hero-link__img">
                <img
                  :src="require(`@/assets/images/${article.img}`)"
                  alt="#"
                >
              </div>
            </b-link>
          </div>
          <div class="hero-right">
            <div class="hero-banner" v-if="!account.subscription_ends_at">
              <div class="hero-banner__img">
                <img
                  src="../../../assets/images/hero-banner-img.svg"
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
            <a
              href="javascript:jivo_api.open()"
              class="btn btn--outline hero-right__btn"
            >
              Задать вопрос
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import {
  BLink,
} from 'bootstrap-vue'
import { mapActions, mapGetters } from 'vuex'

export default {
  components: {
    BLink,
  },
  computed: {
    ...mapGetters('articles', ['mainArticles']),
    ...mapGetters('account', ['isLoggedIn', 'account']),
    mainArticlesComputed() {
      if (this.mainArticles) {
        return this.mainArticles.data.map((item, idx) => ({
          ...item, img: this.articlesData[idx].img, class: this.articlesData[idx].class, isBig: this.articlesData[idx].isBig,
        }))
      }

      return {}
    },
  },
  mounted() {
    this.fetchMainArticles()
  },
  methods: {
    ...mapActions('articles', ['fetchMainArticles']),
  },
  data() {
    return {
      articlesData: [
        {
          img: 'hero-link-1.png',
          class: 'hero-link--buy',
          isBig: true,
        },
        {
          img: 'hero-link-2.png',
          class: 'hero-link--sell',
          isBig: false,
        },
        {
          img: 'hero-link-3.png',
          class: 'hero-link--during',
          isBig: false,
        },
        {
          img: 'hero-link-4.png',
          class: 'hero-link--after',
          isBig: true,
        },
        {
          img: 'hero-link-5.png',
          class: 'hero-link--insurance',
          isBig: true,
        },
        {
          img: 'hero-link-6.png',
          class: 'hero-link--info',
          isBig: false,
        },
      ],
    }
  },
}
</script>
