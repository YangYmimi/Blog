
// ref: https://umijs.org/config/
export default {
  base: '/rblog/',
  treeShaking: true,
  plugins: [
    'umi-plugin-gh-pages',
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    ['umi-plugin-react', {
      antd: true,
      dva: true,
      dynamicImport: { webpackChunkName: true },
      title: 'rblog',
      dll: false,
      routes: {
        exclude: [
          /models\//,
          /services\//,
          /model\.(t|j)sx?$/,
          /service\.(t|j)sx?$/,
          /components\//,
        ],
      },
    }],
  ],
  routes: [ // custome routes configuration
    {
      path: '/',
      component: '../layouts/index',
      routes: [
        { path: '/', component: './index' },
        { path: '/articles', component: './articles/index' },
        { path: '/about-me', component: './about/index' }
      ]
    }
  ]
}
