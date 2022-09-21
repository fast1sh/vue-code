import API from '@/api/api'
import { getToken } from '@/auth/utils'

export default {
  namespaced: true,
  state: {
    mainArticles: {},
  },
  getters: {
    mainArticles: state => state.mainArticles,
  },
  mutations: {
    SET_MAIN_ARTICLES(state, val) {
      state.mainArticles = val
    },
  },
  actions: {
    async fetchMainArticles({ commit }) {
      try {
        const requestOptions = {
          method: 'GET',
          redirect: 'follow',
        }

        await fetch(`${API}/v1/articles/?without_parents=1&paged=1&posts_per_page=10`, requestOptions)
          .then(response => response.json())
          .then(res => {
            console.log(res)
            commit('SET_MAIN_ARTICLES', res)
          })
      } catch (err) {
        console.log(err)
      }
    },
  },
}
