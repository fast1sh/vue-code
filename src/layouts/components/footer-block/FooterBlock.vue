<template>
  <footer class="footer">
    <div class="footer-top">
      <div class="container">
        <div class="footer-top__left">
          <b-link
            :to="{name:'index'}"
            class="footer-logo footer-logo--desktop"
          >
            <img
              src="../../../assets/images/footer-logo.svg"
              alt="#"
            >
          </b-link>
          <nav
            v-if="mainArticles && mainArticles.data"
            class="footer-nav"
          >
            <div class="footer-nav__col">
              <b-link
                v-for="(article) in firstColumnArticles"
                :key="article.ID"
                :to="{name:'article',params: { article: article.ID }}"
                class="footer-nav__item"
              >
                {{ article.post_title }}
              </b-link>
            </div>
            <div class="footer-nav__col">
              <b-link
                v-for="(article) in secondColumnArticles"
                :key="article.ID"
                :to="{name:'article',params: { article: article.ID }}"
                class="footer-nav__item"
              >
                {{ article.post_title }}
              </b-link>
            </div>
          </nav>
          <div class="footer-top__text">
            Копирование и дальнейшее распространение любых текстов с сайта potrebzashita.pro без разрешения авторов или администрации сайта, а также заимствование фрагментов текстов будет рассматриваться как нарушение авторских прав. Помните об ответственности, предусмотренной ст. 146, п. 3 УК РФ.
          </div>
        </div>
        <div class="footer-top__right">
          <b-link
            :to="{name:'index'}"
            class="footer-logo footer-logo--mobile"
          >
            <img
              src="../../../assets/images/footer-logo.svg"
              alt="#"
            >
          </b-link>
          <a
            href="tel:+74952910150"
            class="footer-contact"
          >
            +7 495 291-01-50
          </a>
          <a
            href="mailto:6458027@gmail.com"
            class="footer-contact footer-email"
          >
            6458027@gmail.com
          </a>
          <div class="footer-top__text-us">
            Не смогли найти подходящий Вашей ситуации случай? Напишите нам!
          </div>
          <a
            href="javascript:jivo_api.open()"
            class="btn btn--chat footer-top__btn"
          >
            <img
              src="../../../assets/images/chat.svg"
              alt="#"
            >

            <span>
              Написать в чат
            </span>
          </a>

          <div class="footer-socials">
            <a
              href="https://vk.com/public189059719"
              target="_blank"
              class="footer-social"
            >
              <svg
                width="33"
                height="32"
                viewBox="0 0 33 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M29.5629 9.33312H25.1756C24.9965 9.33312 24.8208 9.38167 24.6671 9.4736C24.5135 9.56554 24.3876 9.69741 24.3029 9.8552C24.3029 9.8552 22.5531 13.0778 21.991 14.1632C20.4789 17.0831 19.4998 16.1665 19.4998 14.8113V10.1387C19.4998 9.74822 19.3446 9.37376 19.0686 9.09766C18.7925 8.82156 18.418 8.66645 18.0275 8.66645H14.7289C14.2796 8.63305 13.8293 8.71505 13.4207 8.90466C13.0121 9.09426 12.6587 9.38518 12.3942 9.74979C12.3942 9.74979 14.0692 9.47896 14.0692 11.7359C14.0692 12.2955 14.098 13.9055 14.1243 15.2559C14.1293 15.4549 14.073 15.6506 13.9632 15.8166C13.8534 15.9826 13.6953 16.111 13.5102 16.1843C13.3252 16.2576 13.1221 16.2724 12.9284 16.2266C12.7346 16.1808 12.5596 16.0767 12.427 15.9283C11.0768 14.0504 9.95836 12.0163 9.09604 9.87019C9.02198 9.70964 8.90343 9.57371 8.75444 9.47852C8.60546 9.38333 8.43229 9.33286 8.25549 9.33312C7.30402 9.33312 5.40005 9.33312 4.26934 9.33312C4.1597 9.33237 4.05151 9.35826 3.95408 9.40855C3.85664 9.45884 3.77287 9.53203 3.70997 9.62184C3.64706 9.71164 3.60689 9.81538 3.59292 9.92414C3.57895 10.0329 3.59159 10.1434 3.62976 10.2462C4.84014 13.5663 10.0541 23.9998 16.0053 23.9998H18.5102C18.7726 23.9998 19.0243 23.8955 19.2099 23.7099C19.3955 23.5244 19.4998 23.2727 19.4998 23.0102V21.4977C19.4998 21.3079 19.5553 21.1223 19.6595 20.9638C19.7636 20.8052 19.9119 20.6805 20.0861 20.6052C20.2602 20.5299 20.4526 20.5071 20.6395 20.5398C20.8264 20.5725 20.9997 20.6591 21.138 20.789L24.1361 23.6059C24.4054 23.8589 24.761 23.9998 25.1304 23.9998H29.0675C30.9664 23.9998 30.9664 22.6821 29.9311 21.6625C29.2025 20.945 26.5733 18.1737 26.5733 18.1737C26.3482 17.9404 26.2139 17.6344 26.1947 17.3107C26.1756 16.9871 26.2728 16.6673 26.4688 16.4091C27.3187 15.2908 28.7087 13.4601 29.2982 12.6759C30.1039 11.604 31.5623 9.33312 29.5629 9.33312Z"
                  fill="#373737"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <div class="container">
        <div class="footer-bottom__left">
          <p class="footer-bottom__text">
            © ОЗПП Триумф 2022
          </p>
          <a
            href="#"
            class="footer-bottom__text"
          >
            Правовая информация
          </a>
          <a
            href="#"
            class="footer-bottom__text"
          >
            Договор публичной оферты
          </a>
        </div>
        <div class="footer-bottom__right">
          <a
            href="#"
            target="_blank"
            class="footer-copyright"
          >
            <img
              src="../../../assets/images/logo.svg"
              alt="#"
            >
          </a>
        </div>
      </div>
    </div>
  </footer>

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
    firstColumnArticles() {
      if (this.mainArticles && this.mainArticles.data) {
        return this.mainArticles.data.filter((item, idx) => idx < 3)
      }
      return []
    },
    secondColumnArticles() {
      if (this.mainArticles && this.mainArticles.data) {
        return this.mainArticles.data.filter((item, idx) => idx >= 3)
      }
      return []
    },
  },
  mounted() {
    this.fetchMainArticles()
  },
  methods: {
    ...mapActions('articles', ['fetchMainArticles']),
  },
}
</script>
