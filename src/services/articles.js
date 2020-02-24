import request from '../utils/http'

export function issues() {
  return request(`https://api.github.com/repos/yangymimi/frontend-lookback/issues`)
}

export function vueissues() {
  return request(`https://api.github.com/repos/yangymimi/read-vue/issues`)
}

export function koaissues() {
  return request(`https://api.github.com/repos/yangymimi/koa-start/issues`)
}

export function reactissues() {
  return request(`https://api.github.com/repos/yangymimi/read-react/issues`)
}
