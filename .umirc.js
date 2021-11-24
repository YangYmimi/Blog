// ref: https://umijs.org/config/
export default {
  base: '/superman/dist/',
  publicPath: '/superman/dist/',
  treeShaking: true,
  exportStatic: true,
  plugins: [
    // ref: https://github.com/umijs/umi-plugin-gh-pages
    [
      'umi-plugin-gh-pages',
      {
        branch: 'master',
      },
    ],
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    [
      'umi-plugin-react',
      {
        antd: true,
        dva: true,
        dynamicImport: { webpackChunkName: true },
        title: "Superman's Blog",
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
      },
    ],
  ],
  routes: [
    // custome routes configuration
    {
      path: '/',
      component: '../layouts/index',
      routes: [
        { path: '/', component: './articles/index' },
        { path: '/articles', component: './articles/index' },
        { path: '/about-me', component: './about/index' },
      ],
    },
  ],
};
