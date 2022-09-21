import { getToken, unsetToken } from '@/auth/utils'
import API from '@/api/api'
import router from '../../router'

const getDefaultState = () => ({
  id: null,
  sentResetMail: false,
  setUpdateEmailMail: false,
  token: null,
  account: {},
  isLoggedIn: false,
  car: {},
})

export default {
  namespaced: true,
  state: {
    id: null,
    sentResetMail: false,
    setUpdateEmailMail: false,
    token: null,
    account: {},
    isLoggedIn: false,
    car: {},
    submissions: {},
  },
  getters: {
    id: state => state.id,
    sentResetMail: state => state.sentResetMail,
    setUpdateEmailMail: state => state.setUpdateEmailMail,
    token: state => state.token,
    account: state => state.account,
    isLoggedIn: state => state.isLoggedIn,
    car: state => state.car,
    submissions: state => state.submissions,
  },
  mutations: {
    UPDATE_ID(state, val) {
      state.id = val
    },
    UPDATE_RESET_SENT(state, val) {
      state.sentResetMail = val
    },
    UPDATE_TOKEN(state, val) {
      state.token = val
    },
    SET_ACCOUNT(state, val) {
      state.account = val
    },
    SET_CAR(state, val) {
      state.car = val
    },
    SET_IS_LOGGED_IN(state, val) {
      state.isLoggedIn = val
    },
    SET_SUBMISSIONS(state, val) {
      state.submissions = val
    },
    RESET_STATE(state) {
      Object.assign(state, getDefaultState())
    },
  },
  actions: {
    setResetSent({ commit }, payload) {
      commit('UPDATE_RESET_SENT', payload.val)
    },
    setUserId({ commit }, payload) {
      commit('UPDATE_ID', payload.val)
    },
    setUserToken({ commit }, payload) {
      commit('UPDATE_TOKEN', payload.val)
    },
    setIsLoggedIn({ commit }, payload) {
      commit('SET_IS_LOGGED_IN', payload.val)
    },
    logOut({ commit }) {
      commit('RESET_STATE')
      unsetToken()
      router.push('/')
    },
    async fetchAccount({ commit }) {
      try {
        const token = getToken()
        const myHeaders = new Headers()
        myHeaders.append('Authorization', `Bearer ${token}`)

        const requestOptions = {
          method: 'GET',
          headers: myHeaders,
          redirect: 'follow',
        }

        await fetch(`${API}/v1/user/update-info`, requestOptions)
          .then(response => response.json())
          .then(res => {
            if (res.email) {
              commit('SET_ACCOUNT', res)
              commit('SET_IS_LOGGED_IN', true)
            }
          })
      } catch (err) {
        console.log(err)
      }
    },
    async updateAccount({ commit }, { full_name, phone, email }) {
      try {
        const token = getToken()
        const myHeaders = new Headers()
        myHeaders.append('Authorization', `Bearer ${token}`)

        const formData = new FormData()
        formData.append('full_name', full_name)
        formData.append('phone', phone)
        formData.append('email', email)

        const requestOptions = {
          method: 'POST',
          headers: myHeaders,
          body: formData,
          redirect: 'follow',
        }

        return await fetch(`${API}/v1/user/update-info`, requestOptions)
          .then(response => response.json())
          .then(res => res)
      } catch (err) {
        console.log(err)
      }
    },
    async fetchCar({ commit }) {
      try {
        const token = getToken()
        const myHeaders = new Headers()
        myHeaders.append('Authorization', `Bearer ${token}`)

        const requestOptions = {
          method: 'GET',
          headers: myHeaders,
          redirect: 'follow',
        }

        await fetch(`${API}/v1/auto`, requestOptions)
          .then(response => response.json())
          .then(res => {
            if (res.car_brand) {
              commit('SET_CAR', res)
            }
          })
      } catch (err) {
        console.log(err)
      }
    },
    async updateCar({ commit }, carData) {
      try {
        const token = getToken()
        const myHeaders = new Headers()
        myHeaders.append('Authorization', `Bearer ${token}`)

        const formData = new FormData()
        formData.append('car_brand', carData.car_brand.data)
        formData.append('car_model', carData.car_model.data)
        formData.append('manufacture_year', carData.manufacture_year.data)
        formData.append('vin', carData.vin.data)

        const requestOptions = {
          method: 'POST',
          headers: myHeaders,
          body: formData,
          redirect: 'follow',
        }

        return await fetch(`${API}/v1/auto/create`, requestOptions)
          .then(response => response.json())
          .then(res => res)
      } catch (err) {
        console.log(err)
      }
    },
    async fetchSubmissions({ commit }) {
      try {
        const token = getToken()
        const myHeaders = new Headers()
        myHeaders.append('Authorization', `Bearer ${token}`)

        const requestOptions = {
          method: 'GET',
          headers: myHeaders,
          redirect: 'follow',
        }

        await fetch(`${API}/v1/submissions?page=1`, requestOptions)
          .then(response => response.json())
          .then(res => {
            if (res.length) {
              commit('SET_SUBMISSIONS', res)
            }
          })
      } catch (err) {
        console.log(err)
      }
    },
  },
}
