import request from '../utils/http'
import { USER_NAME, REPO_NAME } from '../pages/articles/constants'

export function issues() {
  return request(`https://api.github.com/repos/${USER_NAME}/${REPO_NAME}/issues`)
}
