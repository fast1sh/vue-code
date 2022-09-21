<template>
  <header
    class="header"
    :class="{ 'header--light' : template === 'light' }"
  >
    <div class="header__container">
      <div class="logo header-logo">
        <b-link
          :to="{name:'index'}"
          class="logo__img"
        >
          <img
            src="../../../assets/images/logo.svg"
            alt="#"
          >
          <img
            src="../../../assets/images/logo-md.svg"
            alt="#"
          >
        </b-link>
        <p class="logo__text">
          Коллективный разум потребителя
        </p>
      </div>
      <div class="header__right">
        <nav
          class="header-nav"
          :class="{ 'is-active': isNavActive }"
        >
          <div class="header-nav__list">
            <b-link
              v-if="!isLoggedIn"
              :to="{name:'subscription'}"
              class="header-nav__item"
            >
              Подписка
            </b-link>
            <b-link
              :to="{name:'contacts'}"
              class="header-nav__item"
            >
              Контакты
            </b-link>
            <a
              href="#"
              class="header-nav__item"
              @click="openModalCall"
            >
              Заказать звонок
            </a>
            <b-link
              v-if="!isLoggedIn"
              :to="{name:'login'}"
              class="header-nav__item"
            >
              Войти
            </b-link>
            <b-dropdown
              v-else
              variant="flat-dark"
              class="header-nav__item header-nav__dropdown"
              right
            >
              <template #button-content>
                <div class="header-nav__dropdown-avatar">
                  <img
                    src="../../../assets/images/avatar.svg"
                    alt="#"
                  >
                  <div
                    v-if="account.subscription_ends_at"
                    class="header-nav__dropdown-pro"
                  >
                    <img
                      src="../../../assets/images/pro.svg"
                      alt="#"
                    >
                  </div>
                </div>
              </template>
              <b-link
                :to="{name:'account'}"
                class="dropdown-item icon icon-account"
              >
                Мой аккаунт
              </b-link>
              <b-link
                :to="{name:'account', params: { tab: 1 }}"
                class="dropdown-item icon icon-document"
              >
                Сгенерированные документы
              </b-link>
              <b-link
                :to="{name:'subscription'}"
                class="dropdown-item icon icon-subscription"
              >
                Подписка
              </b-link>
              <div
                class="dropdown-item dropdown-item--logout icon icon-logout"
                @click="logOut"
              >
                Выйти
              </div>
            </b-dropdown>
          </div>
        </nav>
        <b-link
          v-if="!isLoggedIn"
          :to="{name:'registration'}"
          class="btn header__btn"
        >
          Создать аккаунт
        </b-link>
        <div
          class="header__burger"
          @click="toggleNav"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4 6H20"
              stroke="#373737"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M4 12H20"
              stroke="#373737"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M4 18H16"
              stroke="#373737"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </div>
    </div>
  </header>
</template>

<script>

import { mapActions, mapGetters } from 'vuex'
import {
  BLink, BDropdown, BDropdownDivider, BDropdownItem,
} from 'bootstrap-vue'
import { eventHub } from '@/auth/utils'

export default {
  name: 'HeaderBlock',
  components: {
    BLink,
    BDropdown,
    BDropdownDivider,
    BDropdownItem,
  },
  filters: {
    formatEmail(email) {
      if (email) {
        return email.substring(0, email.indexOf('@'))
      }

      return ''
    },
  },
  props: {
    template: {
      type: String,
      required: false,
      default: 'full',
    },
  },
  data() {
    return {
      isNavActive: false,
    }
  },
  computed: {
    ...mapGetters('account', ['isLoggedIn', 'account']),
  },
  methods: {
    ...mapActions('account', ['logOut']),
    toggleNav() {
      this.isNavActive = !this.isNavActive
    },
    openModalCall() {
      eventHub.$emit('openModal:call')
    },
  },
}
</script>
