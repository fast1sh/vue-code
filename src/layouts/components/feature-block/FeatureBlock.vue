<template>
  <section class="section feature">
    <div class="container">
      <div class="feature__inner">
        <h2 class="feature__title">
          В чем особенность сервиса «ОЗПП Триумф»?
        </h2>
        <p class="feature__text">
          Сервис обучен на примерах наших клиентов и постоянно пополняется новыми знаниями. Таким образом мы предоставляем вам не только лучшую из доступных юридическую защиту, но и всегда самые актуальные практики защиты прав автовладельцев.
        </p>
        <div class="feature__wrapper">
          <b-link
            :to="{name: 'registration'}"
            class="btn"
            v-if="!isLoggedIn"
          >
            Создать аккаунт
          </b-link>
          <b-link
            :to="{name: 'subscription'}"
            class="btn btn--outline"
          >
            Смотреть тарифы
          </b-link>
        </div>

        <div class="feature__img">
          <img
            src="../../../assets/images/feature.png"
            alt="#"
          >
        </div>
      </div>
    </div>
  </section>
</template>

<script>

import { BLink } from 'bootstrap-vue'
import { mapGetters } from 'vuex'

export default {
  components: {
    BLink,
  },
  computed: {
    ...mapGetters('account', ['isLoggedIn']),
  },
}
</script>
