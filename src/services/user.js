import request from '../utils/http'

export function user() {
  return request(`https://api.github.com/users/yangymimi`)
}
