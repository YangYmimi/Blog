import { defineConfig } from 'umi';

export default defineConfig({
  exportStatic: { htmlSuffix: true },
  fastRefresh: {},
  hash: true,
  mfsu: {},
  nodeModulesTransform: { type: 'none' },
  routes: [
    { path: '/', component: '@/pages/home' },
    { title: '首页', path: '/home', component: '@/pages/home' },
    { title: '关于我', path: '/aboutme', component: '@/pages/about' },
    { title: '文章列表', path: '/articles', component: '@/pages/articles' },
  ],
});
