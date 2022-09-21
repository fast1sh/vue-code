import API from '@/api/api'
import { getToken } from '@/auth/utils'

const getDefaultState = () => ({
  articlePost: {},
})

export default {
  namespaced: true,
  state: {
    articlePost: {},
  },
  getters: {
    articlePost: state => state.articlePost,
  },
  mutations: {
    SET_ARTICLE(state, val) {
      state.articlePost = val
    },
    RESET_STATE(state) {
      Object.assign(state, getDefaultState())
    },
  },
  actions: {
    async fetchArticleById({ commit }, id) {
      try {
        const token = getToken()
        const myHeaders = new Headers()
        myHeaders.append('Authorization', `Bearer ${token}`)

        const requestOptions = {
          method: 'GET',
          headers: myHeaders,
          redirect: 'follow',
        }

        await fetch(`${API}/v1/articles/${id}`, requestOptions)
          .then(response => response.json())
          .then(res => {
            commit('SET_ARTICLE', res)
          })
      } catch (err) {
        console.log(err)
      }
    },
    resetArticleState({ commit }) {
      commit('RESET_STATE')
    },
  },
}
