import Cookies from 'js-cookie'

const TOKEN_COOKIE_NAME = 'token'

export function setToken(token: string) {
  Cookies.set(TOKEN_COOKIE_NAME, token, { expires: 7 }) // Set token cookie with a 7-day expiration
}

export function getToken() {
  return Cookies.get(TOKEN_COOKIE_NAME)
}

export const removeToken = () => {
  Cookies.remove(TOKEN_COOKIE_NAME)
}

export function storeUserInfo(userInfo: any) {
  if ('token' in userInfo) {
    userInfo.token = null
  }
  localStorage.setItem('userInfo', JSON.stringify(userInfo))
}

export function getUserInfoFromStorage() {
  const userInfoString = localStorage.getItem('userInfo')
  return userInfoString ? JSON.parse(userInfoString) : null
}

export const removeUserInfoFromStorage = () => {
  localStorage.removeItem('userInfo')
}
