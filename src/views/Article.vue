<template>
  <div :key="$route.fullPath">
    <header-block />
    <div
      v-if="articlePost"
      class="article"
    >
      <div class="container-big">
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
            <b-link
              :to="{name: 'index'}"
            >
              База знаний
            </b-link>
          </li>
          <li>
            <a href="#">
              {{ articlePost.post_title }}
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
        <div class="article-inner">
          <div class="article-nav-wrapper">
            <div
              v-if="articlePost.sub_articles.length"
              class="article-nav"
            >
              <b-link
                v-for="(subArticle, idx) in articlePost.sub_articles"
                :key="subArticle.ID"
                :to="{name:'article',params: { article: subArticle.ID }}"
                class="article-nav__item"
                :class="{ 'is-active' : idx === 0, 'article-nav__item--tablet' : idx === 2, 'article-nav__item--desktop' : idx > 2 }"
              >
                {{ subArticle.post_title }}
              </b-link>
              <a
                href="#"
                class="article-nav__item article-nav__item--other"
              >
                Другие категории
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
                    d="M11.2929 4.29289C10.9024 4.68342 10.9024 5.31658 11.2929 5.70711L16.5858 11H5C4.44772 11 4 11.4477 4 12C4 12.5523 4.44772 13 5 13H16.5858L11.2929 18.2929C10.9024 18.6834 10.9024 19.3166 11.2929 19.7071C11.6834 20.0976 12.3166 20.0976 12.7071 19.7071L19.7064 12.7078C19.7088 12.7054 19.7112 12.703 19.7136 12.7005C19.8901 12.5208 19.9992 12.2746 20 12.003C20 12.002 20 12.001 20 12C20 11.999 20 11.998 20 11.997C19.9996 11.8625 19.9727 11.7343 19.9241 11.6172C19.8764 11.502 19.8063 11.3938 19.7136 11.2995C19.7112 11.297 19.7089 11.2947 19.7065 11.2923M19.7065 11.2923L12.7071 4.29289C12.3166 3.90237 11.6834 3.90237 11.2929 4.29289"
                    fill="#373737"
                  />
                  <mask
                    id="mask0_1354_96748"
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
                      d="M11.2929 4.29289C10.9024 4.68342 10.9024 5.31658 11.2929 5.70711L16.5858 11H5C4.44772 11 4 11.4477 4 12C4 12.5523 4.44772 13 5 13H16.5858L11.2929 18.2929C10.9024 18.6834 10.9024 19.3166 11.2929 19.7071C11.6834 20.0976 12.3166 20.0976 12.7071 19.7071L19.7064 12.7078C19.7088 12.7054 19.7112 12.703 19.7136 12.7005C19.8901 12.5208 19.9992 12.2746 20 12.003C20 12.002 20 12.001 20 12C20 11.999 20 11.998 20 11.997C19.9996 11.8625 19.9727 11.7343 19.9241 11.6172C19.8764 11.502 19.8063 11.3938 19.7136 11.2995C19.7112 11.297 19.7089 11.2947 19.7065 11.2923M19.7065 11.2923L12.7071 4.29289C12.3166 3.90237 11.6834 3.90237 11.2929 4.29289"
                      fill="white"
                    />
                  </mask>
                  <g mask="url(#mask0_1354_96748)">
                    <rect
                      width="24"
                      height="24"
                      fill="#373737"
                    />
                  </g>
                </svg>
              </a>
            </div>
          </div>
          <div class="article-wrapper">
            <div class="article-main">
              <b-link
                class="link-back article-main__back"
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
              <h1 class="article-title">
                {{ articlePost.post_title }}
              </h1>
              <div
                class="article-main__content"
                v-html="articlePost.post_content"
              />
              <div class="hero-banner hero-banner--article">
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
              <b-link
                v-for="(document) in articlePost.documents"
                :key="document.ID"
                class="article-badge article-main__badge"
                :to="{name:'document',params: { document: document.ID }}"
              >
                <div
                  class="article-badge__pro"
                >
                  <img
                    src="../assets/images/pro.svg"
                    alt="#"
                  >
                </div>
                <div class="article-badge__icon">
                  <img
                    src="../assets/images/document.svg"
                    alt="#"
                  >
                </div>
                <div class="article-badge__text-wrapper">
                  <span class="article-badge__text">
                    {{ document.post_title }}
                  </span>
                </div>
              </b-link>
              <div
                v-if="articlePost.sub_articles.length"
                class="article-next"
              >
                <p class="article-next__text">
                  Далее
                </p>
                <div class="article-next__items">
                  <b-link
                    v-for="(subArticle, idx) in articlePost.sub_articles"
                    :key="subArticle.ID"
                    :to="{name:'article',params: { article: subArticle.ID }}"
                    class="article-next__item"
                    :class="{ 'article-next__item--pro' : subArticle.is_pro }"
                  >
                    <div
                      v-if="subArticle.is_pro"
                      class="article-next__pro"
                    >
                      <img
                        src="../assets/images/pro.svg"
                        alt="#"
                      >
                    </div>
                    <span>
                      {{ subArticle.post_title }}
                    </span>
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
                        d="M11.2929 4.29289C10.9024 4.68342 10.9024 5.31658 11.2929 5.70711L16.5858 11H5C4.44772 11 4 11.4477 4 12C4 12.5523 4.44772 13 5 13H16.5858L11.2929 18.2929C10.9024 18.6834 10.9024 19.3166 11.2929 19.7071C11.6834 20.0976 12.3166 20.0976 12.7071 19.7071L19.7064 12.7078C19.7088 12.7054 19.7112 12.703 19.7136 12.7005C19.8901 12.5208 19.9992 12.2746 20 12.003C20 12.002 20 12.001 20 12C20 11.999 20 11.998 20 11.997C19.9996 11.8625 19.9727 11.7343 19.9241 11.6172C19.8764 11.502 19.8063 11.3938 19.7136 11.2995C19.7112 11.297 19.7089 11.2947 19.7065 11.2923M19.7065 11.2923L12.7071 4.29289C12.3166 3.90237 11.6834 3.90237 11.2929 4.29289"
                        fill="#373737"
                      />
                      <mask
                        id="mask0_1790_91097"
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
                          d="M11.2929 4.29289C10.9024 4.68342 10.9024 5.31658 11.2929 5.70711L16.5858 11H5C4.44772 11 4 11.4477 4 12C4 12.5523 4.44772 13 5 13H16.5858L11.2929 18.2929C10.9024 18.6834 10.9024 19.3166 11.2929 19.7071C11.6834 20.0976 12.3166 20.0976 12.7071 19.7071L19.7064 12.7078C19.7088 12.7054 19.7112 12.703 19.7136 12.7005C19.8901 12.5208 19.9992 12.2746 20 12.003C20 12.002 20 12.001 20 12C20 11.999 20 11.998 20 11.997C19.9996 11.8625 19.9727 11.7343 19.9241 11.6172C19.8764 11.502 19.8063 11.3938 19.7136 11.2995C19.7112 11.297 19.7089 11.2947 19.7065 11.2923M19.7065 11.2923L12.7071 4.29289C12.3166 3.90237 11.6834 3.90237 11.2929 4.29289"
                          fill="white"
                        />
                      </mask>
                      <g mask="url(#mask0_1790_91097)">
                        <rect
                          width="24"
                          height="24"
                          fill="#373737"
                        />
                      </g>
                    </svg>
                  </b-link>
                </div>
              </div>
            </div>
            <div class="article-right">
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
              <div
                v-if="articlePost.documents.length"
                class="article-documents"
              >
                <p class="article-documents__text">
                  Документы из статьи
                </p>
                <b-link
                  v-for="(document) in articlePost.documents"
                  :key="document.ID"
                  class="article-badge"
                  :to="{name:'document',params: { document: document.ID }}"
                >
                  <div
                    class="article-badge__pro"
                  >
                    <img
                      src="../assets/images/pro.svg"
                      alt="#"
                    >
                  </div>
                  <div class="article-badge__icon">
                    <img
                      src="../assets/images/document.svg"
                      alt="#"
                    >
                  </div>
                  <div class="article-badge__text-wrapper">
                    <span class="article-badge__text">
                      {{ document.post_title }}
                    </span>
                  </div>
                </b-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <footer-block />
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import { BLink } from 'bootstrap-vue'
import HeaderBlock from '../layouts/components/header-block/HeaderBlock.vue'
import FooterBlock from '../layouts/components/footer-block/FooterBlock.vue'

export default {
  components: {
    HeaderBlock,
    FooterBlock,
    BLink,
  },
  data() {
    return {
    }
  },
  computed: {
    ...mapGetters('article', ['articlePost']),
    articleId() {
      return this.$route.params.article
    },
  },
  watch: {
    '$route.params.article': {
      handler() {
        this.resetArticleState()
        this.fetchArticleById(this.articleId)
      },
      deep: true,
      immediate: true,
    },
  },
  mounted() {
    this.fetchArticleById(this.articleId)
  },
  methods: {
    ...mapActions('article', ['fetchArticleById', 'resetArticleState']),
  },
}
</script>

<style lang="scss">
</style>
