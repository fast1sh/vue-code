import Vue from 'vue'
import Vuex from 'vuex'

// Modules
import app from './app'
import appConfig from './app-config'
import verticalMenu from './vertical-menu'
import account from './account'
import article from './article'
import document from './document'
import articles from './articles'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    app,
    appConfig,
    verticalMenu,
    account,
    article,
    document,
    articles,
  },
  strict: process.env.DEV,
})
