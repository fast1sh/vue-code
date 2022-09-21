import API from '@/api/api'
import { getToken } from '@/auth/utils'

const getDefaultState = () => ({
  document: {},
})

export default {
  namespaced: true,
  state: {
    document: {},
    documentCreated: false,
  },
  getters: {
    document: state => state.document,
    documentCreated: state => state.documentCreated,
  },
  mutations: {
    SET_DOCUMENT(state, val) {
      state.document = val
    },
    SET_DOCUMENT_CREATED(state, val) {
      state.documentCreated = val
    },
    RESET_STATE(state) {
      Object.assign(state, getDefaultState())
    },
  },
  actions: {
    async fetchDocumentById({ commit }, id) {
      try {
        const requestOptions = {
          method: 'GET',
          redirect: 'follow',
        }

        await fetch(`${API}/v1/document/${id}`, requestOptions)
          .then(response => response.json())
          .then(res => {
            commit('SET_DOCUMENT', res)
          })
      } catch (err) {
        console.log(err)
      }
    },
    async createDocument({ commit }, formData) {
      try {
        const token = getToken()
        const myHeaders = new Headers()
        myHeaders.append('Authorization', `Bearer ${token}`)

        const requestOptions = {
          method: 'POST',
          headers: myHeaders,
          body: formData,
          redirect: 'follow',
        }

        return fetch(`${API}/v1/document/form`, requestOptions)
          .then(response => response.json())
          .then(res => res)
      } catch (err) {
        console.log(err)
      }
    },
    resetDocumentState({ commit }) {
      commit('RESET_STATE')
    },
  },
}
