import request from '../utils/http'
import { USER_NAME } from '../pages/articles/constants'

export function user() {
  return request(`https://api.github.com/users/${USER_NAME}`)
}
