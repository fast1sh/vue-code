import useJwt from '@/auth/jwt/useJwt'
import Vue from 'vue'

const eventHub = new Vue()

export { eventHub }

/**
 * Return if user is logged in
 * This is completely up to you and how you want to store the token in your frontend application
 * e.g. If you are using cookies to store the application please update this function
 */
// eslint-disable-next-line arrow-body-style
export const isUserLoggedIn = () => {
  return localStorage.getItem('userData') && localStorage.getItem(useJwt.jwtConfig.storageTokenKeyName)
}

export const getUserData = () => JSON.parse(localStorage.getItem('userData'))

/**
 * This function is used for demo purpose route navigation
 * In real app you won't need this function because your app will navigate to same route for each users regardless of ability
 * Please note role field is just for showing purpose it's not used by anything in frontend
 * We are checking role just for ease
 * NOTE: If you have different pages to navigate based on user ability then this function can be useful. However, you need to update it.
 * @param {String} userRole Role of user
 */
export const getHomeRouteForLoggedInUser = userRole => {
  if (userRole === 'admin') return '/'
  if (userRole === 'client') return { name: 'access-control' }
  return { name: 'auth-login' }
}

export function getCookie(name, req = {}) {
  let cookie = null
  if (process.server) {
    cookie = (req.headers || {}).cookie || ''
  } else {
    cookie = document.cookie
  }

  const matches = cookie.match(new RegExp(
    `(?:^|; )${name.replace(/([.$?*|{}()[\]\\/+^])/g, '\\$1')}=([^;]*)`,
  ))
  return matches ? decodeURIComponent(matches[1]) : undefined
}

export function setCookie(name, value, options = {}) {
  if (process.server) {
    return false
  }

  if (!options.path) {
    // eslint-disable-next-line no-param-reassign
    options.path = '/'
  }

  let { expires } = options

  if (typeof expires === 'number' && expires) {
    const d = new Date()
    d.setTime(d.getTime() + expires * 1000)
    // eslint-disable-next-line no-multi-assign,no-param-reassign
    expires = options.expires = d
  }
  if (expires && expires.toUTCString) {
    // eslint-disable-next-line no-param-reassign
    options.expires = expires.toUTCString()
  }

  // eslint-disable-next-line no-param-reassign
  value = encodeURIComponent(value)

  let updatedCookie = `${name}=${value}`

  // eslint-disable-next-line no-restricted-syntax
  for (const propName in options) {
    if (Object.prototype.hasOwnProperty.call(options, propName)) {
      updatedCookie += `; ${propName}`
      const propValue = options[propName]
      if (propValue !== true) {
        updatedCookie += `=${propValue}`
      }
    }
  }

  document.cookie = updatedCookie
  return true
}

export function removeCookie(name) {
  setCookie(name, '', { expires: -999999 })
}

const TOKEN_NAME = 'access_token'
export const COOKIE_TOKEN_LIFETIME = (15 * 24 * 60 * 60) - 60

export const getToken = req => {
  const token = getCookie(TOKEN_NAME, req) || ''
  const hasStorage = typeof (localStorage) !== 'undefined' && localStorage.getItem && localStorage.setItem
  if (token && hasStorage) {
    localStorage.setItem(TOKEN_NAME, token)
  }
  return hasStorage ? localStorage.getItem(TOKEN_NAME) || '' : token
}

export const setToken = token => {
  if (process.server) {
    return
  }

  if (typeof (localStorage) !== 'undefined' && localStorage.setItem) {
    localStorage.setItem(TOKEN_NAME, token)
  }

  setCookie(TOKEN_NAME, token, { expires: COOKIE_TOKEN_LIFETIME })
}

export const unsetToken = () => {
  if (process.server) {
    return
  }

  if (typeof (localStorage) !== 'undefined' && localStorage.removeItem) {
    localStorage.removeItem('access_token')
  }
  removeCookie(TOKEN_NAME)
}
