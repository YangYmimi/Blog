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
      yield put({
        type: 'add',
        payload: {
          list: issues,
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
