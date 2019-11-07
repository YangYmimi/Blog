import * as articleService from '../services/articles'

export default {
  state: {
    list: [],
    total: 0
  },
  reducers: {
    add(state, { payload: data }) {
      return { ...state, ...data }
    }
  },
  effects: {
    * fetch(action, { call, put }) {
      const issues = yield call(articleService.issues) // array
      const vueissues = yield call(articleService.vueissues) // array
      yield put({
        type: 'add',
        payload: {
          list: [...issues, ...vueissues],
          total: issues.length
        }
      })
    }
  },
  subscriptions: { // 初始化
    setup({ dispatch }) {
      dispatch({ type: 'fetch' })
    }
  }
}
