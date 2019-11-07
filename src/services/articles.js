import request from '../utils/http'

export function issues() {
  return request(`https://api.github.com/repos/yangymimi/frontend-lookback/issues`)
}

export function vueissues() {
  return request(`https://api.github.com/repos/yangymimi/read-vue/issues`)
}
