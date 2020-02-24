import * as articleService from '../services/articles'

export default {
  state: {
    list: [] // 文章列表
  },
  reducers: {
    add(state, { payload: data }) {
      return { ...state, ...data }
    }
  },
  effects: {
    * fetch(action, { call, put }) {
      const [issues, vueissues, koaissues, reactissues] = yield [
        call(articleService.issues),
        call(articleService.vueissues),
        call(articleService.koaissues),
        call(articleService.reactissues)
      ]

      const articles = [...issues, ...vueissues, ...koaissues, ...reactissues]

      yield put({
        type: 'add',
        payload: {
          list: articles.map((article) => { // 整理数据
            return {
              aId: article.id, // 文章编号
              author: article.user.login, // 作者
              title: article.title,
              url: article.html_url, // 文章详情地址
              labels: article.labels.map((label) => {
                return label.name
              }),
              created_at: `${new Date(article.created_at).getFullYear()}-${new Date(article.created_at).getMonth() + 1}`
            }
          })
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
