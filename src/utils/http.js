import fetch from 'dva/fetch'

/**
 * Request an url then return a promise
 * @param {string} url The URL you want to request
 * @param {object} [options] The options you want to pass to 'fetch'
 */
const request = async function(url, options) {
  const response = await fetch(url, options)

  return await response.json()
}

export default request
