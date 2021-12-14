/******/ (() => {
  // webpackBootstrap
  /******/ var __webpack_modules__ = {
    /***/ './src/.umi/core/history.ts':
      /*!**********************************!*\
  !*** ./src/.umi/core/history.ts ***!
  \**********************************/
      /***/ (module, __webpack_exports__, __webpack_require__) => {
        'use strict';
        __webpack_require__.a(
          module,
          async (__webpack_handle_async_dependencies__) => {
            __webpack_require__.r(__webpack_exports__);
            /* harmony export */ __webpack_require__.d(__webpack_exports__, {
              /* harmony export */ createHistory: () =>
                /* binding */ createHistory,
              /* harmony export */ history: () => /* binding */ history,
              /* harmony export */
            });
            const { createBrowserHistory: createBrowserHistory } =
              await Promise.resolve().then(function webpackMissingModule() {
                var e = new Error(
                  "Cannot find module 'mf/$CWD$/node_modules/umi/node_modules/@umijs/runtime'",
                );
                e.code = 'MODULE_NOT_FOUND';
                throw e;
              });
            let options = {
              basename: '/',
            };

            if (true) {
              options.basename = '/';
            } // remove initial history because of ssr

            let history = true ? null : 0;
            const createHistory = (hotReload = false) => {
              if (!hotReload) {
                history = createBrowserHistory(options);
              }

              return history;
            };

            __webpack_handle_async_dependencies__();
          },
          1,
        );

        /***/
      },

    /***/ './src/.umi/core/plugin.ts':
      /*!*********************************!*\
  !*** ./src/.umi/core/plugin.ts ***!
  \*********************************/
      /***/ (module, __webpack_exports__, __webpack_require__) => {
        'use strict';
        __webpack_require__.a(
          module,
          async (__webpack_handle_async_dependencies__) => {
            __webpack_require__.r(__webpack_exports__);
            /* harmony export */ __webpack_require__.d(__webpack_exports__, {
              /* harmony export */ plugin: () => /* binding */ plugin,
              /* harmony export */
            });
            const { Plugin: Plugin } = await Promise.resolve().then(
              function webpackMissingModule() {
                var e = new Error(
                  "Cannot find module 'mf/$CWD$/node_modules/umi/node_modules/@umijs/runtime'",
                );
                e.code = 'MODULE_NOT_FOUND';
                throw e;
              },
            );
            const plugin = new Plugin({
              validKeys: [
                'modifyClientRenderOpts',
                'patchRoutes',
                'rootContainer',
                'render',
                'onRouteChange',
                '__mfsu',
                'ssr',
                'getInitialState',
                'initialStateConfig',
                'request',
              ],
            });

            __webpack_handle_async_dependencies__();
          },
          1,
        );

        /***/
      },

    /***/ './src/.umi/core/pluginRegister.ts':
      /*!*****************************************!*\
  !*** ./src/.umi/core/pluginRegister.ts ***!
  \*****************************************/
      /***/ (module, __webpack_exports__, __webpack_require__) => {
        'use strict';
        __webpack_require__.a(
          module,
          async (__webpack_handle_async_dependencies__) => {
            __webpack_require__.r(__webpack_exports__);
            /* harmony export */ __webpack_require__.d(__webpack_exports__, {
              /* harmony export */ __mfsu: () => /* binding */ __mfsu,
              /* harmony export */
            });
            /* harmony import */ var _plugin__WEBPACK_IMPORTED_MODULE_0__ =
              __webpack_require__(/*! ./plugin */ './src/.umi/core/plugin.ts');
            /* harmony import */ var _plugin_initial_state_runtime__WEBPACK_IMPORTED_MODULE_1__ =
              __webpack_require__(
                /*! ../plugin-initial-state/runtime */ './src/.umi/plugin-initial-state/runtime.tsx',
              );
            /* harmony import */ var _plugin_model_runtime__WEBPACK_IMPORTED_MODULE_2__ =
              __webpack_require__(
                /*! ../plugin-model/runtime */ './src/.umi/plugin-model/runtime.tsx',
              );
            /* harmony import */ var _Users_centurygame_Workspace_superman_superman_blog_src_umi_plugin_helmet_runtime_ts__WEBPACK_IMPORTED_MODULE_3__ =
              __webpack_require__(
                /*! ./src/.umi/plugin-helmet/runtime.ts */ './src/.umi/plugin-helmet/runtime.ts',
              );
            var __webpack_async_dependencies__ =
              __webpack_handle_async_dependencies__([
                _plugin__WEBPACK_IMPORTED_MODULE_0__,
                _plugin_model_runtime__WEBPACK_IMPORTED_MODULE_2__,
                _plugin_initial_state_runtime__WEBPACK_IMPORTED_MODULE_1__,
              ]);
            [
              _plugin__WEBPACK_IMPORTED_MODULE_0__,
              _plugin_model_runtime__WEBPACK_IMPORTED_MODULE_2__,
              _plugin_initial_state_runtime__WEBPACK_IMPORTED_MODULE_1__,
            ] = __webpack_async_dependencies__.then
              ? await __webpack_async_dependencies__
              : __webpack_async_dependencies__;
            // @ts-nocheck

            _plugin__WEBPACK_IMPORTED_MODULE_0__.plugin.register({
              apply: _plugin_initial_state_runtime__WEBPACK_IMPORTED_MODULE_1__,
              path: '../plugin-initial-state/runtime',
            });
            _plugin__WEBPACK_IMPORTED_MODULE_0__.plugin.register({
              apply: _plugin_model_runtime__WEBPACK_IMPORTED_MODULE_2__,
              path: '../plugin-model/runtime',
            });
            _plugin__WEBPACK_IMPORTED_MODULE_0__.plugin.register({
              apply:
                _Users_centurygame_Workspace_superman_superman_blog_src_umi_plugin_helmet_runtime_ts__WEBPACK_IMPORTED_MODULE_3__,
              path: '/Users/centurygame/Workspace/superman/superman_blog/src/.umi/plugin-helmet/runtime.ts',
            });
            const __mfsu = 1;
          },
        );

        /***/
      },

    /***/ './src/.umi/core/server.ts':
      /*!*********************************!*\
  !*** ./src/.umi/core/server.ts ***!
  \*********************************/
      /***/ (module, __webpack_exports__, __webpack_require__) => {
        'use strict';
        __webpack_require__.a(
          module,
          async (__webpack_handle_async_dependencies__) => {
            __webpack_require__.r(__webpack_exports__);
            /* harmony export */ __webpack_require__.d(__webpack_exports__, {
              /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
              /* harmony export */
            });
            /* harmony import */ var _plugin__WEBPACK_IMPORTED_MODULE_0__ =
              __webpack_require__(/*! ./plugin */ './src/.umi/core/plugin.ts');
            /* harmony import */ var _pluginRegister__WEBPACK_IMPORTED_MODULE_1__ =
              __webpack_require__(
                /*! ./pluginRegister */ './src/.umi/core/pluginRegister.ts',
              );
            var __webpack_async_dependencies__ =
              __webpack_handle_async_dependencies__([
                _plugin__WEBPACK_IMPORTED_MODULE_0__,
                _pluginRegister__WEBPACK_IMPORTED_MODULE_1__,
              ]);
            [
              _plugin__WEBPACK_IMPORTED_MODULE_0__,
              _pluginRegister__WEBPACK_IMPORTED_MODULE_1__,
            ] = __webpack_async_dependencies__.then
              ? await __webpack_async_dependencies__
              : __webpack_async_dependencies__;
            const {} = await Promise.resolve().then(
              function webpackMissingModule() {
                var e = new Error(
                  "Cannot find module 'mf/$CWD$/node_modules/umi/node_modules/regenerator-runtime/runtime.js'",
                );
                e.code = 'MODULE_NOT_FOUND';
                throw e;
              },
            );
            const { format: format } = await Promise.resolve().then(
              function webpackMissingModule() {
                var e = new Error("Cannot find module 'mf/url'");
                e.code = 'MODULE_NOT_FOUND';
                throw e;
              },
            );
            const { default: renderServer } = await Promise.resolve().then(
              function webpackMissingModule() {
                var e = new Error(
                  "Cannot find module 'mf/$CWD$/node_modules/umi/node_modules/@umijs/preset-built-in/lib/plugins/features/ssr/templates/renderServer/renderServer.js'",
                );
                e.code = 'MODULE_NOT_FOUND';
                throw e;
              },
            );
            const {
              stripBasename: stripBasename,
              cheerio: cheerio,
              handleHTML: handleHTML,
            } = await Promise.resolve().then(function webpackMissingModule() {
              var e = new Error(
                "Cannot find module 'mf/$CWD$/node_modules/umi/node_modules/@umijs/preset-built-in/lib/plugins/features/ssr/templates/utils.js'",
              );
              e.code = 'MODULE_NOT_FOUND';
              throw e;
            });
            const {
              ApplyPluginsType: ApplyPluginsType,
              createMemoryHistory: createMemoryHistory,
            } = await Promise.resolve().then(function webpackMissingModule() {
              var e = new Error(
                "Cannot find module 'mf/$CWD$/node_modules/umi/node_modules/@umijs/runtime'",
              );
              e.code = 'MODULE_NOT_FOUND';
              throw e;
            });

            // origin require module
            // https://github.com/webpack/webpack/issues/4175#issuecomment-342931035

            const requireFunc = true ? require : 0;
            /**
             * server render function
             * @param params
             */

            const render = async (params) => {
              let error;
              const _params$origin = params.origin,
                origin = _params$origin === void 0 ? '' : _params$origin,
                path = params.path,
                _params$htmlTemplate = params.htmlTemplate,
                htmlTemplate =
                  _params$htmlTemplate === void 0 ? '' : _params$htmlTemplate,
                _params$mountElementI = params.mountElementId,
                mountElementId =
                  _params$mountElementI === void 0
                    ? 'root'
                    : _params$mountElementI,
                _params$context = params.context,
                context = _params$context === void 0 ? {} : _params$context,
                _params$mode = params.mode,
                mode = _params$mode === void 0 ? 'string' : _params$mode,
                _params$basename = params.basename,
                basename = _params$basename === void 0 ? '/' : _params$basename,
                _params$staticMarkup = params.staticMarkup,
                staticMarkup =
                  _params$staticMarkup === void 0
                    ? false
                    : _params$staticMarkup,
                _params$forceInitial = params.forceInitial,
                forceInitial =
                  _params$forceInitial === void 0
                    ? false
                    : _params$forceInitial,
                _params$removeWindowI = params.removeWindowInitialProps,
                removeWindowInitialProps =
                  _params$removeWindowI === void 0
                    ? false
                    : _params$removeWindowI,
                getInitialPropsCtx = params.getInitialPropsCtx;
              let manifest = params.manifest;
              const env = 'development';
              let html =
                htmlTemplate ||
                '\u003C!DOCTYPE html\u003E\n\u003Chtml\u003E\n  \u003Chead\u003E\n    \u003Cmeta charset="utf-8" \u002F\u003E\n    \u003Cmeta\n      name="viewport"\n      content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no"\n    \u002F\u003E\n    \u003Clink rel="stylesheet" href="\u002Fumi.css" \u002F\u003E\n    \u003Cscript\u003E\n      window.routerBase = "\u002F";\n    \u003C\u002Fscript\u003E\n    \u003Cscript src="\u002F@@\u002FdevScripts.js"\u003E\u003C\u002Fscript\u003E\n    \u003Cscript\u003E\n      \u002F\u002F! umi version: 3.5.20\n    \u003C\u002Fscript\u003E\n  \u003C\u002Fhead\u003E\n  \u003Cbody\u003E\n    \u003Cdiv id="root"\u003E\u003C\u002Fdiv\u003E\n\n    \u003Cscript src="\u002Fumi.js"\u003E\u003C\u002Fscript\u003E\n  \u003C\u002Fbody\u003E\n\u003C\u002Fhtml\u003E\n';
              let rootContainer = '';

              try {
                // handle basename
                const location = stripBasename(basename, `${origin}${path}`);
                const pathname = location.pathname; // server history

                const history = createMemoryHistory({
                  initialEntries: [format(location)],
                });
                /**
                 * beforeRenderServer hook, for polyfill global.*
                 */

                await _plugin__WEBPACK_IMPORTED_MODULE_0__.plugin.applyPlugins({
                  key: 'ssr.beforeRenderServer',
                  type: ApplyPluginsType.event,
                  args: {
                    env,
                    path,
                    context,
                    history,
                    mode,
                    location,
                  },
                  async: true,
                });
                /**
                 * routes init and patch only once
                 * beforeRenderServer must before routes init avoding require error
                 */
                // 主要为后面支持按需服务端渲染，单独用 routes 会全编译

                const routes = [
                  {
                    path: '/index.html',
                    component: __webpack_require__(
                      /*! @/pages/home */ './src/pages/home/index.jsx',
                    ).default,
                    exact: true,
                    _chunkName: 'p__home',
                  },
                  {
                    path: '/',
                    component: __webpack_require__(
                      /*! @/pages/home */ './src/pages/home/index.jsx',
                    ).default,
                    exact: true,
                    _chunkName: 'p__home',
                  },
                  {
                    title: '首页',
                    path: '/home.html',
                    component: __webpack_require__(
                      /*! @/pages/home */ './src/pages/home/index.jsx',
                    ).default,
                    exact: true,
                    _chunkName: 'p__home',
                  },
                  {
                    title: '关于我',
                    path: '/aboutme.html',
                    component: __webpack_require__(
                      /*! @/pages/about */ './src/pages/about/index.jsx',
                    ).default,
                    exact: true,
                    _chunkName: 'p__about',
                  },
                  {
                    title: '文章列表',
                    path: '/articles.html',
                    component: __webpack_require__(
                      /*! @/pages/articles */ './src/pages/articles/index.jsx',
                    ).default,
                    exact: true,
                    _chunkName: 'p__articles',
                  },
                ]; // allow user to extend routes

                _plugin__WEBPACK_IMPORTED_MODULE_0__.plugin.applyPlugins({
                  key: 'patchRoutes',
                  type: ApplyPluginsType.event,
                  args: {
                    routes,
                  },
                }); // for renderServer

                const opts = {
                  path,
                  history,
                  pathname,
                  getInitialPropsCtx,
                  basename,
                  context,
                  mode,
                  plugin: _plugin__WEBPACK_IMPORTED_MODULE_0__.plugin,
                  staticMarkup,
                  routes,
                  isServer: true,
                };
                const dynamicImport = true;

                if (dynamicImport && !manifest) {
                  try {
                    // prerender not work because the manifest generation behind of the prerender
                    manifest = requireFunc(`./`);
                  } catch (_) {}
                } // renderServer get rootContainer

                const _await$renderServer = await renderServer(opts),
                  pageHTML = _await$renderServer.pageHTML,
                  pageInitialProps = _await$renderServer.pageInitialProps,
                  routesMatched = _await$renderServer.routesMatched;

                rootContainer = pageHTML;

                if (html) {
                  // plugin for modify html template
                  html =
                    await _plugin__WEBPACK_IMPORTED_MODULE_0__.plugin.applyPlugins(
                      {
                        key: 'ssr.modifyServerHTML',
                        type: ApplyPluginsType.modify,
                        initialValue: html,
                        args: {
                          context,
                          cheerio,
                          routesMatched,
                          dynamicImport,
                          manifest,
                        },
                        async: true,
                      },
                    );
                  html = await handleHTML({
                    html,
                    rootContainer,
                    pageInitialProps,
                    mountElementId,
                    mode,
                    forceInitial,
                    removeWindowInitialProps,
                    routesMatched,
                    dynamicImport,
                    manifest,
                  });
                }
              } catch (e) {
                // downgrade into csr
                error = e;
              }

              return {
                rootContainer,
                error,
                html,
              };
            };

            /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
              render;
            __webpack_handle_async_dependencies__();
          },
          1,
        );

        /***/
      },

    /***/ './src/.umi/core/ssr/clientExports.ts':
      /*!********************************************!*\
  !*** ./src/.umi/core/ssr/clientExports.ts ***!
  \********************************************/
      /***/ (module, __webpack_exports__, __webpack_require__) => {
        'use strict';
        __webpack_require__.a(
          module,
          async (__webpack_handle_async_dependencies__) => {
            __webpack_require__.r(__webpack_exports__);
            /* harmony export */ __webpack_require__.d(__webpack_exports__, {
              /* harmony export */ isBrowser: () => /* binding */ isBrowser,
              /* harmony export */
            });
            const { isBrowser: isBrowser } = await Promise.resolve().then(
              function webpackMissingModule() {
                var e = new Error(
                  "Cannot find module 'mf/$CWD$/node_modules/@umijs/utils/lib/ssr.js'",
                );
                e.code = 'MODULE_NOT_FOUND';
                throw e;
              },
            );
            // @ts-nocheck
            // only export isBrowser for user

            __webpack_handle_async_dependencies__();
          },
          1,
        );

        /***/
      },

    /***/ './src/.umi/core/umiExports.ts':
      /*!*************************************!*\
  !*** ./src/.umi/core/umiExports.ts ***!
  \*************************************/
      /***/ (module, __webpack_exports__, __webpack_require__) => {
        'use strict';
        __webpack_require__.a(
          module,
          async (__webpack_handle_async_dependencies__) => {
            __webpack_require__.r(__webpack_exports__);
            /* harmony export */ __webpack_require__.d(__webpack_exports__, {
              /* harmony export */ history: () =>
                /* reexport safe */ _history__WEBPACK_IMPORTED_MODULE_0__.history,
              /* harmony export */ plugin: () =>
                /* reexport safe */ _plugin__WEBPACK_IMPORTED_MODULE_1__.plugin,
              /* harmony export */ isBrowser: () =>
                /* reexport safe */ _core_ssr_clientExports__WEBPACK_IMPORTED_MODULE_2__.isBrowser,
              /* harmony export */ __PLUGIN_INITIAL_STATE: () =>
                /* reexport safe */ _plugin_initial_state_exports__WEBPACK_IMPORTED_MODULE_3__.__PLUGIN_INITIAL_STATE,
              /* harmony export */ useModel: () =>
                /* reexport safe */ _plugin_model_useModel__WEBPACK_IMPORTED_MODULE_4__.useModel,
              /* harmony export */ ErrorShowType: () =>
                /* reexport safe */ _plugin_request_request__WEBPACK_IMPORTED_MODULE_5__.ErrorShowType,
              /* harmony export */ UseRequestProvider: () =>
                /* reexport safe */ _plugin_request_request__WEBPACK_IMPORTED_MODULE_5__.UseRequestProvider,
              /* harmony export */ request: () =>
                /* reexport safe */ _plugin_request_request__WEBPACK_IMPORTED_MODULE_5__.request,
              /* harmony export */ useRequest: () =>
                /* reexport safe */ _plugin_request_request__WEBPACK_IMPORTED_MODULE_5__.useRequest,
              /* harmony export */ Helmet: () =>
                /* reexport safe */ _plugin_helmet_exports__WEBPACK_IMPORTED_MODULE_6__.Helmet,
              /* harmony export */
            });
            /* harmony import */ var _history__WEBPACK_IMPORTED_MODULE_0__ =
              __webpack_require__(
                /*! ./history */ './src/.umi/core/history.ts',
              );
            /* harmony import */ var _plugin__WEBPACK_IMPORTED_MODULE_1__ =
              __webpack_require__(/*! ./plugin */ './src/.umi/core/plugin.ts');
            /* harmony import */ var _core_ssr_clientExports__WEBPACK_IMPORTED_MODULE_2__ =
              __webpack_require__(
                /*! ../core/ssr/clientExports */ './src/.umi/core/ssr/clientExports.ts',
              );
            /* harmony import */ var _plugin_initial_state_exports__WEBPACK_IMPORTED_MODULE_3__ =
              __webpack_require__(
                /*! ../plugin-initial-state/exports */ './src/.umi/plugin-initial-state/exports.ts',
              );
            /* harmony import */ var _plugin_model_useModel__WEBPACK_IMPORTED_MODULE_4__ =
              __webpack_require__(
                /*! ../plugin-model/useModel */ './src/.umi/plugin-model/useModel.tsx',
              );
            /* harmony import */ var _plugin_request_request__WEBPACK_IMPORTED_MODULE_5__ =
              __webpack_require__(
                /*! ../plugin-request/request */ './src/.umi/plugin-request/request.ts',
              );
            /* harmony import */ var _plugin_helmet_exports__WEBPACK_IMPORTED_MODULE_6__ =
              __webpack_require__(
                /*! ../plugin-helmet/exports */ './src/.umi/plugin-helmet/exports.ts',
              );
            var __webpack_async_dependencies__ =
              __webpack_handle_async_dependencies__([
                _plugin_helmet_exports__WEBPACK_IMPORTED_MODULE_6__,
                _plugin_request_request__WEBPACK_IMPORTED_MODULE_5__,
                _plugin_model_useModel__WEBPACK_IMPORTED_MODULE_4__,
                _core_ssr_clientExports__WEBPACK_IMPORTED_MODULE_2__,
                _plugin__WEBPACK_IMPORTED_MODULE_1__,
                _history__WEBPACK_IMPORTED_MODULE_0__,
              ]);
            [
              _plugin_helmet_exports__WEBPACK_IMPORTED_MODULE_6__,
              _plugin_request_request__WEBPACK_IMPORTED_MODULE_5__,
              _plugin_model_useModel__WEBPACK_IMPORTED_MODULE_4__,
              _core_ssr_clientExports__WEBPACK_IMPORTED_MODULE_2__,
              _plugin__WEBPACK_IMPORTED_MODULE_1__,
              _history__WEBPACK_IMPORTED_MODULE_0__,
            ] = __webpack_async_dependencies__.then
              ? await __webpack_async_dependencies__
              : __webpack_async_dependencies__;
            // @ts-nocheck
          },
        );

        /***/
      },

    /***/ './src/.umi/plugin-helmet/exports.ts':
      /*!*******************************************!*\
  !*** ./src/.umi/plugin-helmet/exports.ts ***!
  \*******************************************/
      /***/ (module, __webpack_exports__, __webpack_require__) => {
        'use strict';
        __webpack_require__.a(
          module,
          async (__webpack_handle_async_dependencies__) => {
            __webpack_require__.r(__webpack_exports__);
            /* harmony export */ __webpack_require__.d(__webpack_exports__, {
              /* harmony export */ Helmet: () => /* binding */ Helmet,
              /* harmony export */
            });
            const { Helmet: Helmet } = await Promise.resolve().then(
              function webpackMissingModule() {
                var e = new Error(
                  "Cannot find module 'mf/$CWD$/node_modules/react-helmet'",
                );
                e.code = 'MODULE_NOT_FOUND';
                throw e;
              },
            );
            // @ts-nocheck
            // @ts-ignore

            __webpack_handle_async_dependencies__();
          },
          1,
        );

        /***/
      },

    /***/ './src/.umi/plugin-helmet/runtime.ts':
      /*!*******************************************!*\
  !*** ./src/.umi/plugin-helmet/runtime.ts ***!
  \*******************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__,
      ) => {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ ssr: () => /* binding */ ssr,
          /* harmony export */
        });
        // @ts-nocheck
        let ssr = {}; // remove when client bundle umi.js

        if (true) {
          ssr = {
            modifyServerHTML: (html, { cheerio }) => {
              const _require = __webpack_require__(
                  /*! ./node_modules/react-helmet */ './node_modules/react-helmet/es/Helmet.js',
                ),
                Helmet = _require.Helmet;

              const helmet = Helmet.renderStatic();
              if (!helmet) return html;
              const title = helmet.title.toString();
              const htmlAttributes = helmet.htmlAttributes.toComponent();
              const meta = helmet.meta.toString();
              const link = helmet.link.toString();
              const style = helmet.style.toString();
              const $ = cheerio.load(html, {
                decodeEntities: false,
              });

              if (title) {
                $('head').prepend(title);
              }

              if (meta) {
                $('head').append(meta);
              }

              if (link) {
                $('head').append(link);
              }

              if (style) {
                $('head').append(style);
              }

              if (Object.keys(htmlAttributes)) {
                Object.keys(htmlAttributes).forEach((attrKey) => {
                  $('html').attr(attrKey, htmlAttributes[attrKey]);
                });
              }

              return $.html();
            },
          };
        }

        /***/
      },

    /***/ './src/.umi/plugin-initial-state/Provider.tsx':
      /*!****************************************************!*\
  !*** ./src/.umi/plugin-initial-state/Provider.tsx ***!
  \****************************************************/
      /***/ (module, __webpack_exports__, __webpack_require__) => {
        'use strict';
        __webpack_require__.a(
          module,
          async (__webpack_handle_async_dependencies__) => {
            __webpack_require__.r(__webpack_exports__);
            /* harmony export */ __webpack_require__.d(__webpack_exports__, {
              /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
              /* harmony export */
            });
            /* harmony import */ var _core_umiExports__WEBPACK_IMPORTED_MODULE_0__ =
              __webpack_require__(
                /*! ../core/umiExports */ './src/.umi/core/umiExports.ts',
              );
            /* harmony import */ var _plugin_model_useModel__WEBPACK_IMPORTED_MODULE_1__ =
              __webpack_require__(
                /*! ../plugin-model/useModel */ './src/.umi/plugin-model/useModel.tsx',
              );
            var __webpack_async_dependencies__ =
              __webpack_handle_async_dependencies__([
                _plugin_model_useModel__WEBPACK_IMPORTED_MODULE_1__,
                _core_umiExports__WEBPACK_IMPORTED_MODULE_0__,
              ]);
            [
              _plugin_model_useModel__WEBPACK_IMPORTED_MODULE_1__,
              _core_umiExports__WEBPACK_IMPORTED_MODULE_0__,
            ] = __webpack_async_dependencies__.then
              ? await __webpack_async_dependencies__
              : __webpack_async_dependencies__;
            const { useRef: useRef, useEffect: useEffect } =
              await Promise.resolve().then(function webpackMissingModule() {
                var e = new Error("Cannot find module 'mf/react'");
                e.code = 'MODULE_NOT_FOUND';
                throw e;
              });
            const { ApplyPluginsType: ApplyPluginsType } =
              await Promise.resolve().then(function webpackMissingModule() {
                var e = new Error(
                  "Cannot find module 'mf/$CWD$/node_modules/umi/node_modules/@umijs/runtime'",
                );
                e.code = 'MODULE_NOT_FOUND';
                throw e;
              });

            if (
              typeof _plugin_model_useModel__WEBPACK_IMPORTED_MODULE_1__.useModel !==
              'function'
            ) {
              throw new Error(
                '[plugin-initial-state]: useModel is not a function, @umijs/plugin-model is required.',
              );
            }

            /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (
              props,
            ) => {
              const children = props.children;
              const appLoaded = useRef(false); // 获取用户的配置，暂时只支持 loading

              const useRuntimeConfig =
                _core_umiExports__WEBPACK_IMPORTED_MODULE_0__.plugin.applyPlugins(
                  {
                    key: 'initialStateConfig',
                    type: ApplyPluginsType.modify,
                    initialValue: {},
                  },
                ) || {};

              const _ref =
                  (0,
                  _plugin_model_useModel__WEBPACK_IMPORTED_MODULE_1__.useModel)(
                    '@@initialState',
                  ) || {},
                _ref$loading = _ref.loading,
                loading = _ref$loading === void 0 ? false : _ref$loading;

              useEffect(() => {
                if (!loading) {
                  appLoaded.current = true;
                }
              }, [loading]); // initial state loading 时，阻塞渲染

              if (loading && !appLoaded.current) {
                return useRuntimeConfig.loading || null;
              }

              return children;
            };
            __webpack_handle_async_dependencies__();
          },
          1,
        );

        /***/
      },

    /***/ './src/.umi/plugin-initial-state/exports.ts':
      /*!**************************************************!*\
  !*** ./src/.umi/plugin-initial-state/exports.ts ***!
  \**************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__,
      ) => {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ __PLUGIN_INITIAL_STATE: () =>
            /* binding */ __PLUGIN_INITIAL_STATE,
          /* harmony export */
        });
        // @ts-nocheck
        // @ts-ignore
        const __PLUGIN_INITIAL_STATE = 1;

        /***/
      },

    /***/ './src/.umi/plugin-initial-state/models/initialState.ts':
      /*!**************************************************************!*\
  !*** ./src/.umi/plugin-initial-state/models/initialState.ts ***!
  \**************************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__,
      ) => {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
          /* harmony export */
        });
        // @ts-nocheck
        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = () => ({
          loading: false,
          refresh: () => {},
        });

        /***/
      },

    /***/ './src/.umi/plugin-initial-state/runtime.tsx':
      /*!***************************************************!*\
  !*** ./src/.umi/plugin-initial-state/runtime.tsx ***!
  \***************************************************/
      /***/ (module, __webpack_exports__, __webpack_require__) => {
        'use strict';
        __webpack_require__.a(
          module,
          async (__webpack_handle_async_dependencies__) => {
            __webpack_require__.r(__webpack_exports__);
            /* harmony export */ __webpack_require__.d(__webpack_exports__, {
              /* harmony export */ rootContainer: () =>
                /* binding */ rootContainer,
              /* harmony export */
            });
            /* harmony import */ var _Provider__WEBPACK_IMPORTED_MODULE_0__ =
              __webpack_require__(
                /*! ./Provider */ './src/.umi/plugin-initial-state/Provider.tsx',
              );
            var __webpack_async_dependencies__ =
              __webpack_handle_async_dependencies__([
                _Provider__WEBPACK_IMPORTED_MODULE_0__,
              ]);
            _Provider__WEBPACK_IMPORTED_MODULE_0__ = (
              __webpack_async_dependencies__.then
                ? await __webpack_async_dependencies__
                : __webpack_async_dependencies__
            )[0];
            const { default: React } = await Promise.resolve().then(
              function webpackMissingModule() {
                var e = new Error("Cannot find module 'mf/react'");
                e.code = 'MODULE_NOT_FOUND';
                throw e;
              },
            );

            function rootContainer(container) {
              return /*#__PURE__*/ React.createElement(
                // 这里的 plugin-initial-state 不能从 constant 里取，里面有 path 依赖
                // 但 webpack-5 没有 node 补丁（包括 path）
                _Provider__WEBPACK_IMPORTED_MODULE_0__.default,
                null,
                container,
              );
            }
            __webpack_handle_async_dependencies__();
          },
          1,
        );

        /***/
      },

    /***/ './src/.umi/plugin-model/Provider.tsx':
      /*!********************************************!*\
  !*** ./src/.umi/plugin-model/Provider.tsx ***!
  \********************************************/
      /***/ (module, __webpack_exports__, __webpack_require__) => {
        'use strict';
        __webpack_require__.a(
          module,
          async (__webpack_handle_async_dependencies__) => {
            __webpack_require__.r(__webpack_exports__);
            /* harmony export */ __webpack_require__.d(__webpack_exports__, {
              /* harmony export */ models: () => /* binding */ models,
              /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
              /* harmony export */
            });
            /* harmony import */ var _Users_centurygame_Workspace_superman_superman_blog_src_umi_plugin_initial_state_models_initialState__WEBPACK_IMPORTED_MODULE_0__ =
              __webpack_require__(
                /*! ./src/.umi/plugin-initial-state/models/initialState */ './src/.umi/plugin-initial-state/models/initialState.ts',
              );
            /* harmony import */ var _helpers_dispatcher__WEBPACK_IMPORTED_MODULE_1__ =
              __webpack_require__(
                /*! ./helpers/dispatcher */ './src/.umi/plugin-model/helpers/dispatcher.tsx',
              );
            /* harmony import */ var _helpers_executor__WEBPACK_IMPORTED_MODULE_2__ =
              __webpack_require__(
                /*! ./helpers/executor */ './src/.umi/plugin-model/helpers/executor.tsx',
              );
            /* harmony import */ var _helpers_constant__WEBPACK_IMPORTED_MODULE_3__ =
              __webpack_require__(
                /*! ./helpers/constant */ './src/.umi/plugin-model/helpers/constant.tsx',
              );
            var __webpack_async_dependencies__ =
              __webpack_handle_async_dependencies__([
                _helpers_constant__WEBPACK_IMPORTED_MODULE_3__,
                _helpers_executor__WEBPACK_IMPORTED_MODULE_2__,
              ]);
            [
              _helpers_constant__WEBPACK_IMPORTED_MODULE_3__,
              _helpers_executor__WEBPACK_IMPORTED_MODULE_2__,
            ] = __webpack_async_dependencies__.then
              ? await __webpack_async_dependencies__
              : __webpack_async_dependencies__;
            var _jsxFileName =
              '/Users/centurygame/Workspace/superman/superman_blog/src/.umi/plugin-model/Provider.tsx';
            const { default: _slicedToArray } = await Promise.resolve().then(
              function webpackMissingModule() {
                var e = new Error(
                  "Cannot find module 'mf/$CWD$/node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/esm/slicedToArray'",
                );
                e.code = 'MODULE_NOT_FOUND';
                throw e;
              },
            );
            const { default: React } = await Promise.resolve().then(
              function webpackMissingModule() {
                var e = new Error("Cannot find module 'mf/react'");
                e.code = 'MODULE_NOT_FOUND';
                throw e;
              },
            );
            const { jsxDEV: _jsxDEV } = await Promise.resolve().then(
              function webpackMissingModule() {
                var e = new Error(
                  "Cannot find module 'mf/react/jsx-dev-runtime'",
                );
                e.code = 'MODULE_NOT_FOUND';
                throw e;
              },
            );
            // @ts-ignore

            // @ts-ignore

            // @ts-ignore

            const models = {
              '@@initialState':
                _Users_centurygame_Workspace_superman_superman_blog_src_umi_plugin_initial_state_models_initialState__WEBPACK_IMPORTED_MODULE_0__.default,
            };
            const dispatcher =
              new _helpers_dispatcher__WEBPACK_IMPORTED_MODULE_1__.default();
            const Exe = _helpers_executor__WEBPACK_IMPORTED_MODULE_2__.default;
            /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
              children,
            }) => {
              return /*#__PURE__*/ _jsxDEV(
                _helpers_constant__WEBPACK_IMPORTED_MODULE_3__.UmiContext
                  .Provider,
                {
                  value: dispatcher,
                  children: [
                    Object.entries(models).map((pair) =>
                      /*#__PURE__*/ _jsxDEV(
                        Exe,
                        {
                          namespace: pair[0],
                          hook: pair[1],
                          onUpdate: (val) => {
                            const _ref = pair,
                              _ref2 = _slicedToArray(_ref, 1),
                              ns = _ref2[0];

                            dispatcher.data[ns] = val;
                            dispatcher.update(ns);
                          },
                        },
                        pair[0],
                        false,
                        {
                          fileName: _jsxFileName,
                          lineNumber: 29,
                          columnNumber: 11,
                        },
                        undefined,
                      ),
                    ),
                    children,
                  ],
                },
                void 0,
                true,
                {
                  fileName: _jsxFileName,
                  lineNumber: 26,
                  columnNumber: 5,
                },
                undefined,
              );
            };
            __webpack_handle_async_dependencies__();
          },
          1,
        );

        /***/
      },

    /***/ './src/.umi/plugin-model/helpers/constant.tsx':
      /*!****************************************************!*\
  !*** ./src/.umi/plugin-model/helpers/constant.tsx ***!
  \****************************************************/
      /***/ (module, __webpack_exports__, __webpack_require__) => {
        'use strict';
        __webpack_require__.a(
          module,
          async (__webpack_handle_async_dependencies__) => {
            __webpack_require__.r(__webpack_exports__);
            /* harmony export */ __webpack_require__.d(__webpack_exports__, {
              /* harmony export */ UmiContext: () => /* binding */ UmiContext,
              /* harmony export */
            });
            const { default: React } = await Promise.resolve().then(
              function webpackMissingModule() {
                var e = new Error("Cannot find module 'mf/react'");
                e.code = 'MODULE_NOT_FOUND';
                throw e;
              },
            );
            const UmiContext = /*#__PURE__*/ React.createContext({});
            __webpack_handle_async_dependencies__();
          },
          1,
        );

        /***/
      },

    /***/ './src/.umi/plugin-model/helpers/dispatcher.tsx':
      /*!******************************************************!*\
  !*** ./src/.umi/plugin-model/helpers/dispatcher.tsx ***!
  \******************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__,
      ) => {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () => /* binding */ Dispatcher,
          /* harmony export */
        });
        // @ts-nocheck
        class Dispatcher {
          constructor() {
            this.callbacks = {};
            this.data = {};

            this.update = (namespace) => {
              (this.callbacks[namespace] || []).forEach((callback) => {
                try {
                  const data = this.data[namespace];
                  callback(data);
                } catch (e) {
                  callback(undefined);
                }
              });
            };
          }
        }

        /***/
      },

    /***/ './src/.umi/plugin-model/helpers/executor.tsx':
      /*!****************************************************!*\
  !*** ./src/.umi/plugin-model/helpers/executor.tsx ***!
  \****************************************************/
      /***/ (module, __webpack_exports__, __webpack_require__) => {
        'use strict';
        __webpack_require__.a(
          module,
          async (__webpack_handle_async_dependencies__) => {
            __webpack_require__.r(__webpack_exports__);
            /* harmony export */ __webpack_require__.d(__webpack_exports__, {
              /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
              /* harmony export */
            });
            const {
              default: React,
              useEffect: useEffect,
              useRef: useRef,
              useMemo: useMemo,
            } = await Promise.resolve().then(function webpackMissingModule() {
              var e = new Error("Cannot find module 'mf/react'");
              e.code = 'MODULE_NOT_FOUND';
              throw e;
            });
            const { Fragment: _Fragment } = await Promise.resolve().then(
              function webpackMissingModule() {
                var e = new Error(
                  "Cannot find module 'mf/react/jsx-dev-runtime'",
                );
                e.code = 'MODULE_NOT_FOUND';
                throw e;
              },
            );
            const { jsxDEV: _jsxDEV } = await Promise.resolve().then(
              function webpackMissingModule() {
                var e = new Error(
                  "Cannot find module 'mf/react/jsx-dev-runtime'",
                );
                e.code = 'MODULE_NOT_FOUND';
                throw e;
              },
            );
            /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (
              props,
            ) => {
              const hook = props.hook,
                onUpdate = props.onUpdate,
                namespace = props.namespace;
              const updateRef = useRef(onUpdate);
              updateRef.current = onUpdate;
              const initialLoad = useRef(false);
              let data;

              try {
                data = hook();

                if (true && typeof document !== 'undefined') {
                  try {
                    let count = Object.keys(
                      (window._umi_useModel_dev_tool_log || {})[namespace] ||
                        {},
                    ).length;
                    window._umi_useModel_dev_tool = Object.assign(
                      window._umi_useModel_dev_tool || {},
                      {
                        [namespace]: data,
                      },
                    );
                    window._umi_useModel_dev_tool_log = Object.assign(
                      window._umi_useModel_dev_tool_log || {},
                      {
                        [namespace]: Object.assign(
                          (window._umi_useModel_dev_tool_log || {})[
                            namespace
                          ] || {},
                          {
                            [count]: data,
                          },
                        ),
                      },
                    );
                    window.dispatchEvent(
                      new CustomEvent('_umi_useModel_update', {
                        detail: {
                          namespace,
                          time: Date.now(),
                          data,
                          index: count,
                        },
                      }),
                    );
                  } catch (e) {
                    // dev tool 记录失败、可能是低版本浏览器，忽略
                  }
                }
              } catch (e) {
                console.error(
                  `plugin-model: Invoking '${
                    namespace || 'unknown'
                  }' model failed:`,
                  e,
                );
              } // 首次执行时立刻返回初始值

              useMemo(() => {
                updateRef.current(data);
                initialLoad.current = false;
              }, []); // React 16.13 后 update 函数用 useEffect 包裹

              useEffect(() => {
                if (initialLoad.current) {
                  updateRef.current(data);
                } else {
                  initialLoad.current = true;
                }
              });
              return /*#__PURE__*/ _jsxDEV(_Fragment, {}, void 0, false);
            };
            __webpack_handle_async_dependencies__();
          },
          1,
        );

        /***/
      },

    /***/ './src/.umi/plugin-model/runtime.tsx':
      /*!*******************************************!*\
  !*** ./src/.umi/plugin-model/runtime.tsx ***!
  \*******************************************/
      /***/ (module, __webpack_exports__, __webpack_require__) => {
        'use strict';
        __webpack_require__.a(
          module,
          async (__webpack_handle_async_dependencies__) => {
            __webpack_require__.r(__webpack_exports__);
            /* harmony export */ __webpack_require__.d(__webpack_exports__, {
              /* harmony export */ rootContainer: () =>
                /* binding */ rootContainer,
              /* harmony export */
            });
            /* harmony import */ var _Provider__WEBPACK_IMPORTED_MODULE_0__ =
              __webpack_require__(
                /*! ./Provider */ './src/.umi/plugin-model/Provider.tsx',
              );
            var __webpack_async_dependencies__ =
              __webpack_handle_async_dependencies__([
                _Provider__WEBPACK_IMPORTED_MODULE_0__,
              ]);
            _Provider__WEBPACK_IMPORTED_MODULE_0__ = (
              __webpack_async_dependencies__.then
                ? await __webpack_async_dependencies__
                : __webpack_async_dependencies__
            )[0];
            const { default: React } = await Promise.resolve().then(
              function webpackMissingModule() {
                var e = new Error("Cannot find module 'mf/react'");
                e.code = 'MODULE_NOT_FOUND';
                throw e;
              },
            );

            function rootContainer(container) {
              return /*#__PURE__*/ React.createElement(
                _Provider__WEBPACK_IMPORTED_MODULE_0__.default,
                null,
                container,
              );
            }
            __webpack_handle_async_dependencies__();
          },
          1,
        );

        /***/
      },

    /***/ './src/.umi/plugin-model/useModel.tsx':
      /*!********************************************!*\
  !*** ./src/.umi/plugin-model/useModel.tsx ***!
  \********************************************/
      /***/ (module, __webpack_exports__, __webpack_require__) => {
        'use strict';
        __webpack_require__.a(
          module,
          async (__webpack_handle_async_dependencies__) => {
            __webpack_require__.r(__webpack_exports__);
            /* harmony export */ __webpack_require__.d(__webpack_exports__, {
              /* harmony export */ useModel: () => /* binding */ useModel,
              /* harmony export */
            });
            /* harmony import */ var _helpers_constant__WEBPACK_IMPORTED_MODULE_0__ =
              __webpack_require__(
                /*! ./helpers/constant */ './src/.umi/plugin-model/helpers/constant.tsx',
              );
            var __webpack_async_dependencies__ =
              __webpack_handle_async_dependencies__([
                _helpers_constant__WEBPACK_IMPORTED_MODULE_0__,
              ]);
            _helpers_constant__WEBPACK_IMPORTED_MODULE_0__ = (
              __webpack_async_dependencies__.then
                ? await __webpack_async_dependencies__
                : __webpack_async_dependencies__
            )[0];
            const { default: _slicedToArray } = await Promise.resolve().then(
              function webpackMissingModule() {
                var e = new Error(
                  "Cannot find module 'mf/$CWD$/node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/esm/slicedToArray'",
                );
                e.code = 'MODULE_NOT_FOUND';
                throw e;
              },
            );
            const {
              useState: useState,
              useEffect: useEffect,
              useContext: useContext,
              useRef: useRef,
            } = await Promise.resolve().then(function webpackMissingModule() {
              var e = new Error("Cannot find module 'mf/react'");
              e.code = 'MODULE_NOT_FOUND';
              throw e;
            });
            const { default: isEqual } = await Promise.resolve().then(
              function webpackMissingModule() {
                var e = new Error(
                  "Cannot find module 'mf/$CWD$/node_modules/@umijs/plugin-model/node_modules/fast-deep-equal/index.js'",
                );
                e.code = 'MODULE_NOT_FOUND';
                throw e;
              },
            );
            // @ts-ignore

            function useModel(namespace, updater) {
              const dispatcher = useContext(
                _helpers_constant__WEBPACK_IMPORTED_MODULE_0__.UmiContext,
              );
              const updaterRef = useRef(updater);
              updaterRef.current = updater;

              const _useState = useState(() =>
                  updaterRef.current
                    ? updaterRef.current(dispatcher.data[namespace])
                    : dispatcher.data[namespace],
                ),
                _useState2 = _slicedToArray(_useState, 2),
                state = _useState2[0],
                setState = _useState2[1];

              const stateRef = useRef(state);
              stateRef.current = state;
              const isMount = useRef(false);
              useEffect(() => {
                isMount.current = true;
                return () => {
                  isMount.current = false;
                };
              }, []);
              useEffect(() => {
                const handler = (e) => {
                  if (!isMount.current) {
                    // 如果 handler 执行过程中，组件被卸载了，则强制更新全局 data
                    setTimeout(() => {
                      dispatcher.data[namespace] = e;
                      dispatcher.update(namespace);
                    });
                  } else {
                    if (updater && updaterRef.current) {
                      const currentState = updaterRef.current(e);
                      const previousState = stateRef.current;

                      if (!isEqual(currentState, previousState)) {
                        setState(currentState);
                      }
                    } else {
                      setState(e);
                    }
                  }
                };

                try {
                  dispatcher.callbacks[namespace].add(handler);
                  dispatcher.update(namespace);
                } catch (e) {
                  dispatcher.callbacks[namespace] = new Set();
                  dispatcher.callbacks[namespace].add(handler);
                  dispatcher.update(namespace);
                }

                return () => {
                  dispatcher.callbacks[namespace].delete(handler);
                };
              }, [namespace]);
              return state;
            }
            __webpack_handle_async_dependencies__();
          },
          1,
        );

        /***/
      },

    /***/ './src/.umi/plugin-request/request.ts':
      /*!********************************************!*\
  !*** ./src/.umi/plugin-request/request.ts ***!
  \********************************************/
      /***/ (module, __webpack_exports__, __webpack_require__) => {
        'use strict';
        __webpack_require__.a(
          module,
          async (__webpack_handle_async_dependencies__) => {
            __webpack_require__.r(__webpack_exports__);
            /* harmony export */ __webpack_require__.d(__webpack_exports__, {
              /* harmony export */ ErrorShowType: () =>
                /* binding */ ErrorShowType,
              /* harmony export */ request: () => /* binding */ request,
              /* harmony export */ useRequest: () => /* binding */ useRequest,
              /* harmony export */ UseRequestProvider: () =>
                /* binding */ UseRequestProvider,
              /* harmony export */
            });
            /* harmony import */ var _core_umiExports__WEBPACK_IMPORTED_MODULE_0__ =
              __webpack_require__(
                /*! ../core/umiExports */ './src/.umi/core/umiExports.ts',
              );
            var __webpack_async_dependencies__ =
              __webpack_handle_async_dependencies__([
                _core_umiExports__WEBPACK_IMPORTED_MODULE_0__,
              ]);
            _core_umiExports__WEBPACK_IMPORTED_MODULE_0__ = (
              __webpack_async_dependencies__.then
                ? await __webpack_async_dependencies__
                : __webpack_async_dependencies__
            )[0];
            const { default: _objectWithoutProperties } =
              await Promise.resolve().then(function webpackMissingModule() {
                var e = new Error(
                  "Cannot find module 'mf/$CWD$/node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties'",
                );
                e.code = 'MODULE_NOT_FOUND';
                throw e;
              });
            const { extend: extend } = await Promise.resolve().then(
              function webpackMissingModule() {
                var e = new Error(
                  "Cannot find module 'mf/$CWD$/node_modules/umi-request'",
                );
                e.code = 'MODULE_NOT_FOUND';
                throw e;
              },
            );
            const { ApplyPluginsType: ApplyPluginsType } =
              await Promise.resolve().then(function webpackMissingModule() {
                var e = new Error(
                  "Cannot find module 'mf/$CWD$/node_modules/umi/node_modules/@umijs/runtime'",
                );
                e.code = 'MODULE_NOT_FOUND';
                throw e;
              });
            const { message: message, notification: notification } =
              await Promise.resolve().then(function webpackMissingModule() {
                var e = new Error(
                  "Cannot find module 'mf/@umijs/plugin-request/lib/ui'",
                );
                e.code = 'MODULE_NOT_FOUND';
                throw e;
              });
            const {
              default: useUmiRequest,
              UseRequestProvider: UseRequestProvider,
            } = await Promise.resolve().then(function webpackMissingModule() {
              var e = new Error(
                "Cannot find module 'mf/$CWD$/node_modules/@ahooksjs/use-request'",
              );
              e.code = 'MODULE_NOT_FOUND';
              throw e;
            });
            // decoupling with antd UI library, you can using `alias` modify the ui methods
            // @ts-ignore

            function useRequest(service, options = {}) {
              return useUmiRequest(service, {
                formatResult: (result) =>
                  result === null || result === void 0 ? void 0 : result.data,
                requestMethod: (requestOptions) => {
                  if (typeof requestOptions === 'string') {
                    return request(requestOptions);
                  }

                  if (typeof requestOptions === 'object') {
                    const url = requestOptions.url,
                      rest = _objectWithoutProperties(requestOptions, ['url']);

                    return request(url, rest);
                  }

                  throw new Error('request options error');
                },
                ...options,
              });
            }

            let ErrorShowType;

            (function (ErrorShowType) {
              ErrorShowType[(ErrorShowType['SILENT'] = 0)] = 'SILENT';
              ErrorShowType[(ErrorShowType['WARN_MESSAGE'] = 1)] =
                'WARN_MESSAGE';
              ErrorShowType[(ErrorShowType['ERROR_MESSAGE'] = 2)] =
                'ERROR_MESSAGE';
              ErrorShowType[(ErrorShowType['NOTIFICATION'] = 4)] =
                'NOTIFICATION';
              ErrorShowType[(ErrorShowType['REDIRECT'] = 9)] = 'REDIRECT';
            })(ErrorShowType || (ErrorShowType = {}));

            const DEFAULT_ERROR_PAGE = '/exception';
            let requestMethodInstance;

            const getRequestMethod = () => {
              var _requestConfig$errorC;

              if (requestMethodInstance) {
                // request method 已经示例化
                return requestMethodInstance;
              } // runtime 配置可能应为依赖顺序的问题在模块初始化的时候无法获取，所以需要封装一层在异步调用后初始化相关方法
              // 当用户的 app.ts 中依赖了该文件的情况下就该模块的初始化时间就会被提前，无法获取到运行时配置

              const requestConfig =
                _core_umiExports__WEBPACK_IMPORTED_MODULE_0__.plugin.applyPlugins(
                  {
                    key: 'request',
                    type: ApplyPluginsType.modify,
                    initialValue: {},
                  },
                );

              const errorAdaptor =
                ((_requestConfig$errorC = requestConfig.errorConfig) === null ||
                _requestConfig$errorC === void 0
                  ? void 0
                  : _requestConfig$errorC.adaptor) || ((resData) => resData);

              requestMethodInstance = extend({
                errorHandler: (error) => {
                  var _error$request, _error$request$option, _errorInfo4;

                  // @ts-ignore
                  if (
                    error !== null &&
                    error !== void 0 &&
                    (_error$request = error.request) !== null &&
                    _error$request !== void 0 &&
                    (_error$request$option = _error$request.options) !== null &&
                    _error$request$option !== void 0 &&
                    _error$request$option.skipErrorHandler
                  ) {
                    throw error;
                  }

                  let errorInfo;

                  if (
                    error.name === 'ResponseError' &&
                    error.data &&
                    error.request
                  ) {
                    var _errorInfo;

                    const ctx = {
                      req: error.request,
                      res: error.response,
                    };
                    errorInfo = errorAdaptor(error.data, ctx);
                    error.message =
                      ((_errorInfo = errorInfo) === null ||
                      _errorInfo === void 0
                        ? void 0
                        : _errorInfo.errorMessage) || error.message;
                    error.data = error.data;
                    error.info = errorInfo;
                  }

                  errorInfo = error.info;

                  if (errorInfo) {
                    var _errorInfo2, _errorInfo3, _requestConfig$errorC2;

                    const errorMessage =
                      (_errorInfo2 = errorInfo) === null ||
                      _errorInfo2 === void 0
                        ? void 0
                        : _errorInfo2.errorMessage;
                    const errorCode =
                      (_errorInfo3 = errorInfo) === null ||
                      _errorInfo3 === void 0
                        ? void 0
                        : _errorInfo3.errorCode;
                    const errorPage =
                      ((_requestConfig$errorC2 = requestConfig.errorConfig) ===
                        null || _requestConfig$errorC2 === void 0
                        ? void 0
                        : _requestConfig$errorC2.errorPage) ||
                      DEFAULT_ERROR_PAGE;

                    switch (
                      (_errorInfo4 = errorInfo) === null ||
                      _errorInfo4 === void 0
                        ? void 0
                        : _errorInfo4.showType
                    ) {
                      case ErrorShowType.SILENT:
                        // do nothing
                        break;

                      case ErrorShowType.WARN_MESSAGE:
                        message.warn(errorMessage);
                        break;

                      case ErrorShowType.ERROR_MESSAGE:
                        message.error(errorMessage);
                        break;

                      case ErrorShowType.NOTIFICATION:
                        notification.open({
                          description: errorMessage,
                          message: errorCode,
                        });
                        break;

                      case ErrorShowType.REDIRECT:
                        // @ts-ignore
                        _core_umiExports__WEBPACK_IMPORTED_MODULE_0__.history.push(
                          {
                            pathname: errorPage,
                            query: {
                              errorCode,
                              errorMessage,
                            },
                          },
                        ); // redirect to error page

                        break;

                      default:
                        message.error(errorMessage);
                        break;
                    }
                  } else {
                    message.error(
                      error.message || 'Request error, please retry.',
                    );
                  }

                  throw error;
                },
                ...requestConfig,
              }); // 中间件统一错误处理
              // 后端返回格式 { success: boolean, data: any }
              // 按照项目具体情况修改该部分逻辑

              requestMethodInstance.use(async (ctx, next) => {
                var _req$options;

                await next();
                const req = ctx.req,
                  res = ctx.res; // @ts-ignore

                if (
                  (_req$options = req.options) !== null &&
                  _req$options !== void 0 &&
                  _req$options.skipErrorHandler
                ) {
                  return;
                }

                const options = req.options;
                const getResponse = options.getResponse;
                const resData = getResponse ? res.data : res;
                const errorInfo = errorAdaptor(resData, ctx);

                if (errorInfo.success === false) {
                  // 抛出错误到 errorHandler 中处理
                  const error = new Error(errorInfo.errorMessage);
                  error.name = 'BizError';
                  error.data = resData;
                  error.info = errorInfo;
                  error.response = res;
                  throw error;
                }
              }); // Add user custom middlewares

              const customMiddlewares = requestConfig.middlewares || [];
              customMiddlewares.forEach((mw) => {
                requestMethodInstance.use(mw);
              }); // Add user custom interceptors

              const requestInterceptors =
                requestConfig.requestInterceptors || [];
              const responseInterceptors =
                requestConfig.responseInterceptors || [];
              requestInterceptors.map((ri) => {
                requestMethodInstance.interceptors.request.use(ri);
              });
              responseInterceptors.map((ri) => {
                requestMethodInstance.interceptors.response.use(ri);
              });
              return requestMethodInstance;
            };

            const request = (url, options) => {
              const requestMethod = getRequestMethod();
              return requestMethod(url, options);
            };

            __webpack_handle_async_dependencies__();
          },
          1,
        );

        /***/
      },

    /***/ './src/pages/about/index.jsx':
      /*!***********************************!*\
  !*** ./src/pages/about/index.jsx ***!
  \***********************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__,
      ) => {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
          /* harmony export */
        });
        const PageAbout = () => {
          return 'about page';
        };

        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          PageAbout;

        /***/
      },

    /***/ './src/pages/articles/index.jsx':
      /*!**************************************!*\
  !*** ./src/pages/articles/index.jsx ***!
  \**************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__,
      ) => {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
          /* harmony export */
        });
        const PageArticles = () => {
          return 'articles page';
        };

        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          PageArticles;

        /***/
      },

    /***/ './src/pages/home/index.jsx':
      /*!**********************************!*\
  !*** ./src/pages/home/index.jsx ***!
  \**********************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__,
      ) => {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
          /* harmony export */
        });
        const PageHome = () => {
          return 'home page';
        };

        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          PageHome;

        /***/
      },

    /***/ './node_modules/object-assign/index.js':
      /*!*********************************************!*\
  !*** ./node_modules/object-assign/index.js ***!
  \*********************************************/
      /***/ (module) => {
        'use strict';
        /*
object-assign
(c) Sindre Sorhus
@license MIT
*/

        /* eslint-disable no-unused-vars */
        var getOwnPropertySymbols = Object.getOwnPropertySymbols;
        var hasOwnProperty = Object.prototype.hasOwnProperty;
        var propIsEnumerable = Object.prototype.propertyIsEnumerable;

        function toObject(val) {
          if (val === null || val === undefined) {
            throw new TypeError(
              'Object.assign cannot be called with null or undefined',
            );
          }

          return Object(val);
        }

        function shouldUseNative() {
          try {
            if (!Object.assign) {
              return false;
            }

            // Detect buggy property enumeration order in older V8 versions.

            // https://bugs.chromium.org/p/v8/issues/detail?id=4118
            var test1 = new String('abc'); // eslint-disable-line no-new-wrappers
            test1[5] = 'de';
            if (Object.getOwnPropertyNames(test1)[0] === '5') {
              return false;
            }

            // https://bugs.chromium.org/p/v8/issues/detail?id=3056
            var test2 = {};
            for (var i = 0; i < 10; i++) {
              test2['_' + String.fromCharCode(i)] = i;
            }
            var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
              return test2[n];
            });
            if (order2.join('') !== '0123456789') {
              return false;
            }

            // https://bugs.chromium.org/p/v8/issues/detail?id=3056
            var test3 = {};
            'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
              test3[letter] = letter;
            });
            if (
              Object.keys(Object.assign({}, test3)).join('') !==
              'abcdefghijklmnopqrst'
            ) {
              return false;
            }

            return true;
          } catch (err) {
            // We don't expect any of the above to throw, but better to be safe.
            return false;
          }
        }

        module.exports = shouldUseNative()
          ? Object.assign
          : function (target, source) {
              var from;
              var to = toObject(target);
              var symbols;

              for (var s = 1; s < arguments.length; s++) {
                from = Object(arguments[s]);

                for (var key in from) {
                  if (hasOwnProperty.call(from, key)) {
                    to[key] = from[key];
                  }
                }

                if (getOwnPropertySymbols) {
                  symbols = getOwnPropertySymbols(from);
                  for (var i = 0; i < symbols.length; i++) {
                    if (propIsEnumerable.call(from, symbols[i])) {
                      to[symbols[i]] = from[symbols[i]];
                    }
                  }
                }
              }

              return to;
            };

        /***/
      },

    /***/ './node_modules/prop-types/checkPropTypes.js':
      /*!***************************************************!*\
  !*** ./node_modules/prop-types/checkPropTypes.js ***!
  \***************************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        'use strict';
        /**
         * Copyright (c) 2013-present, Facebook, Inc.
         *
         * This source code is licensed under the MIT license found in the
         * LICENSE file in the root directory of this source tree.
         */

        var printWarning = function () {};

        if (true) {
          var ReactPropTypesSecret = __webpack_require__(
            /*! ./lib/ReactPropTypesSecret */ './node_modules/prop-types/lib/ReactPropTypesSecret.js',
          );
          var loggedTypeFailures = {};
          var has = Function.call.bind(Object.prototype.hasOwnProperty);

          printWarning = function (text) {
            var message = 'Warning: ' + text;
            if (typeof console !== 'undefined') {
              console.error(message);
            }
            try {
              // --- Welcome to debugging React ---
              // This error was thrown as a convenience so that you can use this stack
              // to find the callsite that caused this warning to fire.
              throw new Error(message);
            } catch (x) {}
          };
        }

        /**
         * Assert that the values match with the type specs.
         * Error messages are memorized and will only be shown once.
         *
         * @param {object} typeSpecs Map of name to a ReactPropType
         * @param {object} values Runtime values that need to be type-checked
         * @param {string} location e.g. "prop", "context", "child context"
         * @param {string} componentName Name of the component for error messages.
         * @param {?Function} getStack Returns the component stack.
         * @private
         */
        function checkPropTypes(
          typeSpecs,
          values,
          location,
          componentName,
          getStack,
        ) {
          if (true) {
            for (var typeSpecName in typeSpecs) {
              if (has(typeSpecs, typeSpecName)) {
                var error;
                // Prop type validation may throw. In case they do, we don't want to
                // fail the render phase where it didn't fail before. So we log it.
                // After these have been cleaned up, we'll let them throw.
                try {
                  // This is intentionally an invariant that gets caught. It's the same
                  // behavior as without this statement except with a better message.
                  if (typeof typeSpecs[typeSpecName] !== 'function') {
                    var err = Error(
                      (componentName || 'React class') +
                        ': ' +
                        location +
                        ' type `' +
                        typeSpecName +
                        '` is invalid; ' +
                        'it must be a function, usually from the `prop-types` package, but received `' +
                        typeof typeSpecs[typeSpecName] +
                        '`.',
                    );
                    err.name = 'Invariant Violation';
                    throw err;
                  }
                  error = typeSpecs[typeSpecName](
                    values,
                    typeSpecName,
                    componentName,
                    location,
                    null,
                    ReactPropTypesSecret,
                  );
                } catch (ex) {
                  error = ex;
                }
                if (error && !(error instanceof Error)) {
                  printWarning(
                    (componentName || 'React class') +
                      ': type specification of ' +
                      location +
                      ' `' +
                      typeSpecName +
                      '` is invalid; the type checker ' +
                      'function must return `null` or an `Error` but returned a ' +
                      typeof error +
                      '. ' +
                      'You may have forgotten to pass an argument to the type checker ' +
                      'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
                      'shape all require an argument).',
                  );
                }
                if (
                  error instanceof Error &&
                  !(error.message in loggedTypeFailures)
                ) {
                  // Only monitor this failure once because there tends to be a lot of the
                  // same error.
                  loggedTypeFailures[error.message] = true;

                  var stack = getStack ? getStack() : '';

                  printWarning(
                    'Failed ' +
                      location +
                      ' type: ' +
                      error.message +
                      (stack != null ? stack : ''),
                  );
                }
              }
            }
          }
        }

        /**
         * Resets warning cache when testing.
         *
         * @private
         */
        checkPropTypes.resetWarningCache = function () {
          if (true) {
            loggedTypeFailures = {};
          }
        };

        module.exports = checkPropTypes;

        /***/
      },

    /***/ './node_modules/prop-types/factoryWithTypeCheckers.js':
      /*!************************************************************!*\
  !*** ./node_modules/prop-types/factoryWithTypeCheckers.js ***!
  \************************************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        'use strict';
        /**
         * Copyright (c) 2013-present, Facebook, Inc.
         *
         * This source code is licensed under the MIT license found in the
         * LICENSE file in the root directory of this source tree.
         */

        var ReactIs = __webpack_require__(
          /*! react-is */ './node_modules/react-is/index.js',
        );
        var assign = __webpack_require__(
          /*! object-assign */ './node_modules/object-assign/index.js',
        );

        var ReactPropTypesSecret = __webpack_require__(
          /*! ./lib/ReactPropTypesSecret */ './node_modules/prop-types/lib/ReactPropTypesSecret.js',
        );
        var checkPropTypes = __webpack_require__(
          /*! ./checkPropTypes */ './node_modules/prop-types/checkPropTypes.js',
        );

        var has = Function.call.bind(Object.prototype.hasOwnProperty);
        var printWarning = function () {};

        if (true) {
          printWarning = function (text) {
            var message = 'Warning: ' + text;
            if (typeof console !== 'undefined') {
              console.error(message);
            }
            try {
              // --- Welcome to debugging React ---
              // This error was thrown as a convenience so that you can use this stack
              // to find the callsite that caused this warning to fire.
              throw new Error(message);
            } catch (x) {}
          };
        }

        function emptyFunctionThatReturnsNull() {
          return null;
        }

        module.exports = function (isValidElement, throwOnDirectAccess) {
          /* global Symbol */
          var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
          var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

          /**
           * Returns the iterator method function contained on the iterable object.
           *
           * Be sure to invoke the function with the iterable as context:
           *
           *     var iteratorFn = getIteratorFn(myIterable);
           *     if (iteratorFn) {
           *       var iterator = iteratorFn.call(myIterable);
           *       ...
           *     }
           *
           * @param {?object} maybeIterable
           * @return {?function}
           */
          function getIteratorFn(maybeIterable) {
            var iteratorFn =
              maybeIterable &&
              ((ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL]) ||
                maybeIterable[FAUX_ITERATOR_SYMBOL]);
            if (typeof iteratorFn === 'function') {
              return iteratorFn;
            }
          }

          /**
           * Collection of methods that allow declaration and validation of props that are
           * supplied to React components. Example usage:
           *
           *   var Props = require('ReactPropTypes');
           *   var MyArticle = React.createClass({
           *     propTypes: {
           *       // An optional string prop named "description".
           *       description: Props.string,
           *
           *       // A required enum prop named "category".
           *       category: Props.oneOf(['News','Photos']).isRequired,
           *
           *       // A prop named "dialog" that requires an instance of Dialog.
           *       dialog: Props.instanceOf(Dialog).isRequired
           *     },
           *     render: function() { ... }
           *   });
           *
           * A more formal specification of how these methods are used:
           *
           *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
           *   decl := ReactPropTypes.{type}(.isRequired)?
           *
           * Each and every declaration produces a function with the same signature. This
           * allows the creation of custom validation functions. For example:
           *
           *  var MyLink = React.createClass({
           *    propTypes: {
           *      // An optional string or URI prop named "href".
           *      href: function(props, propName, componentName) {
           *        var propValue = props[propName];
           *        if (propValue != null && typeof propValue !== 'string' &&
           *            !(propValue instanceof URI)) {
           *          return new Error(
           *            'Expected a string or an URI for ' + propName + ' in ' +
           *            componentName
           *          );
           *        }
           *      }
           *    },
           *    render: function() {...}
           *  });
           *
           * @internal
           */

          var ANONYMOUS = '<<anonymous>>';

          // Important!
          // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
          var ReactPropTypes = {
            array: createPrimitiveTypeChecker('array'),
            bool: createPrimitiveTypeChecker('boolean'),
            func: createPrimitiveTypeChecker('function'),
            number: createPrimitiveTypeChecker('number'),
            object: createPrimitiveTypeChecker('object'),
            string: createPrimitiveTypeChecker('string'),
            symbol: createPrimitiveTypeChecker('symbol'),

            any: createAnyTypeChecker(),
            arrayOf: createArrayOfTypeChecker,
            element: createElementTypeChecker(),
            elementType: createElementTypeTypeChecker(),
            instanceOf: createInstanceTypeChecker,
            node: createNodeChecker(),
            objectOf: createObjectOfTypeChecker,
            oneOf: createEnumTypeChecker,
            oneOfType: createUnionTypeChecker,
            shape: createShapeTypeChecker,
            exact: createStrictShapeTypeChecker,
          };

          /**
           * inlined Object.is polyfill to avoid requiring consumers ship their own
           * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
           */
          /*eslint-disable no-self-compare*/
          function is(x, y) {
            // SameValue algorithm
            if (x === y) {
              // Steps 1-5, 7-10
              // Steps 6.b-6.e: +0 != -0
              return x !== 0 || 1 / x === 1 / y;
            } else {
              // Step 6.a: NaN == NaN
              return x !== x && y !== y;
            }
          }
          /*eslint-enable no-self-compare*/

          /**
           * We use an Error-like object for backward compatibility as people may call
           * PropTypes directly and inspect their output. However, we don't use real
           * Errors anymore. We don't inspect their stack anyway, and creating them
           * is prohibitively expensive if they are created too often, such as what
           * happens in oneOfType() for any type before the one that matched.
           */
          function PropTypeError(message) {
            this.message = message;
            this.stack = '';
          }
          // Make `instanceof Error` still work for returned errors.
          PropTypeError.prototype = Error.prototype;

          function createChainableTypeChecker(validate) {
            if (true) {
              var manualPropTypeCallCache = {};
              var manualPropTypeWarningCount = 0;
            }
            function checkType(
              isRequired,
              props,
              propName,
              componentName,
              location,
              propFullName,
              secret,
            ) {
              componentName = componentName || ANONYMOUS;
              propFullName = propFullName || propName;

              if (secret !== ReactPropTypesSecret) {
                if (throwOnDirectAccess) {
                  // New behavior only for users of `prop-types` package
                  var err = new Error(
                    'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
                      'Use `PropTypes.checkPropTypes()` to call them. ' +
                      'Read more at http://fb.me/use-check-prop-types',
                  );
                  err.name = 'Invariant Violation';
                  throw err;
                } else if (true && typeof console !== 'undefined') {
                  // Old behavior for people using React.PropTypes
                  var cacheKey = componentName + ':' + propName;
                  if (
                    !manualPropTypeCallCache[cacheKey] &&
                    // Avoid spamming the console because they are often not actionable except for lib authors
                    manualPropTypeWarningCount < 3
                  ) {
                    printWarning(
                      'You are manually calling a React.PropTypes validation ' +
                        'function for the `' +
                        propFullName +
                        '` prop on `' +
                        componentName +
                        '`. This is deprecated ' +
                        'and will throw in the standalone `prop-types` package. ' +
                        'You may be seeing this warning due to a third-party PropTypes ' +
                        'library. See https://fb.me/react-warning-dont-call-proptypes ' +
                        'for details.',
                    );
                    manualPropTypeCallCache[cacheKey] = true;
                    manualPropTypeWarningCount++;
                  }
                }
              }
              if (props[propName] == null) {
                if (isRequired) {
                  if (props[propName] === null) {
                    return new PropTypeError(
                      'The ' +
                        location +
                        ' `' +
                        propFullName +
                        '` is marked as required ' +
                        ('in `' +
                          componentName +
                          '`, but its value is `null`.'),
                    );
                  }
                  return new PropTypeError(
                    'The ' +
                      location +
                      ' `' +
                      propFullName +
                      '` is marked as required in ' +
                      ('`' +
                        componentName +
                        '`, but its value is `undefined`.'),
                  );
                }
                return null;
              } else {
                return validate(
                  props,
                  propName,
                  componentName,
                  location,
                  propFullName,
                );
              }
            }

            var chainedCheckType = checkType.bind(null, false);
            chainedCheckType.isRequired = checkType.bind(null, true);

            return chainedCheckType;
          }

          function createPrimitiveTypeChecker(expectedType) {
            function validate(
              props,
              propName,
              componentName,
              location,
              propFullName,
              secret,
            ) {
              var propValue = props[propName];
              var propType = getPropType(propValue);
              if (propType !== expectedType) {
                // `propValue` being instance of, say, date/regexp, pass the 'object'
                // check, but we can offer a more precise error message here rather than
                // 'of type `object`'.
                var preciseType = getPreciseType(propValue);

                return new PropTypeError(
                  'Invalid ' +
                    location +
                    ' `' +
                    propFullName +
                    '` of type ' +
                    ('`' +
                      preciseType +
                      '` supplied to `' +
                      componentName +
                      '`, expected ') +
                    ('`' + expectedType + '`.'),
                );
              }
              return null;
            }
            return createChainableTypeChecker(validate);
          }

          function createAnyTypeChecker() {
            return createChainableTypeChecker(emptyFunctionThatReturnsNull);
          }

          function createArrayOfTypeChecker(typeChecker) {
            function validate(
              props,
              propName,
              componentName,
              location,
              propFullName,
            ) {
              if (typeof typeChecker !== 'function') {
                return new PropTypeError(
                  'Property `' +
                    propFullName +
                    '` of component `' +
                    componentName +
                    '` has invalid PropType notation inside arrayOf.',
                );
              }
              var propValue = props[propName];
              if (!Array.isArray(propValue)) {
                var propType = getPropType(propValue);
                return new PropTypeError(
                  'Invalid ' +
                    location +
                    ' `' +
                    propFullName +
                    '` of type ' +
                    ('`' +
                      propType +
                      '` supplied to `' +
                      componentName +
                      '`, expected an array.'),
                );
              }
              for (var i = 0; i < propValue.length; i++) {
                var error = typeChecker(
                  propValue,
                  i,
                  componentName,
                  location,
                  propFullName + '[' + i + ']',
                  ReactPropTypesSecret,
                );
                if (error instanceof Error) {
                  return error;
                }
              }
              return null;
            }
            return createChainableTypeChecker(validate);
          }

          function createElementTypeChecker() {
            function validate(
              props,
              propName,
              componentName,
              location,
              propFullName,
            ) {
              var propValue = props[propName];
              if (!isValidElement(propValue)) {
                var propType = getPropType(propValue);
                return new PropTypeError(
                  'Invalid ' +
                    location +
                    ' `' +
                    propFullName +
                    '` of type ' +
                    ('`' +
                      propType +
                      '` supplied to `' +
                      componentName +
                      '`, expected a single ReactElement.'),
                );
              }
              return null;
            }
            return createChainableTypeChecker(validate);
          }

          function createElementTypeTypeChecker() {
            function validate(
              props,
              propName,
              componentName,
              location,
              propFullName,
            ) {
              var propValue = props[propName];
              if (!ReactIs.isValidElementType(propValue)) {
                var propType = getPropType(propValue);
                return new PropTypeError(
                  'Invalid ' +
                    location +
                    ' `' +
                    propFullName +
                    '` of type ' +
                    ('`' +
                      propType +
                      '` supplied to `' +
                      componentName +
                      '`, expected a single ReactElement type.'),
                );
              }
              return null;
            }
            return createChainableTypeChecker(validate);
          }

          function createInstanceTypeChecker(expectedClass) {
            function validate(
              props,
              propName,
              componentName,
              location,
              propFullName,
            ) {
              if (!(props[propName] instanceof expectedClass)) {
                var expectedClassName = expectedClass.name || ANONYMOUS;
                var actualClassName = getClassName(props[propName]);
                return new PropTypeError(
                  'Invalid ' +
                    location +
                    ' `' +
                    propFullName +
                    '` of type ' +
                    ('`' +
                      actualClassName +
                      '` supplied to `' +
                      componentName +
                      '`, expected ') +
                    ('instance of `' + expectedClassName + '`.'),
                );
              }
              return null;
            }
            return createChainableTypeChecker(validate);
          }

          function createEnumTypeChecker(expectedValues) {
            if (!Array.isArray(expectedValues)) {
              if (true) {
                if (arguments.length > 1) {
                  printWarning(
                    'Invalid arguments supplied to oneOf, expected an array, got ' +
                      arguments.length +
                      ' arguments. ' +
                      'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).',
                  );
                } else {
                  printWarning(
                    'Invalid argument supplied to oneOf, expected an array.',
                  );
                }
              }
              return emptyFunctionThatReturnsNull;
            }

            function validate(
              props,
              propName,
              componentName,
              location,
              propFullName,
            ) {
              var propValue = props[propName];
              for (var i = 0; i < expectedValues.length; i++) {
                if (is(propValue, expectedValues[i])) {
                  return null;
                }
              }

              var valuesString = JSON.stringify(
                expectedValues,
                function replacer(key, value) {
                  var type = getPreciseType(value);
                  if (type === 'symbol') {
                    return String(value);
                  }
                  return value;
                },
              );
              return new PropTypeError(
                'Invalid ' +
                  location +
                  ' `' +
                  propFullName +
                  '` of value `' +
                  String(propValue) +
                  '` ' +
                  ('supplied to `' +
                    componentName +
                    '`, expected one of ' +
                    valuesString +
                    '.'),
              );
            }
            return createChainableTypeChecker(validate);
          }

          function createObjectOfTypeChecker(typeChecker) {
            function validate(
              props,
              propName,
              componentName,
              location,
              propFullName,
            ) {
              if (typeof typeChecker !== 'function') {
                return new PropTypeError(
                  'Property `' +
                    propFullName +
                    '` of component `' +
                    componentName +
                    '` has invalid PropType notation inside objectOf.',
                );
              }
              var propValue = props[propName];
              var propType = getPropType(propValue);
              if (propType !== 'object') {
                return new PropTypeError(
                  'Invalid ' +
                    location +
                    ' `' +
                    propFullName +
                    '` of type ' +
                    ('`' +
                      propType +
                      '` supplied to `' +
                      componentName +
                      '`, expected an object.'),
                );
              }
              for (var key in propValue) {
                if (has(propValue, key)) {
                  var error = typeChecker(
                    propValue,
                    key,
                    componentName,
                    location,
                    propFullName + '.' + key,
                    ReactPropTypesSecret,
                  );
                  if (error instanceof Error) {
                    return error;
                  }
                }
              }
              return null;
            }
            return createChainableTypeChecker(validate);
          }

          function createUnionTypeChecker(arrayOfTypeCheckers) {
            if (!Array.isArray(arrayOfTypeCheckers)) {
              true
                ? printWarning(
                    'Invalid argument supplied to oneOfType, expected an instance of array.',
                  )
                : 0;
              return emptyFunctionThatReturnsNull;
            }

            for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
              var checker = arrayOfTypeCheckers[i];
              if (typeof checker !== 'function') {
                printWarning(
                  'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
                    'received ' +
                    getPostfixForTypeWarning(checker) +
                    ' at index ' +
                    i +
                    '.',
                );
                return emptyFunctionThatReturnsNull;
              }
            }

            function validate(
              props,
              propName,
              componentName,
              location,
              propFullName,
            ) {
              for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
                var checker = arrayOfTypeCheckers[i];
                if (
                  checker(
                    props,
                    propName,
                    componentName,
                    location,
                    propFullName,
                    ReactPropTypesSecret,
                  ) == null
                ) {
                  return null;
                }
              }

              return new PropTypeError(
                'Invalid ' +
                  location +
                  ' `' +
                  propFullName +
                  '` supplied to ' +
                  ('`' + componentName + '`.'),
              );
            }
            return createChainableTypeChecker(validate);
          }

          function createNodeChecker() {
            function validate(
              props,
              propName,
              componentName,
              location,
              propFullName,
            ) {
              if (!isNode(props[propName])) {
                return new PropTypeError(
                  'Invalid ' +
                    location +
                    ' `' +
                    propFullName +
                    '` supplied to ' +
                    ('`' + componentName + '`, expected a ReactNode.'),
                );
              }
              return null;
            }
            return createChainableTypeChecker(validate);
          }

          function createShapeTypeChecker(shapeTypes) {
            function validate(
              props,
              propName,
              componentName,
              location,
              propFullName,
            ) {
              var propValue = props[propName];
              var propType = getPropType(propValue);
              if (propType !== 'object') {
                return new PropTypeError(
                  'Invalid ' +
                    location +
                    ' `' +
                    propFullName +
                    '` of type `' +
                    propType +
                    '` ' +
                    ('supplied to `' + componentName + '`, expected `object`.'),
                );
              }
              for (var key in shapeTypes) {
                var checker = shapeTypes[key];
                if (!checker) {
                  continue;
                }
                var error = checker(
                  propValue,
                  key,
                  componentName,
                  location,
                  propFullName + '.' + key,
                  ReactPropTypesSecret,
                );
                if (error) {
                  return error;
                }
              }
              return null;
            }
            return createChainableTypeChecker(validate);
          }

          function createStrictShapeTypeChecker(shapeTypes) {
            function validate(
              props,
              propName,
              componentName,
              location,
              propFullName,
            ) {
              var propValue = props[propName];
              var propType = getPropType(propValue);
              if (propType !== 'object') {
                return new PropTypeError(
                  'Invalid ' +
                    location +
                    ' `' +
                    propFullName +
                    '` of type `' +
                    propType +
                    '` ' +
                    ('supplied to `' + componentName + '`, expected `object`.'),
                );
              }
              // We need to check all keys in case some are required but missing from
              // props.
              var allKeys = assign({}, props[propName], shapeTypes);
              for (var key in allKeys) {
                var checker = shapeTypes[key];
                if (!checker) {
                  return new PropTypeError(
                    'Invalid ' +
                      location +
                      ' `' +
                      propFullName +
                      '` key `' +
                      key +
                      '` supplied to `' +
                      componentName +
                      '`.' +
                      '\nBad object: ' +
                      JSON.stringify(props[propName], null, '  ') +
                      '\nValid keys: ' +
                      JSON.stringify(Object.keys(shapeTypes), null, '  '),
                  );
                }
                var error = checker(
                  propValue,
                  key,
                  componentName,
                  location,
                  propFullName + '.' + key,
                  ReactPropTypesSecret,
                );
                if (error) {
                  return error;
                }
              }
              return null;
            }

            return createChainableTypeChecker(validate);
          }

          function isNode(propValue) {
            switch (typeof propValue) {
              case 'number':
              case 'string':
              case 'undefined':
                return true;
              case 'boolean':
                return !propValue;
              case 'object':
                if (Array.isArray(propValue)) {
                  return propValue.every(isNode);
                }
                if (propValue === null || isValidElement(propValue)) {
                  return true;
                }

                var iteratorFn = getIteratorFn(propValue);
                if (iteratorFn) {
                  var iterator = iteratorFn.call(propValue);
                  var step;
                  if (iteratorFn !== propValue.entries) {
                    while (!(step = iterator.next()).done) {
                      if (!isNode(step.value)) {
                        return false;
                      }
                    }
                  } else {
                    // Iterator will provide entry [k,v] tuples rather than values.
                    while (!(step = iterator.next()).done) {
                      var entry = step.value;
                      if (entry) {
                        if (!isNode(entry[1])) {
                          return false;
                        }
                      }
                    }
                  }
                } else {
                  return false;
                }

                return true;
              default:
                return false;
            }
          }

          function isSymbol(propType, propValue) {
            // Native Symbol.
            if (propType === 'symbol') {
              return true;
            }

            // falsy value can't be a Symbol
            if (!propValue) {
              return false;
            }

            // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
            if (propValue['@@toStringTag'] === 'Symbol') {
              return true;
            }

            // Fallback for non-spec compliant Symbols which are polyfilled.
            if (typeof Symbol === 'function' && propValue instanceof Symbol) {
              return true;
            }

            return false;
          }

          // Equivalent of `typeof` but with special handling for array and regexp.
          function getPropType(propValue) {
            var propType = typeof propValue;
            if (Array.isArray(propValue)) {
              return 'array';
            }
            if (propValue instanceof RegExp) {
              // Old webkits (at least until Android 4.0) return 'function' rather than
              // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
              // passes PropTypes.object.
              return 'object';
            }
            if (isSymbol(propType, propValue)) {
              return 'symbol';
            }
            return propType;
          }

          // This handles more types than `getPropType`. Only used for error messages.
          // See `createPrimitiveTypeChecker`.
          function getPreciseType(propValue) {
            if (typeof propValue === 'undefined' || propValue === null) {
              return '' + propValue;
            }
            var propType = getPropType(propValue);
            if (propType === 'object') {
              if (propValue instanceof Date) {
                return 'date';
              } else if (propValue instanceof RegExp) {
                return 'regexp';
              }
            }
            return propType;
          }

          // Returns a string that is postfixed to a warning about an invalid type.
          // For example, "undefined" or "of type array"
          function getPostfixForTypeWarning(value) {
            var type = getPreciseType(value);
            switch (type) {
              case 'array':
              case 'object':
                return 'an ' + type;
              case 'boolean':
              case 'date':
              case 'regexp':
                return 'a ' + type;
              default:
                return type;
            }
          }

          // Returns class name of the object, if any.
          function getClassName(propValue) {
            if (!propValue.constructor || !propValue.constructor.name) {
              return ANONYMOUS;
            }
            return propValue.constructor.name;
          }

          ReactPropTypes.checkPropTypes = checkPropTypes;
          ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
          ReactPropTypes.PropTypes = ReactPropTypes;

          return ReactPropTypes;
        };

        /***/
      },

    /***/ './node_modules/prop-types/index.js':
      /*!******************************************!*\
  !*** ./node_modules/prop-types/index.js ***!
  \******************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        /**
         * Copyright (c) 2013-present, Facebook, Inc.
         *
         * This source code is licensed under the MIT license found in the
         * LICENSE file in the root directory of this source tree.
         */

        if (true) {
          var ReactIs = __webpack_require__(
            /*! react-is */ './node_modules/react-is/index.js',
          );

          // By explicitly using `prop-types` you are opting into new development behavior.
          // http://fb.me/prop-types-in-prod
          var throwOnDirectAccess = true;
          module.exports = __webpack_require__(
            /*! ./factoryWithTypeCheckers */ './node_modules/prop-types/factoryWithTypeCheckers.js',
          )(ReactIs.isElement, throwOnDirectAccess);
        } else {
        }

        /***/
      },

    /***/ './node_modules/prop-types/lib/ReactPropTypesSecret.js':
      /*!*************************************************************!*\
  !*** ./node_modules/prop-types/lib/ReactPropTypesSecret.js ***!
  \*************************************************************/
      /***/ (module) => {
        'use strict';
        /**
         * Copyright (c) 2013-present, Facebook, Inc.
         *
         * This source code is licensed under the MIT license found in the
         * LICENSE file in the root directory of this source tree.
         */

        var ReactPropTypesSecret =
          'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

        module.exports = ReactPropTypesSecret;

        /***/
      },

    /***/ './node_modules/react-fast-compare/index.js':
      /*!**************************************************!*\
  !*** ./node_modules/react-fast-compare/index.js ***!
  \**************************************************/
      /***/ (module) => {
        /* global Map:readonly, Set:readonly, ArrayBuffer:readonly */

        var hasElementType = typeof Element !== 'undefined';
        var hasMap = typeof Map === 'function';
        var hasSet = typeof Set === 'function';
        var hasArrayBuffer =
          typeof ArrayBuffer === 'function' && !!ArrayBuffer.isView;

        // Note: We **don't** need `envHasBigInt64Array` in fde es6/index.js

        function equal(a, b) {
          // START: fast-deep-equal es6/index.js 3.1.1
          if (a === b) return true;

          if (a && b && typeof a == 'object' && typeof b == 'object') {
            if (a.constructor !== b.constructor) return false;

            var length, i, keys;
            if (Array.isArray(a)) {
              length = a.length;
              if (length != b.length) return false;
              for (i = length; i-- !== 0; )
                if (!equal(a[i], b[i])) return false;
              return true;
            }

            // START: Modifications:
            // 1. Extra `has<Type> &&` helpers in initial condition allow es6 code
            //    to co-exist with es5.
            // 2. Replace `for of` with es5 compliant iteration using `for`.
            //    Basically, take:
            //
            //    ```js
            //    for (i of a.entries())
            //      if (!b.has(i[0])) return false;
            //    ```
            //
            //    ... and convert to:
            //
            //    ```js
            //    it = a.entries();
            //    while (!(i = it.next()).done)
            //      if (!b.has(i.value[0])) return false;
            //    ```
            //
            //    **Note**: `i` access switches to `i.value`.
            var it;
            if (hasMap && a instanceof Map && b instanceof Map) {
              if (a.size !== b.size) return false;
              it = a.entries();
              while (!(i = it.next()).done)
                if (!b.has(i.value[0])) return false;
              it = a.entries();
              while (!(i = it.next()).done)
                if (!equal(i.value[1], b.get(i.value[0]))) return false;
              return true;
            }

            if (hasSet && a instanceof Set && b instanceof Set) {
              if (a.size !== b.size) return false;
              it = a.entries();
              while (!(i = it.next()).done)
                if (!b.has(i.value[0])) return false;
              return true;
            }
            // END: Modifications

            if (
              hasArrayBuffer &&
              ArrayBuffer.isView(a) &&
              ArrayBuffer.isView(b)
            ) {
              length = a.length;
              if (length != b.length) return false;
              for (i = length; i-- !== 0; ) if (a[i] !== b[i]) return false;
              return true;
            }

            if (a.constructor === RegExp)
              return a.source === b.source && a.flags === b.flags;
            if (a.valueOf !== Object.prototype.valueOf)
              return a.valueOf() === b.valueOf();
            if (a.toString !== Object.prototype.toString)
              return a.toString() === b.toString();

            keys = Object.keys(a);
            length = keys.length;
            if (length !== Object.keys(b).length) return false;

            for (i = length; i-- !== 0; )
              if (!Object.prototype.hasOwnProperty.call(b, keys[i]))
                return false;
            // END: fast-deep-equal

            // START: react-fast-compare
            // custom handling for DOM elements
            if (hasElementType && a instanceof Element) return false;

            // custom handling for React/Preact
            for (i = length; i-- !== 0; ) {
              if (
                (keys[i] === '_owner' ||
                  keys[i] === '__v' ||
                  keys[i] === '__o') &&
                a.$$typeof
              ) {
                // React-specific: avoid traversing React elements' _owner
                // Preact-specific: avoid traversing Preact elements' __v and __o
                //    __v = $_original / $_vnode
                //    __o = $_owner
                // These properties contain circular references and are not needed when
                // comparing the actual elements (and not their owners)
                // .$$typeof and ._store on just reasonable markers of elements

                continue;
              }

              // all other properties should be traversed as usual
              if (!equal(a[keys[i]], b[keys[i]])) return false;
            }
            // END: react-fast-compare

            // START: fast-deep-equal
            return true;
          }

          return a !== a && b !== b;
        }
        // end fast-deep-equal

        module.exports = function isEqual(a, b) {
          try {
            return equal(a, b);
          } catch (error) {
            if ((error.message || '').match(/stack|recursion/i)) {
              // warn on circular references, don't crash
              // browsers give this different errors name and messages:
              // chrome/safari: "RangeError", "Maximum call stack size exceeded"
              // firefox: "InternalError", too much recursion"
              // edge: "Error", "Out of stack space"
              console.warn('react-fast-compare cannot handle circular refs');
              return false;
            }
            // some other error. we should definitely know about these
            throw error;
          }
        };

        /***/
      },

    /***/ './node_modules/react-helmet/es/Helmet.js':
      /*!************************************************!*\
  !*** ./node_modules/react-helmet/es/Helmet.js ***!
  \************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__,
      ) => {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
          /* harmony export */ Helmet: () => /* binding */ HelmetExport,
          /* harmony export */
        });
        /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! prop-types */ './node_modules/prop-types/index.js',
          );
        /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default =
          /*#__PURE__*/ __webpack_require__.n(
            prop_types__WEBPACK_IMPORTED_MODULE_0__,
          );
        /* harmony import */ var react_side_effect__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! react-side-effect */ './node_modules/react-side-effect/lib/index.js',
          );
        /* harmony import */ var react_side_effect__WEBPACK_IMPORTED_MODULE_1___default =
          /*#__PURE__*/ __webpack_require__.n(
            react_side_effect__WEBPACK_IMPORTED_MODULE_1__,
          );
        /* harmony import */ var react_fast_compare__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! react-fast-compare */ './node_modules/react-fast-compare/index.js',
          );
        /* harmony import */ var react_fast_compare__WEBPACK_IMPORTED_MODULE_2___default =
          /*#__PURE__*/ __webpack_require__.n(
            react_fast_compare__WEBPACK_IMPORTED_MODULE_2__,
          );
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(/*! react */ './node_modules/react/index.js');
        /* harmony import */ var object_assign__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(
            /*! object-assign */ './node_modules/object-assign/index.js',
          );
        /* harmony import */ var object_assign__WEBPACK_IMPORTED_MODULE_4___default =
          /*#__PURE__*/ __webpack_require__.n(
            object_assign__WEBPACK_IMPORTED_MODULE_4__,
          );

        var ATTRIBUTE_NAMES = {
          BODY: 'bodyAttributes',
          HTML: 'htmlAttributes',
          TITLE: 'titleAttributes',
        };

        var TAG_NAMES = {
          BASE: 'base',
          BODY: 'body',
          HEAD: 'head',
          HTML: 'html',
          LINK: 'link',
          META: 'meta',
          NOSCRIPT: 'noscript',
          SCRIPT: 'script',
          STYLE: 'style',
          TITLE: 'title',
        };

        var VALID_TAG_NAMES = Object.keys(TAG_NAMES).map(function (name) {
          return TAG_NAMES[name];
        });

        var TAG_PROPERTIES = {
          CHARSET: 'charset',
          CSS_TEXT: 'cssText',
          HREF: 'href',
          HTTPEQUIV: 'http-equiv',
          INNER_HTML: 'innerHTML',
          ITEM_PROP: 'itemprop',
          NAME: 'name',
          PROPERTY: 'property',
          REL: 'rel',
          SRC: 'src',
          TARGET: 'target',
        };

        var REACT_TAG_MAP = {
          accesskey: 'accessKey',
          charset: 'charSet',
          class: 'className',
          contenteditable: 'contentEditable',
          contextmenu: 'contextMenu',
          'http-equiv': 'httpEquiv',
          itemprop: 'itemProp',
          tabindex: 'tabIndex',
        };

        var HELMET_PROPS = {
          DEFAULT_TITLE: 'defaultTitle',
          DEFER: 'defer',
          ENCODE_SPECIAL_CHARACTERS: 'encodeSpecialCharacters',
          ON_CHANGE_CLIENT_STATE: 'onChangeClientState',
          TITLE_TEMPLATE: 'titleTemplate',
        };

        var HTML_TAG_MAP = Object.keys(REACT_TAG_MAP).reduce(function (
          obj,
          key,
        ) {
          obj[REACT_TAG_MAP[key]] = key;
          return obj;
        },
        {});

        var SELF_CLOSING_TAGS = [
          TAG_NAMES.NOSCRIPT,
          TAG_NAMES.SCRIPT,
          TAG_NAMES.STYLE,
        ];

        var HELMET_ATTRIBUTE = 'data-react-helmet';

        var _typeof =
          typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol'
            ? function (obj) {
                return typeof obj;
              }
            : function (obj) {
                return obj &&
                  typeof Symbol === 'function' &&
                  obj.constructor === Symbol &&
                  obj !== Symbol.prototype
                  ? 'symbol'
                  : typeof obj;
              };

        var classCallCheck = function (instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError('Cannot call a class as a function');
          }
        };

        var createClass = (function () {
          function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
              var descriptor = props[i];
              descriptor.enumerable = descriptor.enumerable || false;
              descriptor.configurable = true;
              if ('value' in descriptor) descriptor.writable = true;
              Object.defineProperty(target, descriptor.key, descriptor);
            }
          }

          return function (Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);
            if (staticProps) defineProperties(Constructor, staticProps);
            return Constructor;
          };
        })();

        var _extends =
          Object.assign ||
          function (target) {
            for (var i = 1; i < arguments.length; i++) {
              var source = arguments[i];

              for (var key in source) {
                if (Object.prototype.hasOwnProperty.call(source, key)) {
                  target[key] = source[key];
                }
              }
            }

            return target;
          };

        var inherits = function (subClass, superClass) {
          if (typeof superClass !== 'function' && superClass !== null) {
            throw new TypeError(
              'Super expression must either be null or a function, not ' +
                typeof superClass,
            );
          }

          subClass.prototype = Object.create(
            superClass && superClass.prototype,
            {
              constructor: {
                value: subClass,
                enumerable: false,
                writable: true,
                configurable: true,
              },
            },
          );
          if (superClass)
            Object.setPrototypeOf
              ? Object.setPrototypeOf(subClass, superClass)
              : (subClass.__proto__ = superClass);
        };

        var objectWithoutProperties = function (obj, keys) {
          var target = {};

          for (var i in obj) {
            if (keys.indexOf(i) >= 0) continue;
            if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
            target[i] = obj[i];
          }

          return target;
        };

        var possibleConstructorReturn = function (self, call) {
          if (!self) {
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called",
            );
          }

          return call &&
            (typeof call === 'object' || typeof call === 'function')
            ? call
            : self;
        };

        var encodeSpecialCharacters = function encodeSpecialCharacters(str) {
          var encode =
            arguments.length > 1 && arguments[1] !== undefined
              ? arguments[1]
              : true;

          if (encode === false) {
            return String(str);
          }

          return String(str)
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#x27;');
        };

        var getTitleFromPropsList = function getTitleFromPropsList(propsList) {
          var innermostTitle = getInnermostProperty(propsList, TAG_NAMES.TITLE);
          var innermostTemplate = getInnermostProperty(
            propsList,
            HELMET_PROPS.TITLE_TEMPLATE,
          );

          if (innermostTemplate && innermostTitle) {
            // use function arg to avoid need to escape $ characters
            return innermostTemplate.replace(/%s/g, function () {
              return Array.isArray(innermostTitle)
                ? innermostTitle.join('')
                : innermostTitle;
            });
          }

          var innermostDefaultTitle = getInnermostProperty(
            propsList,
            HELMET_PROPS.DEFAULT_TITLE,
          );

          return innermostTitle || innermostDefaultTitle || undefined;
        };

        var getOnChangeClientState = function getOnChangeClientState(
          propsList,
        ) {
          return (
            getInnermostProperty(
              propsList,
              HELMET_PROPS.ON_CHANGE_CLIENT_STATE,
            ) || function () {}
          );
        };

        var getAttributesFromPropsList = function getAttributesFromPropsList(
          tagType,
          propsList,
        ) {
          return propsList
            .filter(function (props) {
              return typeof props[tagType] !== 'undefined';
            })
            .map(function (props) {
              return props[tagType];
            })
            .reduce(function (tagAttrs, current) {
              return _extends({}, tagAttrs, current);
            }, {});
        };

        var getBaseTagFromPropsList = function getBaseTagFromPropsList(
          primaryAttributes,
          propsList,
        ) {
          return propsList
            .filter(function (props) {
              return typeof props[TAG_NAMES.BASE] !== 'undefined';
            })
            .map(function (props) {
              return props[TAG_NAMES.BASE];
            })
            .reverse()
            .reduce(function (innermostBaseTag, tag) {
              if (!innermostBaseTag.length) {
                var keys = Object.keys(tag);

                for (var i = 0; i < keys.length; i++) {
                  var attributeKey = keys[i];
                  var lowerCaseAttributeKey = attributeKey.toLowerCase();

                  if (
                    primaryAttributes.indexOf(lowerCaseAttributeKey) !== -1 &&
                    tag[lowerCaseAttributeKey]
                  ) {
                    return innermostBaseTag.concat(tag);
                  }
                }
              }

              return innermostBaseTag;
            }, []);
        };

        var getTagsFromPropsList = function getTagsFromPropsList(
          tagName,
          primaryAttributes,
          propsList,
        ) {
          // Calculate list of tags, giving priority innermost component (end of the propslist)
          var approvedSeenTags = {};

          return propsList
            .filter(function (props) {
              if (Array.isArray(props[tagName])) {
                return true;
              }
              if (typeof props[tagName] !== 'undefined') {
                warn(
                  'Helmet: ' +
                    tagName +
                    ' should be of type "Array". Instead found type "' +
                    _typeof(props[tagName]) +
                    '"',
                );
              }
              return false;
            })
            .map(function (props) {
              return props[tagName];
            })
            .reverse()
            .reduce(function (approvedTags, instanceTags) {
              var instanceSeenTags = {};

              instanceTags
                .filter(function (tag) {
                  var primaryAttributeKey = void 0;
                  var keys = Object.keys(tag);
                  for (var i = 0; i < keys.length; i++) {
                    var attributeKey = keys[i];
                    var lowerCaseAttributeKey = attributeKey.toLowerCase();

                    // Special rule with link tags, since rel and href are both primary tags, rel takes priority
                    if (
                      primaryAttributes.indexOf(lowerCaseAttributeKey) !== -1 &&
                      !(
                        primaryAttributeKey === TAG_PROPERTIES.REL &&
                        tag[primaryAttributeKey].toLowerCase() === 'canonical'
                      ) &&
                      !(
                        lowerCaseAttributeKey === TAG_PROPERTIES.REL &&
                        tag[lowerCaseAttributeKey].toLowerCase() ===
                          'stylesheet'
                      )
                    ) {
                      primaryAttributeKey = lowerCaseAttributeKey;
                    }
                    // Special case for innerHTML which doesn't work lowercased
                    if (
                      primaryAttributes.indexOf(attributeKey) !== -1 &&
                      (attributeKey === TAG_PROPERTIES.INNER_HTML ||
                        attributeKey === TAG_PROPERTIES.CSS_TEXT ||
                        attributeKey === TAG_PROPERTIES.ITEM_PROP)
                    ) {
                      primaryAttributeKey = attributeKey;
                    }
                  }

                  if (!primaryAttributeKey || !tag[primaryAttributeKey]) {
                    return false;
                  }

                  var value = tag[primaryAttributeKey].toLowerCase();

                  if (!approvedSeenTags[primaryAttributeKey]) {
                    approvedSeenTags[primaryAttributeKey] = {};
                  }

                  if (!instanceSeenTags[primaryAttributeKey]) {
                    instanceSeenTags[primaryAttributeKey] = {};
                  }

                  if (!approvedSeenTags[primaryAttributeKey][value]) {
                    instanceSeenTags[primaryAttributeKey][value] = true;
                    return true;
                  }

                  return false;
                })
                .reverse()
                .forEach(function (tag) {
                  return approvedTags.push(tag);
                });

              // Update seen tags with tags from this instance
              var keys = Object.keys(instanceSeenTags);
              for (var i = 0; i < keys.length; i++) {
                var attributeKey = keys[i];
                var tagUnion =
                  object_assign__WEBPACK_IMPORTED_MODULE_4___default()(
                    {},
                    approvedSeenTags[attributeKey],
                    instanceSeenTags[attributeKey],
                  );

                approvedSeenTags[attributeKey] = tagUnion;
              }

              return approvedTags;
            }, [])
            .reverse();
        };

        var getInnermostProperty = function getInnermostProperty(
          propsList,
          property,
        ) {
          for (var i = propsList.length - 1; i >= 0; i--) {
            var props = propsList[i];

            if (props.hasOwnProperty(property)) {
              return props[property];
            }
          }

          return null;
        };

        var reducePropsToState = function reducePropsToState(propsList) {
          return {
            baseTag: getBaseTagFromPropsList(
              [TAG_PROPERTIES.HREF, TAG_PROPERTIES.TARGET],
              propsList,
            ),
            bodyAttributes: getAttributesFromPropsList(
              ATTRIBUTE_NAMES.BODY,
              propsList,
            ),
            defer: getInnermostProperty(propsList, HELMET_PROPS.DEFER),
            encode: getInnermostProperty(
              propsList,
              HELMET_PROPS.ENCODE_SPECIAL_CHARACTERS,
            ),
            htmlAttributes: getAttributesFromPropsList(
              ATTRIBUTE_NAMES.HTML,
              propsList,
            ),
            linkTags: getTagsFromPropsList(
              TAG_NAMES.LINK,
              [TAG_PROPERTIES.REL, TAG_PROPERTIES.HREF],
              propsList,
            ),
            metaTags: getTagsFromPropsList(
              TAG_NAMES.META,
              [
                TAG_PROPERTIES.NAME,
                TAG_PROPERTIES.CHARSET,
                TAG_PROPERTIES.HTTPEQUIV,
                TAG_PROPERTIES.PROPERTY,
                TAG_PROPERTIES.ITEM_PROP,
              ],
              propsList,
            ),
            noscriptTags: getTagsFromPropsList(
              TAG_NAMES.NOSCRIPT,
              [TAG_PROPERTIES.INNER_HTML],
              propsList,
            ),
            onChangeClientState: getOnChangeClientState(propsList),
            scriptTags: getTagsFromPropsList(
              TAG_NAMES.SCRIPT,
              [TAG_PROPERTIES.SRC, TAG_PROPERTIES.INNER_HTML],
              propsList,
            ),
            styleTags: getTagsFromPropsList(
              TAG_NAMES.STYLE,
              [TAG_PROPERTIES.CSS_TEXT],
              propsList,
            ),
            title: getTitleFromPropsList(propsList),
            titleAttributes: getAttributesFromPropsList(
              ATTRIBUTE_NAMES.TITLE,
              propsList,
            ),
          };
        };

        var rafPolyfill = (function () {
          var clock = Date.now();

          return function (callback) {
            var currentTime = Date.now();

            if (currentTime - clock > 16) {
              clock = currentTime;
              callback(currentTime);
            } else {
              setTimeout(function () {
                rafPolyfill(callback);
              }, 0);
            }
          };
        })();

        var cafPolyfill = function cafPolyfill(id) {
          return clearTimeout(id);
        };

        var requestAnimationFrame =
          typeof window !== 'undefined'
            ? (window.requestAnimationFrame &&
                window.requestAnimationFrame.bind(window)) ||
              window.webkitRequestAnimationFrame ||
              window.mozRequestAnimationFrame ||
              rafPolyfill
            : global.requestAnimationFrame || rafPolyfill;

        var cancelAnimationFrame =
          typeof window !== 'undefined'
            ? window.cancelAnimationFrame ||
              window.webkitCancelAnimationFrame ||
              window.mozCancelAnimationFrame ||
              cafPolyfill
            : global.cancelAnimationFrame || cafPolyfill;

        var warn = function warn(msg) {
          return (
            console && typeof console.warn === 'function' && console.warn(msg)
          );
        };

        var _helmetCallback = null;

        var handleClientStateChange = function handleClientStateChange(
          newState,
        ) {
          if (_helmetCallback) {
            cancelAnimationFrame(_helmetCallback);
          }

          if (newState.defer) {
            _helmetCallback = requestAnimationFrame(function () {
              commitTagChanges(newState, function () {
                _helmetCallback = null;
              });
            });
          } else {
            commitTagChanges(newState);
            _helmetCallback = null;
          }
        };

        var commitTagChanges = function commitTagChanges(newState, cb) {
          var baseTag = newState.baseTag,
            bodyAttributes = newState.bodyAttributes,
            htmlAttributes = newState.htmlAttributes,
            linkTags = newState.linkTags,
            metaTags = newState.metaTags,
            noscriptTags = newState.noscriptTags,
            onChangeClientState = newState.onChangeClientState,
            scriptTags = newState.scriptTags,
            styleTags = newState.styleTags,
            title = newState.title,
            titleAttributes = newState.titleAttributes;

          updateAttributes(TAG_NAMES.BODY, bodyAttributes);
          updateAttributes(TAG_NAMES.HTML, htmlAttributes);

          updateTitle(title, titleAttributes);

          var tagUpdates = {
            baseTag: updateTags(TAG_NAMES.BASE, baseTag),
            linkTags: updateTags(TAG_NAMES.LINK, linkTags),
            metaTags: updateTags(TAG_NAMES.META, metaTags),
            noscriptTags: updateTags(TAG_NAMES.NOSCRIPT, noscriptTags),
            scriptTags: updateTags(TAG_NAMES.SCRIPT, scriptTags),
            styleTags: updateTags(TAG_NAMES.STYLE, styleTags),
          };

          var addedTags = {};
          var removedTags = {};

          Object.keys(tagUpdates).forEach(function (tagType) {
            var _tagUpdates$tagType = tagUpdates[tagType],
              newTags = _tagUpdates$tagType.newTags,
              oldTags = _tagUpdates$tagType.oldTags;

            if (newTags.length) {
              addedTags[tagType] = newTags;
            }
            if (oldTags.length) {
              removedTags[tagType] = tagUpdates[tagType].oldTags;
            }
          });

          cb && cb();

          onChangeClientState(newState, addedTags, removedTags);
        };

        var flattenArray = function flattenArray(possibleArray) {
          return Array.isArray(possibleArray)
            ? possibleArray.join('')
            : possibleArray;
        };

        var updateTitle = function updateTitle(title, attributes) {
          if (typeof title !== 'undefined' && document.title !== title) {
            document.title = flattenArray(title);
          }

          updateAttributes(TAG_NAMES.TITLE, attributes);
        };

        var updateAttributes = function updateAttributes(tagName, attributes) {
          var elementTag = document.getElementsByTagName(tagName)[0];

          if (!elementTag) {
            return;
          }

          var helmetAttributeString = elementTag.getAttribute(HELMET_ATTRIBUTE);
          var helmetAttributes = helmetAttributeString
            ? helmetAttributeString.split(',')
            : [];
          var attributesToRemove = [].concat(helmetAttributes);
          var attributeKeys = Object.keys(attributes);

          for (var i = 0; i < attributeKeys.length; i++) {
            var attribute = attributeKeys[i];
            var value = attributes[attribute] || '';

            if (elementTag.getAttribute(attribute) !== value) {
              elementTag.setAttribute(attribute, value);
            }

            if (helmetAttributes.indexOf(attribute) === -1) {
              helmetAttributes.push(attribute);
            }

            var indexToSave = attributesToRemove.indexOf(attribute);
            if (indexToSave !== -1) {
              attributesToRemove.splice(indexToSave, 1);
            }
          }

          for (var _i = attributesToRemove.length - 1; _i >= 0; _i--) {
            elementTag.removeAttribute(attributesToRemove[_i]);
          }

          if (helmetAttributes.length === attributesToRemove.length) {
            elementTag.removeAttribute(HELMET_ATTRIBUTE);
          } else if (
            elementTag.getAttribute(HELMET_ATTRIBUTE) !==
            attributeKeys.join(',')
          ) {
            elementTag.setAttribute(HELMET_ATTRIBUTE, attributeKeys.join(','));
          }
        };

        var updateTags = function updateTags(type, tags) {
          var headElement =
            document.head || document.querySelector(TAG_NAMES.HEAD);
          var tagNodes = headElement.querySelectorAll(
            type + '[' + HELMET_ATTRIBUTE + ']',
          );
          var oldTags = Array.prototype.slice.call(tagNodes);
          var newTags = [];
          var indexToDelete = void 0;

          if (tags && tags.length) {
            tags.forEach(function (tag) {
              var newElement = document.createElement(type);

              for (var attribute in tag) {
                if (tag.hasOwnProperty(attribute)) {
                  if (attribute === TAG_PROPERTIES.INNER_HTML) {
                    newElement.innerHTML = tag.innerHTML;
                  } else if (attribute === TAG_PROPERTIES.CSS_TEXT) {
                    if (newElement.styleSheet) {
                      newElement.styleSheet.cssText = tag.cssText;
                    } else {
                      newElement.appendChild(
                        document.createTextNode(tag.cssText),
                      );
                    }
                  } else {
                    var value =
                      typeof tag[attribute] === 'undefined'
                        ? ''
                        : tag[attribute];
                    newElement.setAttribute(attribute, value);
                  }
                }
              }

              newElement.setAttribute(HELMET_ATTRIBUTE, 'true');

              // Remove a duplicate tag from domTagstoRemove, so it isn't cleared.
              if (
                oldTags.some(function (existingTag, index) {
                  indexToDelete = index;
                  return newElement.isEqualNode(existingTag);
                })
              ) {
                oldTags.splice(indexToDelete, 1);
              } else {
                newTags.push(newElement);
              }
            });
          }

          oldTags.forEach(function (tag) {
            return tag.parentNode.removeChild(tag);
          });
          newTags.forEach(function (tag) {
            return headElement.appendChild(tag);
          });

          return {
            oldTags: oldTags,
            newTags: newTags,
          };
        };

        var generateElementAttributesAsString =
          function generateElementAttributesAsString(attributes) {
            return Object.keys(attributes).reduce(function (str, key) {
              var attr =
                typeof attributes[key] !== 'undefined'
                  ? key + '="' + attributes[key] + '"'
                  : '' + key;
              return str ? str + ' ' + attr : attr;
            }, '');
          };

        var generateTitleAsString = function generateTitleAsString(
          type,
          title,
          attributes,
          encode,
        ) {
          var attributeString = generateElementAttributesAsString(attributes);
          var flattenedTitle = flattenArray(title);
          return attributeString
            ? '<' +
                type +
                ' ' +
                HELMET_ATTRIBUTE +
                '="true" ' +
                attributeString +
                '>' +
                encodeSpecialCharacters(flattenedTitle, encode) +
                '</' +
                type +
                '>'
            : '<' +
                type +
                ' ' +
                HELMET_ATTRIBUTE +
                '="true">' +
                encodeSpecialCharacters(flattenedTitle, encode) +
                '</' +
                type +
                '>';
        };

        var generateTagsAsString = function generateTagsAsString(
          type,
          tags,
          encode,
        ) {
          return tags.reduce(function (str, tag) {
            var attributeHtml = Object.keys(tag)
              .filter(function (attribute) {
                return !(
                  attribute === TAG_PROPERTIES.INNER_HTML ||
                  attribute === TAG_PROPERTIES.CSS_TEXT
                );
              })
              .reduce(function (string, attribute) {
                var attr =
                  typeof tag[attribute] === 'undefined'
                    ? attribute
                    : attribute +
                      '="' +
                      encodeSpecialCharacters(tag[attribute], encode) +
                      '"';
                return string ? string + ' ' + attr : attr;
              }, '');

            var tagContent = tag.innerHTML || tag.cssText || '';

            var isSelfClosing = SELF_CLOSING_TAGS.indexOf(type) === -1;

            return (
              str +
              '<' +
              type +
              ' ' +
              HELMET_ATTRIBUTE +
              '="true" ' +
              attributeHtml +
              (isSelfClosing ? '/>' : '>' + tagContent + '</' + type + '>')
            );
          }, '');
        };

        var convertElementAttributestoReactProps =
          function convertElementAttributestoReactProps(attributes) {
            var initProps =
              arguments.length > 1 && arguments[1] !== undefined
                ? arguments[1]
                : {};

            return Object.keys(attributes).reduce(function (obj, key) {
              obj[REACT_TAG_MAP[key] || key] = attributes[key];
              return obj;
            }, initProps);
          };

        var convertReactPropstoHtmlAttributes =
          function convertReactPropstoHtmlAttributes(props) {
            var initAttributes =
              arguments.length > 1 && arguments[1] !== undefined
                ? arguments[1]
                : {};

            return Object.keys(props).reduce(function (obj, key) {
              obj[HTML_TAG_MAP[key] || key] = props[key];
              return obj;
            }, initAttributes);
          };

        var generateTitleAsReactComponent =
          function generateTitleAsReactComponent(type, title, attributes) {
            var _initProps;

            // assigning into an array to define toString function on it
            var initProps =
              ((_initProps = {
                key: title,
              }),
              (_initProps[HELMET_ATTRIBUTE] = true),
              _initProps);
            var props = convertElementAttributestoReactProps(
              attributes,
              initProps,
            );

            return [
              react__WEBPACK_IMPORTED_MODULE_3__.createElement(
                TAG_NAMES.TITLE,
                props,
                title,
              ),
            ];
          };

        var generateTagsAsReactComponent =
          function generateTagsAsReactComponent(type, tags) {
            return tags.map(function (tag, i) {
              var _mappedTag;

              var mappedTag =
                ((_mappedTag = {
                  key: i,
                }),
                (_mappedTag[HELMET_ATTRIBUTE] = true),
                _mappedTag);

              Object.keys(tag).forEach(function (attribute) {
                var mappedAttribute = REACT_TAG_MAP[attribute] || attribute;

                if (
                  mappedAttribute === TAG_PROPERTIES.INNER_HTML ||
                  mappedAttribute === TAG_PROPERTIES.CSS_TEXT
                ) {
                  var content = tag.innerHTML || tag.cssText;
                  mappedTag.dangerouslySetInnerHTML = { __html: content };
                } else {
                  mappedTag[mappedAttribute] = tag[attribute];
                }
              });

              return react__WEBPACK_IMPORTED_MODULE_3__.createElement(
                type,
                mappedTag,
              );
            });
          };

        var getMethodsForTag = function getMethodsForTag(type, tags, encode) {
          switch (type) {
            case TAG_NAMES.TITLE:
              return {
                toComponent: function toComponent() {
                  return generateTitleAsReactComponent(
                    type,
                    tags.title,
                    tags.titleAttributes,
                    encode,
                  );
                },
                toString: function toString() {
                  return generateTitleAsString(
                    type,
                    tags.title,
                    tags.titleAttributes,
                    encode,
                  );
                },
              };
            case ATTRIBUTE_NAMES.BODY:
            case ATTRIBUTE_NAMES.HTML:
              return {
                toComponent: function toComponent() {
                  return convertElementAttributestoReactProps(tags);
                },
                toString: function toString() {
                  return generateElementAttributesAsString(tags);
                },
              };
            default:
              return {
                toComponent: function toComponent() {
                  return generateTagsAsReactComponent(type, tags);
                },
                toString: function toString() {
                  return generateTagsAsString(type, tags, encode);
                },
              };
          }
        };

        var mapStateOnServer = function mapStateOnServer(_ref) {
          var baseTag = _ref.baseTag,
            bodyAttributes = _ref.bodyAttributes,
            encode = _ref.encode,
            htmlAttributes = _ref.htmlAttributes,
            linkTags = _ref.linkTags,
            metaTags = _ref.metaTags,
            noscriptTags = _ref.noscriptTags,
            scriptTags = _ref.scriptTags,
            styleTags = _ref.styleTags,
            _ref$title = _ref.title,
            title = _ref$title === undefined ? '' : _ref$title,
            titleAttributes = _ref.titleAttributes;
          return {
            base: getMethodsForTag(TAG_NAMES.BASE, baseTag, encode),
            bodyAttributes: getMethodsForTag(
              ATTRIBUTE_NAMES.BODY,
              bodyAttributes,
              encode,
            ),
            htmlAttributes: getMethodsForTag(
              ATTRIBUTE_NAMES.HTML,
              htmlAttributes,
              encode,
            ),
            link: getMethodsForTag(TAG_NAMES.LINK, linkTags, encode),
            meta: getMethodsForTag(TAG_NAMES.META, metaTags, encode),
            noscript: getMethodsForTag(
              TAG_NAMES.NOSCRIPT,
              noscriptTags,
              encode,
            ),
            script: getMethodsForTag(TAG_NAMES.SCRIPT, scriptTags, encode),
            style: getMethodsForTag(TAG_NAMES.STYLE, styleTags, encode),
            title: getMethodsForTag(
              TAG_NAMES.TITLE,
              { title: title, titleAttributes: titleAttributes },
              encode,
            ),
          };
        };

        var Helmet = function Helmet(Component) {
          var _class, _temp;

          return (
            (_temp = _class =
              (function (_React$Component) {
                inherits(HelmetWrapper, _React$Component);

                function HelmetWrapper() {
                  classCallCheck(this, HelmetWrapper);
                  return possibleConstructorReturn(
                    this,
                    _React$Component.apply(this, arguments),
                  );
                }

                HelmetWrapper.prototype.shouldComponentUpdate =
                  function shouldComponentUpdate(nextProps) {
                    return !react_fast_compare__WEBPACK_IMPORTED_MODULE_2___default()(
                      this.props,
                      nextProps,
                    );
                  };

                HelmetWrapper.prototype.mapNestedChildrenToProps =
                  function mapNestedChildrenToProps(child, nestedChildren) {
                    if (!nestedChildren) {
                      return null;
                    }

                    switch (child.type) {
                      case TAG_NAMES.SCRIPT:
                      case TAG_NAMES.NOSCRIPT:
                        return {
                          innerHTML: nestedChildren,
                        };

                      case TAG_NAMES.STYLE:
                        return {
                          cssText: nestedChildren,
                        };
                    }

                    throw new Error(
                      '<' +
                        child.type +
                        ' /> elements are self-closing and can not contain children. Refer to our API for more information.',
                    );
                  };

                HelmetWrapper.prototype.flattenArrayTypeChildren =
                  function flattenArrayTypeChildren(_ref) {
                    var _babelHelpers$extends;

                    var child = _ref.child,
                      arrayTypeChildren = _ref.arrayTypeChildren,
                      newChildProps = _ref.newChildProps,
                      nestedChildren = _ref.nestedChildren;

                    return _extends(
                      {},
                      arrayTypeChildren,
                      ((_babelHelpers$extends = {}),
                      (_babelHelpers$extends[child.type] = [].concat(
                        arrayTypeChildren[child.type] || [],
                        [
                          _extends(
                            {},
                            newChildProps,
                            this.mapNestedChildrenToProps(
                              child,
                              nestedChildren,
                            ),
                          ),
                        ],
                      )),
                      _babelHelpers$extends),
                    );
                  };

                HelmetWrapper.prototype.mapObjectTypeChildren =
                  function mapObjectTypeChildren(_ref2) {
                    var _babelHelpers$extends2, _babelHelpers$extends3;

                    var child = _ref2.child,
                      newProps = _ref2.newProps,
                      newChildProps = _ref2.newChildProps,
                      nestedChildren = _ref2.nestedChildren;

                    switch (child.type) {
                      case TAG_NAMES.TITLE:
                        return _extends(
                          {},
                          newProps,
                          ((_babelHelpers$extends2 = {}),
                          (_babelHelpers$extends2[child.type] = nestedChildren),
                          (_babelHelpers$extends2.titleAttributes = _extends(
                            {},
                            newChildProps,
                          )),
                          _babelHelpers$extends2),
                        );

                      case TAG_NAMES.BODY:
                        return _extends({}, newProps, {
                          bodyAttributes: _extends({}, newChildProps),
                        });

                      case TAG_NAMES.HTML:
                        return _extends({}, newProps, {
                          htmlAttributes: _extends({}, newChildProps),
                        });
                    }

                    return _extends(
                      {},
                      newProps,
                      ((_babelHelpers$extends3 = {}),
                      (_babelHelpers$extends3[child.type] = _extends(
                        {},
                        newChildProps,
                      )),
                      _babelHelpers$extends3),
                    );
                  };

                HelmetWrapper.prototype.mapArrayTypeChildrenToProps =
                  function mapArrayTypeChildrenToProps(
                    arrayTypeChildren,
                    newProps,
                  ) {
                    var newFlattenedProps = _extends({}, newProps);

                    Object.keys(arrayTypeChildren).forEach(function (
                      arrayChildName,
                    ) {
                      var _babelHelpers$extends4;

                      newFlattenedProps = _extends(
                        {},
                        newFlattenedProps,
                        ((_babelHelpers$extends4 = {}),
                        (_babelHelpers$extends4[arrayChildName] =
                          arrayTypeChildren[arrayChildName]),
                        _babelHelpers$extends4),
                      );
                    });

                    return newFlattenedProps;
                  };

                HelmetWrapper.prototype.warnOnInvalidChildren =
                  function warnOnInvalidChildren(child, nestedChildren) {
                    if (true) {
                      if (
                        !VALID_TAG_NAMES.some(function (name) {
                          return child.type === name;
                        })
                      ) {
                        if (typeof child.type === 'function') {
                          return warn(
                            'You may be attempting to nest <Helmet> components within each other, which is not allowed. Refer to our API for more information.',
                          );
                        }

                        return warn(
                          'Only elements types ' +
                            VALID_TAG_NAMES.join(', ') +
                            ' are allowed. Helmet does not support rendering <' +
                            child.type +
                            '> elements. Refer to our API for more information.',
                        );
                      }

                      if (
                        nestedChildren &&
                        typeof nestedChildren !== 'string' &&
                        (!Array.isArray(nestedChildren) ||
                          nestedChildren.some(function (nestedChild) {
                            return typeof nestedChild !== 'string';
                          }))
                      ) {
                        throw new Error(
                          'Helmet expects a string as a child of <' +
                            child.type +
                            '>. Did you forget to wrap your children in braces? ( <' +
                            child.type +
                            '>{``}</' +
                            child.type +
                            '> ) Refer to our API for more information.',
                        );
                      }
                    }

                    return true;
                  };

                HelmetWrapper.prototype.mapChildrenToProps =
                  function mapChildrenToProps(children, newProps) {
                    var _this2 = this;

                    var arrayTypeChildren = {};

                    react__WEBPACK_IMPORTED_MODULE_3__.Children.forEach(
                      children,
                      function (child) {
                        if (!child || !child.props) {
                          return;
                        }

                        var _child$props = child.props,
                          nestedChildren = _child$props.children,
                          childProps = objectWithoutProperties(_child$props, [
                            'children',
                          ]);

                        var newChildProps =
                          convertReactPropstoHtmlAttributes(childProps);

                        _this2.warnOnInvalidChildren(child, nestedChildren);

                        switch (child.type) {
                          case TAG_NAMES.LINK:
                          case TAG_NAMES.META:
                          case TAG_NAMES.NOSCRIPT:
                          case TAG_NAMES.SCRIPT:
                          case TAG_NAMES.STYLE:
                            arrayTypeChildren = _this2.flattenArrayTypeChildren(
                              {
                                child: child,
                                arrayTypeChildren: arrayTypeChildren,
                                newChildProps: newChildProps,
                                nestedChildren: nestedChildren,
                              },
                            );
                            break;

                          default:
                            newProps = _this2.mapObjectTypeChildren({
                              child: child,
                              newProps: newProps,
                              newChildProps: newChildProps,
                              nestedChildren: nestedChildren,
                            });
                            break;
                        }
                      },
                    );

                    newProps = this.mapArrayTypeChildrenToProps(
                      arrayTypeChildren,
                      newProps,
                    );
                    return newProps;
                  };

                HelmetWrapper.prototype.render = function render() {
                  var _props = this.props,
                    children = _props.children,
                    props = objectWithoutProperties(_props, ['children']);

                  var newProps = _extends({}, props);

                  if (children) {
                    newProps = this.mapChildrenToProps(children, newProps);
                  }

                  return react__WEBPACK_IMPORTED_MODULE_3__.createElement(
                    Component,
                    newProps,
                  );
                };

                createClass(HelmetWrapper, null, [
                  {
                    key: 'canUseDOM',

                    // Component.peek comes from react-side-effect:
                    // For testing, you may use a static peek() method available on the returned component.
                    // It lets you get the current state without resetting the mounted instance stack.
                    // Don’t use it for anything other than testing.

                    /**
                     * @param {Object} base: {"target": "_blank", "href": "http://mysite.com/"}
                     * @param {Object} bodyAttributes: {"className": "root"}
                     * @param {String} defaultTitle: "Default Title"
                     * @param {Boolean} defer: true
                     * @param {Boolean} encodeSpecialCharacters: true
                     * @param {Object} htmlAttributes: {"lang": "en", "amp": undefined}
                     * @param {Array} link: [{"rel": "canonical", "href": "http://mysite.com/example"}]
                     * @param {Array} meta: [{"name": "description", "content": "Test description"}]
                     * @param {Array} noscript: [{"innerHTML": "<img src='http://mysite.com/js/test.js'"}]
                     * @param {Function} onChangeClientState: "(newState) => console.log(newState)"
                     * @param {Array} script: [{"type": "text/javascript", "src": "http://mysite.com/js/test.js"}]
                     * @param {Array} style: [{"type": "text/css", "cssText": "div { display: block; color: blue; }"}]
                     * @param {String} title: "Title"
                     * @param {Object} titleAttributes: {"itemprop": "name"}
                     * @param {String} titleTemplate: "MySite.com - %s"
                     */
                    set: function set$$1(canUseDOM) {
                      Component.canUseDOM = canUseDOM;
                    },
                  },
                ]);
                return HelmetWrapper;
              })(react__WEBPACK_IMPORTED_MODULE_3__.Component)),
            (_class.propTypes = {
              base: prop_types__WEBPACK_IMPORTED_MODULE_0___default().object,
              bodyAttributes:
                prop_types__WEBPACK_IMPORTED_MODULE_0___default().object,
              children:
                prop_types__WEBPACK_IMPORTED_MODULE_0___default().oneOfType([
                  prop_types__WEBPACK_IMPORTED_MODULE_0___default().arrayOf(
                    prop_types__WEBPACK_IMPORTED_MODULE_0___default().node,
                  ),
                  prop_types__WEBPACK_IMPORTED_MODULE_0___default().node,
                ]),
              defaultTitle:
                prop_types__WEBPACK_IMPORTED_MODULE_0___default().string,
              defer: prop_types__WEBPACK_IMPORTED_MODULE_0___default().bool,
              encodeSpecialCharacters:
                prop_types__WEBPACK_IMPORTED_MODULE_0___default().bool,
              htmlAttributes:
                prop_types__WEBPACK_IMPORTED_MODULE_0___default().object,
              link: prop_types__WEBPACK_IMPORTED_MODULE_0___default().arrayOf(
                prop_types__WEBPACK_IMPORTED_MODULE_0___default().object,
              ),
              meta: prop_types__WEBPACK_IMPORTED_MODULE_0___default().arrayOf(
                prop_types__WEBPACK_IMPORTED_MODULE_0___default().object,
              ),
              noscript:
                prop_types__WEBPACK_IMPORTED_MODULE_0___default().arrayOf(
                  prop_types__WEBPACK_IMPORTED_MODULE_0___default().object,
                ),
              onChangeClientState:
                prop_types__WEBPACK_IMPORTED_MODULE_0___default().func,
              script: prop_types__WEBPACK_IMPORTED_MODULE_0___default().arrayOf(
                prop_types__WEBPACK_IMPORTED_MODULE_0___default().object,
              ),
              style: prop_types__WEBPACK_IMPORTED_MODULE_0___default().arrayOf(
                prop_types__WEBPACK_IMPORTED_MODULE_0___default().object,
              ),
              title: prop_types__WEBPACK_IMPORTED_MODULE_0___default().string,
              titleAttributes:
                prop_types__WEBPACK_IMPORTED_MODULE_0___default().object,
              titleTemplate:
                prop_types__WEBPACK_IMPORTED_MODULE_0___default().string,
            }),
            (_class.defaultProps = {
              defer: true,
              encodeSpecialCharacters: true,
            }),
            (_class.peek = Component.peek),
            (_class.rewind = function () {
              var mappedState = Component.rewind();
              if (!mappedState) {
                // provide fallback if mappedState is undefined
                mappedState = mapStateOnServer({
                  baseTag: [],
                  bodyAttributes: {},
                  encodeSpecialCharacters: true,
                  htmlAttributes: {},
                  linkTags: [],
                  metaTags: [],
                  noscriptTags: [],
                  scriptTags: [],
                  styleTags: [],
                  title: '',
                  titleAttributes: {},
                });
              }

              return mappedState;
            }),
            _temp
          );
        };

        var NullComponent = function NullComponent() {
          return null;
        };

        var HelmetSideEffects =
          react_side_effect__WEBPACK_IMPORTED_MODULE_1___default()(
            reducePropsToState,
            handleClientStateChange,
            mapStateOnServer,
          )(NullComponent);

        var HelmetExport = Helmet(HelmetSideEffects);
        HelmetExport.renderStatic = HelmetExport.rewind;

        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          HelmetExport;

        /***/
      },

    /***/ './node_modules/react-is/cjs/react-is.development.js':
      /*!***********************************************************!*\
  !*** ./node_modules/react-is/cjs/react-is.development.js ***!
  \***********************************************************/
      /***/ (__unused_webpack_module, exports) => {
        'use strict';
        /** @license React v16.13.1
         * react-is.development.js
         *
         * Copyright (c) Facebook, Inc. and its affiliates.
         *
         * This source code is licensed under the MIT license found in the
         * LICENSE file in the root directory of this source tree.
         */

        if (true) {
          (function () {
            'use strict';

            // The Symbol used to tag the ReactElement-like types. If there is no native Symbol
            // nor polyfill, then a plain number is used for performance.
            var hasSymbol = typeof Symbol === 'function' && Symbol.for;
            var REACT_ELEMENT_TYPE = hasSymbol
              ? Symbol.for('react.element')
              : 0xeac7;
            var REACT_PORTAL_TYPE = hasSymbol
              ? Symbol.for('react.portal')
              : 0xeaca;
            var REACT_FRAGMENT_TYPE = hasSymbol
              ? Symbol.for('react.fragment')
              : 0xeacb;
            var REACT_STRICT_MODE_TYPE = hasSymbol
              ? Symbol.for('react.strict_mode')
              : 0xeacc;
            var REACT_PROFILER_TYPE = hasSymbol
              ? Symbol.for('react.profiler')
              : 0xead2;
            var REACT_PROVIDER_TYPE = hasSymbol
              ? Symbol.for('react.provider')
              : 0xeacd;
            var REACT_CONTEXT_TYPE = hasSymbol
              ? Symbol.for('react.context')
              : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
            // (unstable) APIs that have been removed. Can we remove the symbols?

            var REACT_ASYNC_MODE_TYPE = hasSymbol
              ? Symbol.for('react.async_mode')
              : 0xeacf;
            var REACT_CONCURRENT_MODE_TYPE = hasSymbol
              ? Symbol.for('react.concurrent_mode')
              : 0xeacf;
            var REACT_FORWARD_REF_TYPE = hasSymbol
              ? Symbol.for('react.forward_ref')
              : 0xead0;
            var REACT_SUSPENSE_TYPE = hasSymbol
              ? Symbol.for('react.suspense')
              : 0xead1;
            var REACT_SUSPENSE_LIST_TYPE = hasSymbol
              ? Symbol.for('react.suspense_list')
              : 0xead8;
            var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
            var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
            var REACT_BLOCK_TYPE = hasSymbol
              ? Symbol.for('react.block')
              : 0xead9;
            var REACT_FUNDAMENTAL_TYPE = hasSymbol
              ? Symbol.for('react.fundamental')
              : 0xead5;
            var REACT_RESPONDER_TYPE = hasSymbol
              ? Symbol.for('react.responder')
              : 0xead6;
            var REACT_SCOPE_TYPE = hasSymbol
              ? Symbol.for('react.scope')
              : 0xead7;

            function isValidElementType(type) {
              return (
                typeof type === 'string' ||
                typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
                type === REACT_FRAGMENT_TYPE ||
                type === REACT_CONCURRENT_MODE_TYPE ||
                type === REACT_PROFILER_TYPE ||
                type === REACT_STRICT_MODE_TYPE ||
                type === REACT_SUSPENSE_TYPE ||
                type === REACT_SUSPENSE_LIST_TYPE ||
                (typeof type === 'object' &&
                  type !== null &&
                  (type.$$typeof === REACT_LAZY_TYPE ||
                    type.$$typeof === REACT_MEMO_TYPE ||
                    type.$$typeof === REACT_PROVIDER_TYPE ||
                    type.$$typeof === REACT_CONTEXT_TYPE ||
                    type.$$typeof === REACT_FORWARD_REF_TYPE ||
                    type.$$typeof === REACT_FUNDAMENTAL_TYPE ||
                    type.$$typeof === REACT_RESPONDER_TYPE ||
                    type.$$typeof === REACT_SCOPE_TYPE ||
                    type.$$typeof === REACT_BLOCK_TYPE))
              );
            }

            function typeOf(object) {
              if (typeof object === 'object' && object !== null) {
                var $$typeof = object.$$typeof;

                switch ($$typeof) {
                  case REACT_ELEMENT_TYPE:
                    var type = object.type;

                    switch (type) {
                      case REACT_ASYNC_MODE_TYPE:
                      case REACT_CONCURRENT_MODE_TYPE:
                      case REACT_FRAGMENT_TYPE:
                      case REACT_PROFILER_TYPE:
                      case REACT_STRICT_MODE_TYPE:
                      case REACT_SUSPENSE_TYPE:
                        return type;

                      default:
                        var $$typeofType = type && type.$$typeof;

                        switch ($$typeofType) {
                          case REACT_CONTEXT_TYPE:
                          case REACT_FORWARD_REF_TYPE:
                          case REACT_LAZY_TYPE:
                          case REACT_MEMO_TYPE:
                          case REACT_PROVIDER_TYPE:
                            return $$typeofType;

                          default:
                            return $$typeof;
                        }
                    }

                  case REACT_PORTAL_TYPE:
                    return $$typeof;
                }
              }

              return undefined;
            } // AsyncMode is deprecated along with isAsyncMode

            var AsyncMode = REACT_ASYNC_MODE_TYPE;
            var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
            var ContextConsumer = REACT_CONTEXT_TYPE;
            var ContextProvider = REACT_PROVIDER_TYPE;
            var Element = REACT_ELEMENT_TYPE;
            var ForwardRef = REACT_FORWARD_REF_TYPE;
            var Fragment = REACT_FRAGMENT_TYPE;
            var Lazy = REACT_LAZY_TYPE;
            var Memo = REACT_MEMO_TYPE;
            var Portal = REACT_PORTAL_TYPE;
            var Profiler = REACT_PROFILER_TYPE;
            var StrictMode = REACT_STRICT_MODE_TYPE;
            var Suspense = REACT_SUSPENSE_TYPE;
            var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

            function isAsyncMode(object) {
              {
                if (!hasWarnedAboutDeprecatedIsAsyncMode) {
                  hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

                  console['warn'](
                    'The ReactIs.isAsyncMode() alias has been deprecated, ' +
                      'and will be removed in React 17+. Update your code to use ' +
                      'ReactIs.isConcurrentMode() instead. It has the exact same API.',
                  );
                }
              }

              return (
                isConcurrentMode(object) ||
                typeOf(object) === REACT_ASYNC_MODE_TYPE
              );
            }
            function isConcurrentMode(object) {
              return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
            }
            function isContextConsumer(object) {
              return typeOf(object) === REACT_CONTEXT_TYPE;
            }
            function isContextProvider(object) {
              return typeOf(object) === REACT_PROVIDER_TYPE;
            }
            function isElement(object) {
              return (
                typeof object === 'object' &&
                object !== null &&
                object.$$typeof === REACT_ELEMENT_TYPE
              );
            }
            function isForwardRef(object) {
              return typeOf(object) === REACT_FORWARD_REF_TYPE;
            }
            function isFragment(object) {
              return typeOf(object) === REACT_FRAGMENT_TYPE;
            }
            function isLazy(object) {
              return typeOf(object) === REACT_LAZY_TYPE;
            }
            function isMemo(object) {
              return typeOf(object) === REACT_MEMO_TYPE;
            }
            function isPortal(object) {
              return typeOf(object) === REACT_PORTAL_TYPE;
            }
            function isProfiler(object) {
              return typeOf(object) === REACT_PROFILER_TYPE;
            }
            function isStrictMode(object) {
              return typeOf(object) === REACT_STRICT_MODE_TYPE;
            }
            function isSuspense(object) {
              return typeOf(object) === REACT_SUSPENSE_TYPE;
            }

            exports.AsyncMode = AsyncMode;
            exports.ConcurrentMode = ConcurrentMode;
            exports.ContextConsumer = ContextConsumer;
            exports.ContextProvider = ContextProvider;
            exports.Element = Element;
            exports.ForwardRef = ForwardRef;
            exports.Fragment = Fragment;
            exports.Lazy = Lazy;
            exports.Memo = Memo;
            exports.Portal = Portal;
            exports.Profiler = Profiler;
            exports.StrictMode = StrictMode;
            exports.Suspense = Suspense;
            exports.isAsyncMode = isAsyncMode;
            exports.isConcurrentMode = isConcurrentMode;
            exports.isContextConsumer = isContextConsumer;
            exports.isContextProvider = isContextProvider;
            exports.isElement = isElement;
            exports.isForwardRef = isForwardRef;
            exports.isFragment = isFragment;
            exports.isLazy = isLazy;
            exports.isMemo = isMemo;
            exports.isPortal = isPortal;
            exports.isProfiler = isProfiler;
            exports.isStrictMode = isStrictMode;
            exports.isSuspense = isSuspense;
            exports.isValidElementType = isValidElementType;
            exports.typeOf = typeOf;
          })();
        }

        /***/
      },

    /***/ './node_modules/react-is/index.js':
      /*!****************************************!*\
  !*** ./node_modules/react-is/index.js ***!
  \****************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        'use strict';

        if (false) {
        } else {
          module.exports = __webpack_require__(
            /*! ./cjs/react-is.development.js */ './node_modules/react-is/cjs/react-is.development.js',
          );
        }

        /***/
      },

    /***/ './node_modules/react-side-effect/lib/index.js':
      /*!*****************************************************!*\
  !*** ./node_modules/react-side-effect/lib/index.js ***!
  \*****************************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        'use strict';

        function _interopDefault(ex) {
          return ex && typeof ex === 'object' && 'default' in ex
            ? ex['default']
            : ex;
        }

        var React = __webpack_require__(
          /*! react */ './node_modules/react/index.js',
        );
        var React__default = _interopDefault(React);

        function _defineProperty(obj, key, value) {
          if (key in obj) {
            Object.defineProperty(obj, key, {
              value: value,
              enumerable: true,
              configurable: true,
              writable: true,
            });
          } else {
            obj[key] = value;
          }

          return obj;
        }

        function _inheritsLoose(subClass, superClass) {
          subClass.prototype = Object.create(superClass.prototype);
          subClass.prototype.constructor = subClass;
          subClass.__proto__ = superClass;
        }

        var canUseDOM = !!(
          typeof window !== 'undefined' &&
          window.document &&
          window.document.createElement
        );
        function withSideEffect(
          reducePropsToState,
          handleStateChangeOnClient,
          mapStateOnServer,
        ) {
          if (typeof reducePropsToState !== 'function') {
            throw new Error('Expected reducePropsToState to be a function.');
          }

          if (typeof handleStateChangeOnClient !== 'function') {
            throw new Error(
              'Expected handleStateChangeOnClient to be a function.',
            );
          }

          if (
            typeof mapStateOnServer !== 'undefined' &&
            typeof mapStateOnServer !== 'function'
          ) {
            throw new Error(
              'Expected mapStateOnServer to either be undefined or a function.',
            );
          }

          function getDisplayName(WrappedComponent) {
            return (
              WrappedComponent.displayName ||
              WrappedComponent.name ||
              'Component'
            );
          }

          return function wrap(WrappedComponent) {
            if (typeof WrappedComponent !== 'function') {
              throw new Error(
                'Expected WrappedComponent to be a React component.',
              );
            }

            var mountedInstances = [];
            var state;

            function emitChange() {
              state = reducePropsToState(
                mountedInstances.map(function (instance) {
                  return instance.props;
                }),
              );

              if (SideEffect.canUseDOM) {
                handleStateChangeOnClient(state);
              } else if (mapStateOnServer) {
                state = mapStateOnServer(state);
              }
            }

            var SideEffect = /*#__PURE__*/ (function (_PureComponent) {
              _inheritsLoose(SideEffect, _PureComponent);

              function SideEffect() {
                return _PureComponent.apply(this, arguments) || this;
              }

              // Try to use displayName of wrapped component
              // Expose canUseDOM so tests can monkeypatch it
              SideEffect.peek = function peek() {
                return state;
              };

              SideEffect.rewind = function rewind() {
                if (SideEffect.canUseDOM) {
                  throw new Error(
                    'You may only call rewind() on the server. Call peek() to read the current state.',
                  );
                }

                var recordedState = state;
                state = undefined;
                mountedInstances = [];
                return recordedState;
              };

              var _proto = SideEffect.prototype;

              _proto.UNSAFE_componentWillMount =
                function UNSAFE_componentWillMount() {
                  mountedInstances.push(this);
                  emitChange();
                };

              _proto.componentDidUpdate = function componentDidUpdate() {
                emitChange();
              };

              _proto.componentWillUnmount = function componentWillUnmount() {
                var index = mountedInstances.indexOf(this);
                mountedInstances.splice(index, 1);
                emitChange();
              };

              _proto.render = function render() {
                return /*#__PURE__*/ React__default.createElement(
                  WrappedComponent,
                  this.props,
                );
              };

              return SideEffect;
            })(React.PureComponent);

            _defineProperty(
              SideEffect,
              'displayName',
              'SideEffect(' + getDisplayName(WrappedComponent) + ')',
            );

            _defineProperty(SideEffect, 'canUseDOM', canUseDOM);

            return SideEffect;
          };
        }

        module.exports = withSideEffect;

        /***/
      },

    /***/ './node_modules/react/cjs/react.development.js':
      /*!*****************************************************!*\
  !*** ./node_modules/react/cjs/react.development.js ***!
  \*****************************************************/
      /***/ (__unused_webpack_module, exports, __webpack_require__) => {
        'use strict';
        /** @license React v17.0.2
         * react.development.js
         *
         * Copyright (c) Facebook, Inc. and its affiliates.
         *
         * This source code is licensed under the MIT license found in the
         * LICENSE file in the root directory of this source tree.
         */

        if (true) {
          (function () {
            'use strict';

            var _assign = __webpack_require__(
              /*! object-assign */ './node_modules/object-assign/index.js',
            );

            // TODO: this is special because it gets imported during build.
            var ReactVersion = '17.0.2';

            // ATTENTION
            // When adding new symbols to this file,
            // Please consider also adding to 'react-devtools-shared/src/backend/ReactSymbols'
            // The Symbol used to tag the ReactElement-like types. If there is no native Symbol
            // nor polyfill, then a plain number is used for performance.
            var REACT_ELEMENT_TYPE = 0xeac7;
            var REACT_PORTAL_TYPE = 0xeaca;
            exports.Fragment = 0xeacb;
            exports.StrictMode = 0xeacc;
            exports.Profiler = 0xead2;
            var REACT_PROVIDER_TYPE = 0xeacd;
            var REACT_CONTEXT_TYPE = 0xeace;
            var REACT_FORWARD_REF_TYPE = 0xead0;
            exports.Suspense = 0xead1;
            var REACT_SUSPENSE_LIST_TYPE = 0xead8;
            var REACT_MEMO_TYPE = 0xead3;
            var REACT_LAZY_TYPE = 0xead4;
            var REACT_BLOCK_TYPE = 0xead9;
            var REACT_SERVER_BLOCK_TYPE = 0xeada;
            var REACT_FUNDAMENTAL_TYPE = 0xead5;
            var REACT_SCOPE_TYPE = 0xead7;
            var REACT_OPAQUE_ID_TYPE = 0xeae0;
            var REACT_DEBUG_TRACING_MODE_TYPE = 0xeae1;
            var REACT_OFFSCREEN_TYPE = 0xeae2;
            var REACT_LEGACY_HIDDEN_TYPE = 0xeae3;

            if (typeof Symbol === 'function' && Symbol.for) {
              var symbolFor = Symbol.for;
              REACT_ELEMENT_TYPE = symbolFor('react.element');
              REACT_PORTAL_TYPE = symbolFor('react.portal');
              exports.Fragment = symbolFor('react.fragment');
              exports.StrictMode = symbolFor('react.strict_mode');
              exports.Profiler = symbolFor('react.profiler');
              REACT_PROVIDER_TYPE = symbolFor('react.provider');
              REACT_CONTEXT_TYPE = symbolFor('react.context');
              REACT_FORWARD_REF_TYPE = symbolFor('react.forward_ref');
              exports.Suspense = symbolFor('react.suspense');
              REACT_SUSPENSE_LIST_TYPE = symbolFor('react.suspense_list');
              REACT_MEMO_TYPE = symbolFor('react.memo');
              REACT_LAZY_TYPE = symbolFor('react.lazy');
              REACT_BLOCK_TYPE = symbolFor('react.block');
              REACT_SERVER_BLOCK_TYPE = symbolFor('react.server.block');
              REACT_FUNDAMENTAL_TYPE = symbolFor('react.fundamental');
              REACT_SCOPE_TYPE = symbolFor('react.scope');
              REACT_OPAQUE_ID_TYPE = symbolFor('react.opaque.id');
              REACT_DEBUG_TRACING_MODE_TYPE = symbolFor(
                'react.debug_trace_mode',
              );
              REACT_OFFSCREEN_TYPE = symbolFor('react.offscreen');
              REACT_LEGACY_HIDDEN_TYPE = symbolFor('react.legacy_hidden');
            }

            var MAYBE_ITERATOR_SYMBOL =
              typeof Symbol === 'function' && Symbol.iterator;
            var FAUX_ITERATOR_SYMBOL = '@@iterator';
            function getIteratorFn(maybeIterable) {
              if (maybeIterable === null || typeof maybeIterable !== 'object') {
                return null;
              }

              var maybeIterator =
                (MAYBE_ITERATOR_SYMBOL &&
                  maybeIterable[MAYBE_ITERATOR_SYMBOL]) ||
                maybeIterable[FAUX_ITERATOR_SYMBOL];

              if (typeof maybeIterator === 'function') {
                return maybeIterator;
              }

              return null;
            }

            /**
             * Keeps track of the current dispatcher.
             */
            var ReactCurrentDispatcher = {
              /**
               * @internal
               * @type {ReactComponent}
               */
              current: null,
            };

            /**
             * Keeps track of the current batch's configuration such as how long an update
             * should suspend for if it needs to.
             */
            var ReactCurrentBatchConfig = {
              transition: 0,
            };

            /**
             * Keeps track of the current owner.
             *
             * The current owner is the component who should own any components that are
             * currently being constructed.
             */
            var ReactCurrentOwner = {
              /**
               * @internal
               * @type {ReactComponent}
               */
              current: null,
            };

            var ReactDebugCurrentFrame = {};
            var currentExtraStackFrame = null;
            function setExtraStackFrame(stack) {
              {
                currentExtraStackFrame = stack;
              }
            }

            {
              ReactDebugCurrentFrame.setExtraStackFrame = function (stack) {
                {
                  currentExtraStackFrame = stack;
                }
              }; // Stack implementation injected by the current renderer.

              ReactDebugCurrentFrame.getCurrentStack = null;

              ReactDebugCurrentFrame.getStackAddendum = function () {
                var stack = ''; // Add an extra top frame while an element is being validated

                if (currentExtraStackFrame) {
                  stack += currentExtraStackFrame;
                } // Delegate to the injected renderer-specific implementation

                var impl = ReactDebugCurrentFrame.getCurrentStack;

                if (impl) {
                  stack += impl() || '';
                }

                return stack;
              };
            }

            /**
             * Used by act() to track whether you're inside an act() scope.
             */
            var IsSomeRendererActing = {
              current: false,
            };

            var ReactSharedInternals = {
              ReactCurrentDispatcher: ReactCurrentDispatcher,
              ReactCurrentBatchConfig: ReactCurrentBatchConfig,
              ReactCurrentOwner: ReactCurrentOwner,
              IsSomeRendererActing: IsSomeRendererActing,
              // Used by renderers to avoid bundling object-assign twice in UMD bundles:
              assign: _assign,
            };

            {
              ReactSharedInternals.ReactDebugCurrentFrame =
                ReactDebugCurrentFrame;
            }

            // by calls to these methods by a Babel plugin.
            //
            // In PROD (or in packages without access to React internals),
            // they are left as they are instead.

            function warn(format) {
              {
                for (
                  var _len = arguments.length,
                    args = new Array(_len > 1 ? _len - 1 : 0),
                    _key = 1;
                  _key < _len;
                  _key++
                ) {
                  args[_key - 1] = arguments[_key];
                }

                printWarning('warn', format, args);
              }
            }
            function error(format) {
              {
                for (
                  var _len2 = arguments.length,
                    args = new Array(_len2 > 1 ? _len2 - 1 : 0),
                    _key2 = 1;
                  _key2 < _len2;
                  _key2++
                ) {
                  args[_key2 - 1] = arguments[_key2];
                }

                printWarning('error', format, args);
              }
            }

            function printWarning(level, format, args) {
              // When changing this logic, you might want to also
              // update consoleWithStackDev.www.js as well.
              {
                var ReactDebugCurrentFrame =
                  ReactSharedInternals.ReactDebugCurrentFrame;
                var stack = ReactDebugCurrentFrame.getStackAddendum();

                if (stack !== '') {
                  format += '%s';
                  args = args.concat([stack]);
                }

                var argsWithFormat = args.map(function (item) {
                  return '' + item;
                }); // Careful: RN currently depends on this prefix

                argsWithFormat.unshift('Warning: ' + format); // We intentionally don't use spread (or .apply) directly because it
                // breaks IE9: https://github.com/facebook/react/issues/13610
                // eslint-disable-next-line react-internal/no-production-logging

                Function.prototype.apply.call(
                  console[level],
                  console,
                  argsWithFormat,
                );
              }
            }

            var didWarnStateUpdateForUnmountedComponent = {};

            function warnNoop(publicInstance, callerName) {
              {
                var _constructor = publicInstance.constructor;
                var componentName =
                  (_constructor &&
                    (_constructor.displayName || _constructor.name)) ||
                  'ReactClass';
                var warningKey = componentName + '.' + callerName;

                if (didWarnStateUpdateForUnmountedComponent[warningKey]) {
                  return;
                }

                error(
                  "Can't call %s on a component that is not yet mounted. " +
                    'This is a no-op, but it might indicate a bug in your application. ' +
                    'Instead, assign to `this.state` directly or define a `state = {};` ' +
                    'class property with the desired state in the %s component.',
                  callerName,
                  componentName,
                );

                didWarnStateUpdateForUnmountedComponent[warningKey] = true;
              }
            }
            /**
             * This is the abstract API for an update queue.
             */

            var ReactNoopUpdateQueue = {
              /**
               * Checks whether or not this composite component is mounted.
               * @param {ReactClass} publicInstance The instance we want to test.
               * @return {boolean} True if mounted, false otherwise.
               * @protected
               * @final
               */
              isMounted: function (publicInstance) {
                return false;
              },

              /**
               * Forces an update. This should only be invoked when it is known with
               * certainty that we are **not** in a DOM transaction.
               *
               * You may want to call this when you know that some deeper aspect of the
               * component's state has changed but `setState` was not called.
               *
               * This will not invoke `shouldComponentUpdate`, but it will invoke
               * `componentWillUpdate` and `componentDidUpdate`.
               *
               * @param {ReactClass} publicInstance The instance that should rerender.
               * @param {?function} callback Called after component is updated.
               * @param {?string} callerName name of the calling function in the public API.
               * @internal
               */
              enqueueForceUpdate: function (
                publicInstance,
                callback,
                callerName,
              ) {
                warnNoop(publicInstance, 'forceUpdate');
              },

              /**
               * Replaces all of the state. Always use this or `setState` to mutate state.
               * You should treat `this.state` as immutable.
               *
               * There is no guarantee that `this.state` will be immediately updated, so
               * accessing `this.state` after calling this method may return the old value.
               *
               * @param {ReactClass} publicInstance The instance that should rerender.
               * @param {object} completeState Next state.
               * @param {?function} callback Called after component is updated.
               * @param {?string} callerName name of the calling function in the public API.
               * @internal
               */
              enqueueReplaceState: function (
                publicInstance,
                completeState,
                callback,
                callerName,
              ) {
                warnNoop(publicInstance, 'replaceState');
              },

              /**
               * Sets a subset of the state. This only exists because _pendingState is
               * internal. This provides a merging strategy that is not available to deep
               * properties which is confusing. TODO: Expose pendingState or don't use it
               * during the merge.
               *
               * @param {ReactClass} publicInstance The instance that should rerender.
               * @param {object} partialState Next partial state to be merged with state.
               * @param {?function} callback Called after component is updated.
               * @param {?string} Name of the calling function in the public API.
               * @internal
               */
              enqueueSetState: function (
                publicInstance,
                partialState,
                callback,
                callerName,
              ) {
                warnNoop(publicInstance, 'setState');
              },
            };

            var emptyObject = {};

            {
              Object.freeze(emptyObject);
            }
            /**
             * Base class helpers for the updating state of a component.
             */

            function Component(props, context, updater) {
              this.props = props;
              this.context = context; // If a component has string refs, we will assign a different object later.

              this.refs = emptyObject; // We initialize the default updater but the real one gets injected by the
              // renderer.

              this.updater = updater || ReactNoopUpdateQueue;
            }

            Component.prototype.isReactComponent = {};
            /**
             * Sets a subset of the state. Always use this to mutate
             * state. You should treat `this.state` as immutable.
             *
             * There is no guarantee that `this.state` will be immediately updated, so
             * accessing `this.state` after calling this method may return the old value.
             *
             * There is no guarantee that calls to `setState` will run synchronously,
             * as they may eventually be batched together.  You can provide an optional
             * callback that will be executed when the call to setState is actually
             * completed.
             *
             * When a function is provided to setState, it will be called at some point in
             * the future (not synchronously). It will be called with the up to date
             * component arguments (state, props, context). These values can be different
             * from this.* because your function may be called after receiveProps but before
             * shouldComponentUpdate, and this new state, props, and context will not yet be
             * assigned to this.
             *
             * @param {object|function} partialState Next partial state or function to
             *        produce next partial state to be merged with current state.
             * @param {?function} callback Called after state is updated.
             * @final
             * @protected
             */

            Component.prototype.setState = function (partialState, callback) {
              if (
                !(
                  typeof partialState === 'object' ||
                  typeof partialState === 'function' ||
                  partialState == null
                )
              ) {
                {
                  throw Error(
                    'setState(...): takes an object of state variables to update or a function which returns an object of state variables.',
                  );
                }
              }

              this.updater.enqueueSetState(
                this,
                partialState,
                callback,
                'setState',
              );
            };
            /**
             * Forces an update. This should only be invoked when it is known with
             * certainty that we are **not** in a DOM transaction.
             *
             * You may want to call this when you know that some deeper aspect of the
             * component's state has changed but `setState` was not called.
             *
             * This will not invoke `shouldComponentUpdate`, but it will invoke
             * `componentWillUpdate` and `componentDidUpdate`.
             *
             * @param {?function} callback Called after update is complete.
             * @final
             * @protected
             */

            Component.prototype.forceUpdate = function (callback) {
              this.updater.enqueueForceUpdate(this, callback, 'forceUpdate');
            };
            /**
             * Deprecated APIs. These APIs used to exist on classic React classes but since
             * we would like to deprecate them, we're not going to move them over to this
             * modern base class. Instead, we define a getter that warns if it's accessed.
             */

            {
              var deprecatedAPIs = {
                isMounted: [
                  'isMounted',
                  'Instead, make sure to clean up subscriptions and pending requests in ' +
                    'componentWillUnmount to prevent memory leaks.',
                ],
                replaceState: [
                  'replaceState',
                  'Refactor your code to use setState instead (see ' +
                    'https://github.com/facebook/react/issues/3236).',
                ],
              };

              var defineDeprecationWarning = function (methodName, info) {
                Object.defineProperty(Component.prototype, methodName, {
                  get: function () {
                    warn(
                      '%s(...) is deprecated in plain JavaScript React classes. %s',
                      info[0],
                      info[1],
                    );

                    return undefined;
                  },
                });
              };

              for (var fnName in deprecatedAPIs) {
                if (deprecatedAPIs.hasOwnProperty(fnName)) {
                  defineDeprecationWarning(fnName, deprecatedAPIs[fnName]);
                }
              }
            }

            function ComponentDummy() {}

            ComponentDummy.prototype = Component.prototype;
            /**
             * Convenience component with default shallow equality check for sCU.
             */

            function PureComponent(props, context, updater) {
              this.props = props;
              this.context = context; // If a component has string refs, we will assign a different object later.

              this.refs = emptyObject;
              this.updater = updater || ReactNoopUpdateQueue;
            }

            var pureComponentPrototype = (PureComponent.prototype =
              new ComponentDummy());
            pureComponentPrototype.constructor = PureComponent; // Avoid an extra prototype jump for these methods.

            _assign(pureComponentPrototype, Component.prototype);

            pureComponentPrototype.isPureReactComponent = true;

            // an immutable object with a single mutable value
            function createRef() {
              var refObject = {
                current: null,
              };

              {
                Object.seal(refObject);
              }

              return refObject;
            }

            function getWrappedName(outerType, innerType, wrapperName) {
              var functionName = innerType.displayName || innerType.name || '';
              return (
                outerType.displayName ||
                (functionName !== ''
                  ? wrapperName + '(' + functionName + ')'
                  : wrapperName)
              );
            }

            function getContextName(type) {
              return type.displayName || 'Context';
            }

            function getComponentName(type) {
              if (type == null) {
                // Host root, text node or just invalid type.
                return null;
              }

              {
                if (typeof type.tag === 'number') {
                  error(
                    'Received an unexpected object in getComponentName(). ' +
                      'This is likely a bug in React. Please file an issue.',
                  );
                }
              }

              if (typeof type === 'function') {
                return type.displayName || type.name || null;
              }

              if (typeof type === 'string') {
                return type;
              }

              switch (type) {
                case exports.Fragment:
                  return 'Fragment';

                case REACT_PORTAL_TYPE:
                  return 'Portal';

                case exports.Profiler:
                  return 'Profiler';

                case exports.StrictMode:
                  return 'StrictMode';

                case exports.Suspense:
                  return 'Suspense';

                case REACT_SUSPENSE_LIST_TYPE:
                  return 'SuspenseList';
              }

              if (typeof type === 'object') {
                switch (type.$$typeof) {
                  case REACT_CONTEXT_TYPE:
                    var context = type;
                    return getContextName(context) + '.Consumer';

                  case REACT_PROVIDER_TYPE:
                    var provider = type;
                    return getContextName(provider._context) + '.Provider';

                  case REACT_FORWARD_REF_TYPE:
                    return getWrappedName(type, type.render, 'ForwardRef');

                  case REACT_MEMO_TYPE:
                    return getComponentName(type.type);

                  case REACT_BLOCK_TYPE:
                    return getComponentName(type._render);

                  case REACT_LAZY_TYPE: {
                    var lazyComponent = type;
                    var payload = lazyComponent._payload;
                    var init = lazyComponent._init;

                    try {
                      return getComponentName(init(payload));
                    } catch (x) {
                      return null;
                    }
                  }
                }
              }

              return null;
            }

            var hasOwnProperty = Object.prototype.hasOwnProperty;
            var RESERVED_PROPS = {
              key: true,
              ref: true,
              __self: true,
              __source: true,
            };
            var specialPropKeyWarningShown,
              specialPropRefWarningShown,
              didWarnAboutStringRefs;

            {
              didWarnAboutStringRefs = {};
            }

            function hasValidRef(config) {
              {
                if (hasOwnProperty.call(config, 'ref')) {
                  var getter = Object.getOwnPropertyDescriptor(
                    config,
                    'ref',
                  ).get;

                  if (getter && getter.isReactWarning) {
                    return false;
                  }
                }
              }

              return config.ref !== undefined;
            }

            function hasValidKey(config) {
              {
                if (hasOwnProperty.call(config, 'key')) {
                  var getter = Object.getOwnPropertyDescriptor(
                    config,
                    'key',
                  ).get;

                  if (getter && getter.isReactWarning) {
                    return false;
                  }
                }
              }

              return config.key !== undefined;
            }

            function defineKeyPropWarningGetter(props, displayName) {
              var warnAboutAccessingKey = function () {
                {
                  if (!specialPropKeyWarningShown) {
                    specialPropKeyWarningShown = true;

                    error(
                      '%s: `key` is not a prop. Trying to access it will result ' +
                        'in `undefined` being returned. If you need to access the same ' +
                        'value within the child component, you should pass it as a different ' +
                        'prop. (https://reactjs.org/link/special-props)',
                      displayName,
                    );
                  }
                }
              };

              warnAboutAccessingKey.isReactWarning = true;
              Object.defineProperty(props, 'key', {
                get: warnAboutAccessingKey,
                configurable: true,
              });
            }

            function defineRefPropWarningGetter(props, displayName) {
              var warnAboutAccessingRef = function () {
                {
                  if (!specialPropRefWarningShown) {
                    specialPropRefWarningShown = true;

                    error(
                      '%s: `ref` is not a prop. Trying to access it will result ' +
                        'in `undefined` being returned. If you need to access the same ' +
                        'value within the child component, you should pass it as a different ' +
                        'prop. (https://reactjs.org/link/special-props)',
                      displayName,
                    );
                  }
                }
              };

              warnAboutAccessingRef.isReactWarning = true;
              Object.defineProperty(props, 'ref', {
                get: warnAboutAccessingRef,
                configurable: true,
              });
            }

            function warnIfStringRefCannotBeAutoConverted(config) {
              {
                if (
                  typeof config.ref === 'string' &&
                  ReactCurrentOwner.current &&
                  config.__self &&
                  ReactCurrentOwner.current.stateNode !== config.__self
                ) {
                  var componentName = getComponentName(
                    ReactCurrentOwner.current.type,
                  );

                  if (!didWarnAboutStringRefs[componentName]) {
                    error(
                      'Component "%s" contains the string ref "%s". ' +
                        'Support for string refs will be removed in a future major release. ' +
                        'This case cannot be automatically converted to an arrow function. ' +
                        'We ask you to manually fix this case by using useRef() or createRef() instead. ' +
                        'Learn more about using refs safely here: ' +
                        'https://reactjs.org/link/strict-mode-string-ref',
                      componentName,
                      config.ref,
                    );

                    didWarnAboutStringRefs[componentName] = true;
                  }
                }
              }
            }
            /**
             * Factory method to create a new React element. This no longer adheres to
             * the class pattern, so do not use new to call it. Also, instanceof check
             * will not work. Instead test $$typeof field against Symbol.for('react.element') to check
             * if something is a React Element.
             *
             * @param {*} type
             * @param {*} props
             * @param {*} key
             * @param {string|object} ref
             * @param {*} owner
             * @param {*} self A *temporary* helper to detect places where `this` is
             * different from the `owner` when React.createElement is called, so that we
             * can warn. We want to get rid of owner and replace string `ref`s with arrow
             * functions, and as long as `this` and owner are the same, there will be no
             * change in behavior.
             * @param {*} source An annotation object (added by a transpiler or otherwise)
             * indicating filename, line number, and/or other information.
             * @internal
             */

            var ReactElement = function (
              type,
              key,
              ref,
              self,
              source,
              owner,
              props,
            ) {
              var element = {
                // This tag allows us to uniquely identify this as a React Element
                $$typeof: REACT_ELEMENT_TYPE,
                // Built-in properties that belong on the element
                type: type,
                key: key,
                ref: ref,
                props: props,
                // Record the component responsible for creating this element.
                _owner: owner,
              };

              {
                // The validation flag is currently mutative. We put it on
                // an external backing store so that we can freeze the whole object.
                // This can be replaced with a WeakMap once they are implemented in
                // commonly used development environments.
                element._store = {}; // To make comparing ReactElements easier for testing purposes, we make
                // the validation flag non-enumerable (where possible, which should
                // include every environment we run tests in), so the test framework
                // ignores it.

                Object.defineProperty(element._store, 'validated', {
                  configurable: false,
                  enumerable: false,
                  writable: true,
                  value: false,
                }); // self and source are DEV only properties.

                Object.defineProperty(element, '_self', {
                  configurable: false,
                  enumerable: false,
                  writable: false,
                  value: self,
                }); // Two elements created in two different places should be considered
                // equal for testing purposes and therefore we hide it from enumeration.

                Object.defineProperty(element, '_source', {
                  configurable: false,
                  enumerable: false,
                  writable: false,
                  value: source,
                });

                if (Object.freeze) {
                  Object.freeze(element.props);
                  Object.freeze(element);
                }
              }

              return element;
            };
            /**
             * Create and return a new ReactElement of the given type.
             * See https://reactjs.org/docs/react-api.html#createelement
             */

            function createElement(type, config, children) {
              var propName; // Reserved names are extracted

              var props = {};
              var key = null;
              var ref = null;
              var self = null;
              var source = null;

              if (config != null) {
                if (hasValidRef(config)) {
                  ref = config.ref;

                  {
                    warnIfStringRefCannotBeAutoConverted(config);
                  }
                }

                if (hasValidKey(config)) {
                  key = '' + config.key;
                }

                self = config.__self === undefined ? null : config.__self;
                source = config.__source === undefined ? null : config.__source; // Remaining properties are added to a new props object

                for (propName in config) {
                  if (
                    hasOwnProperty.call(config, propName) &&
                    !RESERVED_PROPS.hasOwnProperty(propName)
                  ) {
                    props[propName] = config[propName];
                  }
                }
              } // Children can be more than one argument, and those are transferred onto
              // the newly allocated props object.

              var childrenLength = arguments.length - 2;

              if (childrenLength === 1) {
                props.children = children;
              } else if (childrenLength > 1) {
                var childArray = Array(childrenLength);

                for (var i = 0; i < childrenLength; i++) {
                  childArray[i] = arguments[i + 2];
                }

                {
                  if (Object.freeze) {
                    Object.freeze(childArray);
                  }
                }

                props.children = childArray;
              } // Resolve default props

              if (type && type.defaultProps) {
                var defaultProps = type.defaultProps;

                for (propName in defaultProps) {
                  if (props[propName] === undefined) {
                    props[propName] = defaultProps[propName];
                  }
                }
              }

              {
                if (key || ref) {
                  var displayName =
                    typeof type === 'function'
                      ? type.displayName || type.name || 'Unknown'
                      : type;

                  if (key) {
                    defineKeyPropWarningGetter(props, displayName);
                  }

                  if (ref) {
                    defineRefPropWarningGetter(props, displayName);
                  }
                }
              }

              return ReactElement(
                type,
                key,
                ref,
                self,
                source,
                ReactCurrentOwner.current,
                props,
              );
            }
            function cloneAndReplaceKey(oldElement, newKey) {
              var newElement = ReactElement(
                oldElement.type,
                newKey,
                oldElement.ref,
                oldElement._self,
                oldElement._source,
                oldElement._owner,
                oldElement.props,
              );
              return newElement;
            }
            /**
             * Clone and return a new ReactElement using element as the starting point.
             * See https://reactjs.org/docs/react-api.html#cloneelement
             */

            function cloneElement(element, config, children) {
              if (!!(element === null || element === undefined)) {
                {
                  throw Error(
                    'React.cloneElement(...): The argument must be a React element, but you passed ' +
                      element +
                      '.',
                  );
                }
              }

              var propName; // Original props are copied

              var props = _assign({}, element.props); // Reserved names are extracted

              var key = element.key;
              var ref = element.ref; // Self is preserved since the owner is preserved.

              var self = element._self; // Source is preserved since cloneElement is unlikely to be targeted by a
              // transpiler, and the original source is probably a better indicator of the
              // true owner.

              var source = element._source; // Owner will be preserved, unless ref is overridden

              var owner = element._owner;

              if (config != null) {
                if (hasValidRef(config)) {
                  // Silently steal the ref from the parent.
                  ref = config.ref;
                  owner = ReactCurrentOwner.current;
                }

                if (hasValidKey(config)) {
                  key = '' + config.key;
                } // Remaining properties override existing props

                var defaultProps;

                if (element.type && element.type.defaultProps) {
                  defaultProps = element.type.defaultProps;
                }

                for (propName in config) {
                  if (
                    hasOwnProperty.call(config, propName) &&
                    !RESERVED_PROPS.hasOwnProperty(propName)
                  ) {
                    if (
                      config[propName] === undefined &&
                      defaultProps !== undefined
                    ) {
                      // Resolve default props
                      props[propName] = defaultProps[propName];
                    } else {
                      props[propName] = config[propName];
                    }
                  }
                }
              } // Children can be more than one argument, and those are transferred onto
              // the newly allocated props object.

              var childrenLength = arguments.length - 2;

              if (childrenLength === 1) {
                props.children = children;
              } else if (childrenLength > 1) {
                var childArray = Array(childrenLength);

                for (var i = 0; i < childrenLength; i++) {
                  childArray[i] = arguments[i + 2];
                }

                props.children = childArray;
              }

              return ReactElement(
                element.type,
                key,
                ref,
                self,
                source,
                owner,
                props,
              );
            }
            /**
             * Verifies the object is a ReactElement.
             * See https://reactjs.org/docs/react-api.html#isvalidelement
             * @param {?object} object
             * @return {boolean} True if `object` is a ReactElement.
             * @final
             */

            function isValidElement(object) {
              return (
                typeof object === 'object' &&
                object !== null &&
                object.$$typeof === REACT_ELEMENT_TYPE
              );
            }

            var SEPARATOR = '.';
            var SUBSEPARATOR = ':';
            /**
             * Escape and wrap key so it is safe to use as a reactid
             *
             * @param {string} key to be escaped.
             * @return {string} the escaped key.
             */

            function escape(key) {
              var escapeRegex = /[=:]/g;
              var escaperLookup = {
                '=': '=0',
                ':': '=2',
              };
              var escapedString = key.replace(escapeRegex, function (match) {
                return escaperLookup[match];
              });
              return '$' + escapedString;
            }
            /**
             * TODO: Test that a single child and an array with one item have the same key
             * pattern.
             */

            var didWarnAboutMaps = false;
            var userProvidedKeyEscapeRegex = /\/+/g;

            function escapeUserProvidedKey(text) {
              return text.replace(userProvidedKeyEscapeRegex, '$&/');
            }
            /**
             * Generate a key string that identifies a element within a set.
             *
             * @param {*} element A element that could contain a manual key.
             * @param {number} index Index that is used if a manual key is not provided.
             * @return {string}
             */

            function getElementKey(element, index) {
              // Do some typechecking here since we call this blindly. We want to ensure
              // that we don't block potential future ES APIs.
              if (
                typeof element === 'object' &&
                element !== null &&
                element.key != null
              ) {
                // Explicit key
                return escape('' + element.key);
              } // Implicit key determined by the index in the set

              return index.toString(36);
            }

            function mapIntoArray(
              children,
              array,
              escapedPrefix,
              nameSoFar,
              callback,
            ) {
              var type = typeof children;

              if (type === 'undefined' || type === 'boolean') {
                // All of the above are perceived as null.
                children = null;
              }

              var invokeCallback = false;

              if (children === null) {
                invokeCallback = true;
              } else {
                switch (type) {
                  case 'string':
                  case 'number':
                    invokeCallback = true;
                    break;

                  case 'object':
                    switch (children.$$typeof) {
                      case REACT_ELEMENT_TYPE:
                      case REACT_PORTAL_TYPE:
                        invokeCallback = true;
                    }
                }
              }

              if (invokeCallback) {
                var _child = children;
                var mappedChild = callback(_child); // If it's the only child, treat the name as if it was wrapped in an array
                // so that it's consistent if the number of children grows:

                var childKey =
                  nameSoFar === ''
                    ? SEPARATOR + getElementKey(_child, 0)
                    : nameSoFar;

                if (Array.isArray(mappedChild)) {
                  var escapedChildKey = '';

                  if (childKey != null) {
                    escapedChildKey = escapeUserProvidedKey(childKey) + '/';
                  }

                  mapIntoArray(
                    mappedChild,
                    array,
                    escapedChildKey,
                    '',
                    function (c) {
                      return c;
                    },
                  );
                } else if (mappedChild != null) {
                  if (isValidElement(mappedChild)) {
                    mappedChild = cloneAndReplaceKey(
                      mappedChild, // Keep both the (mapped) and old keys if they differ, just as
                      // traverseAllChildren used to do for objects as children
                      escapedPrefix + // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
                        (mappedChild.key &&
                        (!_child || _child.key !== mappedChild.key) // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
                          ? escapeUserProvidedKey('' + mappedChild.key) + '/'
                          : '') +
                        childKey,
                    );
                  }

                  array.push(mappedChild);
                }

                return 1;
              }

              var child;
              var nextName;
              var subtreeCount = 0; // Count of children found in the current subtree.

              var nextNamePrefix =
                nameSoFar === '' ? SEPARATOR : nameSoFar + SUBSEPARATOR;

              if (Array.isArray(children)) {
                for (var i = 0; i < children.length; i++) {
                  child = children[i];
                  nextName = nextNamePrefix + getElementKey(child, i);
                  subtreeCount += mapIntoArray(
                    child,
                    array,
                    escapedPrefix,
                    nextName,
                    callback,
                  );
                }
              } else {
                var iteratorFn = getIteratorFn(children);

                if (typeof iteratorFn === 'function') {
                  var iterableChildren = children;

                  {
                    // Warn about using Maps as children
                    if (iteratorFn === iterableChildren.entries) {
                      if (!didWarnAboutMaps) {
                        warn(
                          'Using Maps as children is not supported. ' +
                            'Use an array of keyed ReactElements instead.',
                        );
                      }

                      didWarnAboutMaps = true;
                    }
                  }

                  var iterator = iteratorFn.call(iterableChildren);
                  var step;
                  var ii = 0;

                  while (!(step = iterator.next()).done) {
                    child = step.value;
                    nextName = nextNamePrefix + getElementKey(child, ii++);
                    subtreeCount += mapIntoArray(
                      child,
                      array,
                      escapedPrefix,
                      nextName,
                      callback,
                    );
                  }
                } else if (type === 'object') {
                  var childrenString = '' + children;

                  {
                    {
                      throw Error(
                        'Objects are not valid as a React child (found: ' +
                          (childrenString === '[object Object]'
                            ? 'object with keys {' +
                              Object.keys(children).join(', ') +
                              '}'
                            : childrenString) +
                          '). If you meant to render a collection of children, use an array instead.',
                      );
                    }
                  }
                }
              }

              return subtreeCount;
            }

            /**
             * Maps children that are typically specified as `props.children`.
             *
             * See https://reactjs.org/docs/react-api.html#reactchildrenmap
             *
             * The provided mapFunction(child, index) will be called for each
             * leaf child.
             *
             * @param {?*} children Children tree container.
             * @param {function(*, int)} func The map function.
             * @param {*} context Context for mapFunction.
             * @return {object} Object containing the ordered map of results.
             */
            function mapChildren(children, func, context) {
              if (children == null) {
                return children;
              }

              var result = [];
              var count = 0;
              mapIntoArray(children, result, '', '', function (child) {
                return func.call(context, child, count++);
              });
              return result;
            }
            /**
             * Count the number of children that are typically specified as
             * `props.children`.
             *
             * See https://reactjs.org/docs/react-api.html#reactchildrencount
             *
             * @param {?*} children Children tree container.
             * @return {number} The number of children.
             */

            function countChildren(children) {
              var n = 0;
              mapChildren(children, function () {
                n++; // Don't return anything
              });
              return n;
            }

            /**
             * Iterates through children that are typically specified as `props.children`.
             *
             * See https://reactjs.org/docs/react-api.html#reactchildrenforeach
             *
             * The provided forEachFunc(child, index) will be called for each
             * leaf child.
             *
             * @param {?*} children Children tree container.
             * @param {function(*, int)} forEachFunc
             * @param {*} forEachContext Context for forEachContext.
             */
            function forEachChildren(children, forEachFunc, forEachContext) {
              mapChildren(
                children,
                function () {
                  forEachFunc.apply(this, arguments); // Don't return anything.
                },
                forEachContext,
              );
            }
            /**
             * Flatten a children object (typically specified as `props.children`) and
             * return an array with appropriately re-keyed children.
             *
             * See https://reactjs.org/docs/react-api.html#reactchildrentoarray
             */

            function toArray(children) {
              return (
                mapChildren(children, function (child) {
                  return child;
                }) || []
              );
            }
            /**
             * Returns the first child in a collection of children and verifies that there
             * is only one child in the collection.
             *
             * See https://reactjs.org/docs/react-api.html#reactchildrenonly
             *
             * The current implementation of this function assumes that a single child gets
             * passed without a wrapper, but the purpose of this helper function is to
             * abstract away the particular structure of children.
             *
             * @param {?object} children Child collection structure.
             * @return {ReactElement} The first and only `ReactElement` contained in the
             * structure.
             */

            function onlyChild(children) {
              if (!isValidElement(children)) {
                {
                  throw Error(
                    'React.Children.only expected to receive a single React element child.',
                  );
                }
              }

              return children;
            }

            function createContext(defaultValue, calculateChangedBits) {
              if (calculateChangedBits === undefined) {
                calculateChangedBits = null;
              } else {
                {
                  if (
                    calculateChangedBits !== null &&
                    typeof calculateChangedBits !== 'function'
                  ) {
                    error(
                      'createContext: Expected the optional second argument to be a ' +
                        'function. Instead received: %s',
                      calculateChangedBits,
                    );
                  }
                }
              }

              var context = {
                $$typeof: REACT_CONTEXT_TYPE,
                _calculateChangedBits: calculateChangedBits,
                // As a workaround to support multiple concurrent renderers, we categorize
                // some renderers as primary and others as secondary. We only expect
                // there to be two concurrent renderers at most: React Native (primary) and
                // Fabric (secondary); React DOM (primary) and React ART (secondary).
                // Secondary renderers store their context values on separate fields.
                _currentValue: defaultValue,
                _currentValue2: defaultValue,
                // Used to track how many concurrent renderers this context currently
                // supports within in a single renderer. Such as parallel server rendering.
                _threadCount: 0,
                // These are circular
                Provider: null,
                Consumer: null,
              };
              context.Provider = {
                $$typeof: REACT_PROVIDER_TYPE,
                _context: context,
              };
              var hasWarnedAboutUsingNestedContextConsumers = false;
              var hasWarnedAboutUsingConsumerProvider = false;
              var hasWarnedAboutDisplayNameOnConsumer = false;

              {
                // A separate object, but proxies back to the original context object for
                // backwards compatibility. It has a different $$typeof, so we can properly
                // warn for the incorrect usage of Context as a Consumer.
                var Consumer = {
                  $$typeof: REACT_CONTEXT_TYPE,
                  _context: context,
                  _calculateChangedBits: context._calculateChangedBits,
                }; // $FlowFixMe: Flow complains about not setting a value, which is intentional here

                Object.defineProperties(Consumer, {
                  Provider: {
                    get: function () {
                      if (!hasWarnedAboutUsingConsumerProvider) {
                        hasWarnedAboutUsingConsumerProvider = true;

                        error(
                          'Rendering <Context.Consumer.Provider> is not supported and will be removed in ' +
                            'a future major release. Did you mean to render <Context.Provider> instead?',
                        );
                      }

                      return context.Provider;
                    },
                    set: function (_Provider) {
                      context.Provider = _Provider;
                    },
                  },
                  _currentValue: {
                    get: function () {
                      return context._currentValue;
                    },
                    set: function (_currentValue) {
                      context._currentValue = _currentValue;
                    },
                  },
                  _currentValue2: {
                    get: function () {
                      return context._currentValue2;
                    },
                    set: function (_currentValue2) {
                      context._currentValue2 = _currentValue2;
                    },
                  },
                  _threadCount: {
                    get: function () {
                      return context._threadCount;
                    },
                    set: function (_threadCount) {
                      context._threadCount = _threadCount;
                    },
                  },
                  Consumer: {
                    get: function () {
                      if (!hasWarnedAboutUsingNestedContextConsumers) {
                        hasWarnedAboutUsingNestedContextConsumers = true;

                        error(
                          'Rendering <Context.Consumer.Consumer> is not supported and will be removed in ' +
                            'a future major release. Did you mean to render <Context.Consumer> instead?',
                        );
                      }

                      return context.Consumer;
                    },
                  },
                  displayName: {
                    get: function () {
                      return context.displayName;
                    },
                    set: function (displayName) {
                      if (!hasWarnedAboutDisplayNameOnConsumer) {
                        warn(
                          'Setting `displayName` on Context.Consumer has no effect. ' +
                            "You should set it directly on the context with Context.displayName = '%s'.",
                          displayName,
                        );

                        hasWarnedAboutDisplayNameOnConsumer = true;
                      }
                    },
                  },
                }); // $FlowFixMe: Flow complains about missing properties because it doesn't understand defineProperty

                context.Consumer = Consumer;
              }

              {
                context._currentRenderer = null;
                context._currentRenderer2 = null;
              }

              return context;
            }

            var Uninitialized = -1;
            var Pending = 0;
            var Resolved = 1;
            var Rejected = 2;

            function lazyInitializer(payload) {
              if (payload._status === Uninitialized) {
                var ctor = payload._result;
                var thenable = ctor(); // Transition to the next state.

                var pending = payload;
                pending._status = Pending;
                pending._result = thenable;
                thenable.then(
                  function (moduleObject) {
                    if (payload._status === Pending) {
                      var defaultExport = moduleObject.default;

                      {
                        if (defaultExport === undefined) {
                          error(
                            'lazy: Expected the result of a dynamic import() call. ' +
                              'Instead received: %s\n\nYour code should look like: \n  ' + // Break up imports to avoid accidentally parsing them as dependencies.
                              'const MyComponent = lazy(() => imp' +
                              "ort('./MyComponent'))",
                            moduleObject,
                          );
                        }
                      } // Transition to the next state.

                      var resolved = payload;
                      resolved._status = Resolved;
                      resolved._result = defaultExport;
                    }
                  },
                  function (error) {
                    if (payload._status === Pending) {
                      // Transition to the next state.
                      var rejected = payload;
                      rejected._status = Rejected;
                      rejected._result = error;
                    }
                  },
                );
              }

              if (payload._status === Resolved) {
                return payload._result;
              } else {
                throw payload._result;
              }
            }

            function lazy(ctor) {
              var payload = {
                // We use these fields to store the result.
                _status: -1,
                _result: ctor,
              };
              var lazyType = {
                $$typeof: REACT_LAZY_TYPE,
                _payload: payload,
                _init: lazyInitializer,
              };

              {
                // In production, this would just set it on the object.
                var defaultProps;
                var propTypes; // $FlowFixMe

                Object.defineProperties(lazyType, {
                  defaultProps: {
                    configurable: true,
                    get: function () {
                      return defaultProps;
                    },
                    set: function (newDefaultProps) {
                      error(
                        'React.lazy(...): It is not supported to assign `defaultProps` to ' +
                          'a lazy component import. Either specify them where the component ' +
                          'is defined, or create a wrapping component around it.',
                      );

                      defaultProps = newDefaultProps; // Match production behavior more closely:
                      // $FlowFixMe

                      Object.defineProperty(lazyType, 'defaultProps', {
                        enumerable: true,
                      });
                    },
                  },
                  propTypes: {
                    configurable: true,
                    get: function () {
                      return propTypes;
                    },
                    set: function (newPropTypes) {
                      error(
                        'React.lazy(...): It is not supported to assign `propTypes` to ' +
                          'a lazy component import. Either specify them where the component ' +
                          'is defined, or create a wrapping component around it.',
                      );

                      propTypes = newPropTypes; // Match production behavior more closely:
                      // $FlowFixMe

                      Object.defineProperty(lazyType, 'propTypes', {
                        enumerable: true,
                      });
                    },
                  },
                });
              }

              return lazyType;
            }

            function forwardRef(render) {
              {
                if (render != null && render.$$typeof === REACT_MEMO_TYPE) {
                  error(
                    'forwardRef requires a render function but received a `memo` ' +
                      'component. Instead of forwardRef(memo(...)), use ' +
                      'memo(forwardRef(...)).',
                  );
                } else if (typeof render !== 'function') {
                  error(
                    'forwardRef requires a render function but was given %s.',
                    render === null ? 'null' : typeof render,
                  );
                } else {
                  if (render.length !== 0 && render.length !== 2) {
                    error(
                      'forwardRef render functions accept exactly two parameters: props and ref. %s',
                      render.length === 1
                        ? 'Did you forget to use the ref parameter?'
                        : 'Any additional parameter will be undefined.',
                    );
                  }
                }

                if (render != null) {
                  if (render.defaultProps != null || render.propTypes != null) {
                    error(
                      'forwardRef render functions do not support propTypes or defaultProps. ' +
                        'Did you accidentally pass a React component?',
                    );
                  }
                }
              }

              var elementType = {
                $$typeof: REACT_FORWARD_REF_TYPE,
                render: render,
              };

              {
                var ownName;
                Object.defineProperty(elementType, 'displayName', {
                  enumerable: false,
                  configurable: true,
                  get: function () {
                    return ownName;
                  },
                  set: function (name) {
                    ownName = name;

                    if (render.displayName == null) {
                      render.displayName = name;
                    }
                  },
                });
              }

              return elementType;
            }

            // Filter certain DOM attributes (e.g. src, href) if their values are empty strings.

            var enableScopeAPI = false; // Experimental Create Event Handle API.

            function isValidElementType(type) {
              if (typeof type === 'string' || typeof type === 'function') {
                return true;
              } // Note: typeof might be other than 'symbol' or 'number' (e.g. if it's a polyfill).

              if (
                type === exports.Fragment ||
                type === exports.Profiler ||
                type === REACT_DEBUG_TRACING_MODE_TYPE ||
                type === exports.StrictMode ||
                type === exports.Suspense ||
                type === REACT_SUSPENSE_LIST_TYPE ||
                type === REACT_LEGACY_HIDDEN_TYPE ||
                enableScopeAPI
              ) {
                return true;
              }

              if (typeof type === 'object' && type !== null) {
                if (
                  type.$$typeof === REACT_LAZY_TYPE ||
                  type.$$typeof === REACT_MEMO_TYPE ||
                  type.$$typeof === REACT_PROVIDER_TYPE ||
                  type.$$typeof === REACT_CONTEXT_TYPE ||
                  type.$$typeof === REACT_FORWARD_REF_TYPE ||
                  type.$$typeof === REACT_FUNDAMENTAL_TYPE ||
                  type.$$typeof === REACT_BLOCK_TYPE ||
                  type[0] === REACT_SERVER_BLOCK_TYPE
                ) {
                  return true;
                }
              }

              return false;
            }

            function memo(type, compare) {
              {
                if (!isValidElementType(type)) {
                  error(
                    'memo: The first argument must be a component. Instead ' +
                      'received: %s',
                    type === null ? 'null' : typeof type,
                  );
                }
              }

              var elementType = {
                $$typeof: REACT_MEMO_TYPE,
                type: type,
                compare: compare === undefined ? null : compare,
              };

              {
                var ownName;
                Object.defineProperty(elementType, 'displayName', {
                  enumerable: false,
                  configurable: true,
                  get: function () {
                    return ownName;
                  },
                  set: function (name) {
                    ownName = name;

                    if (type.displayName == null) {
                      type.displayName = name;
                    }
                  },
                });
              }

              return elementType;
            }

            function resolveDispatcher() {
              var dispatcher = ReactCurrentDispatcher.current;

              if (!(dispatcher !== null)) {
                {
                  throw Error(
                    'Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.',
                  );
                }
              }

              return dispatcher;
            }

            function useContext(Context, unstable_observedBits) {
              var dispatcher = resolveDispatcher();

              {
                if (unstable_observedBits !== undefined) {
                  error(
                    'useContext() second argument is reserved for future ' +
                      'use in React. Passing it is not supported. ' +
                      'You passed: %s.%s',
                    unstable_observedBits,
                    typeof unstable_observedBits === 'number' &&
                      Array.isArray(arguments[2])
                      ? '\n\nDid you call array.map(useContext)? ' +
                          'Calling Hooks inside a loop is not supported. ' +
                          'Learn more at https://reactjs.org/link/rules-of-hooks'
                      : '',
                  );
                } // TODO: add a more generic warning for invalid values.

                if (Context._context !== undefined) {
                  var realContext = Context._context; // Don't deduplicate because this legitimately causes bugs
                  // and nobody should be using this in existing code.

                  if (realContext.Consumer === Context) {
                    error(
                      'Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be ' +
                        'removed in a future major release. Did you mean to call useContext(Context) instead?',
                    );
                  } else if (realContext.Provider === Context) {
                    error(
                      'Calling useContext(Context.Provider) is not supported. ' +
                        'Did you mean to call useContext(Context) instead?',
                    );
                  }
                }
              }

              return dispatcher.useContext(Context, unstable_observedBits);
            }
            function useState(initialState) {
              var dispatcher = resolveDispatcher();
              return dispatcher.useState(initialState);
            }
            function useReducer(reducer, initialArg, init) {
              var dispatcher = resolveDispatcher();
              return dispatcher.useReducer(reducer, initialArg, init);
            }
            function useRef(initialValue) {
              var dispatcher = resolveDispatcher();
              return dispatcher.useRef(initialValue);
            }
            function useEffect(create, deps) {
              var dispatcher = resolveDispatcher();
              return dispatcher.useEffect(create, deps);
            }
            function useLayoutEffect(create, deps) {
              var dispatcher = resolveDispatcher();
              return dispatcher.useLayoutEffect(create, deps);
            }
            function useCallback(callback, deps) {
              var dispatcher = resolveDispatcher();
              return dispatcher.useCallback(callback, deps);
            }
            function useMemo(create, deps) {
              var dispatcher = resolveDispatcher();
              return dispatcher.useMemo(create, deps);
            }
            function useImperativeHandle(ref, create, deps) {
              var dispatcher = resolveDispatcher();
              return dispatcher.useImperativeHandle(ref, create, deps);
            }
            function useDebugValue(value, formatterFn) {
              {
                var dispatcher = resolveDispatcher();
                return dispatcher.useDebugValue(value, formatterFn);
              }
            }

            // Helpers to patch console.logs to avoid logging during side-effect free
            // replaying on render function. This currently only patches the object
            // lazily which won't cover if the log function was extracted eagerly.
            // We could also eagerly patch the method.
            var disabledDepth = 0;
            var prevLog;
            var prevInfo;
            var prevWarn;
            var prevError;
            var prevGroup;
            var prevGroupCollapsed;
            var prevGroupEnd;

            function disabledLog() {}

            disabledLog.__reactDisabledLog = true;
            function disableLogs() {
              {
                if (disabledDepth === 0) {
                  /* eslint-disable react-internal/no-production-logging */
                  prevLog = console.log;
                  prevInfo = console.info;
                  prevWarn = console.warn;
                  prevError = console.error;
                  prevGroup = console.group;
                  prevGroupCollapsed = console.groupCollapsed;
                  prevGroupEnd = console.groupEnd; // https://github.com/facebook/react/issues/19099

                  var props = {
                    configurable: true,
                    enumerable: true,
                    value: disabledLog,
                    writable: true,
                  }; // $FlowFixMe Flow thinks console is immutable.

                  Object.defineProperties(console, {
                    info: props,
                    log: props,
                    warn: props,
                    error: props,
                    group: props,
                    groupCollapsed: props,
                    groupEnd: props,
                  });
                  /* eslint-enable react-internal/no-production-logging */
                }

                disabledDepth++;
              }
            }
            function reenableLogs() {
              {
                disabledDepth--;

                if (disabledDepth === 0) {
                  /* eslint-disable react-internal/no-production-logging */
                  var props = {
                    configurable: true,
                    enumerable: true,
                    writable: true,
                  }; // $FlowFixMe Flow thinks console is immutable.

                  Object.defineProperties(console, {
                    log: _assign({}, props, {
                      value: prevLog,
                    }),
                    info: _assign({}, props, {
                      value: prevInfo,
                    }),
                    warn: _assign({}, props, {
                      value: prevWarn,
                    }),
                    error: _assign({}, props, {
                      value: prevError,
                    }),
                    group: _assign({}, props, {
                      value: prevGroup,
                    }),
                    groupCollapsed: _assign({}, props, {
                      value: prevGroupCollapsed,
                    }),
                    groupEnd: _assign({}, props, {
                      value: prevGroupEnd,
                    }),
                  });
                  /* eslint-enable react-internal/no-production-logging */
                }

                if (disabledDepth < 0) {
                  error(
                    'disabledDepth fell below zero. ' +
                      'This is a bug in React. Please file an issue.',
                  );
                }
              }
            }

            var ReactCurrentDispatcher$1 =
              ReactSharedInternals.ReactCurrentDispatcher;
            var prefix;
            function describeBuiltInComponentFrame(name, source, ownerFn) {
              {
                if (prefix === undefined) {
                  // Extract the VM specific prefix used by each line.
                  try {
                    throw Error();
                  } catch (x) {
                    var match = x.stack.trim().match(/\n( *(at )?)/);
                    prefix = (match && match[1]) || '';
                  }
                } // We use the prefix to ensure our stacks line up with native stack frames.

                return '\n' + prefix + name;
              }
            }
            var reentry = false;
            var componentFrameCache;

            {
              var PossiblyWeakMap =
                typeof WeakMap === 'function' ? WeakMap : Map;
              componentFrameCache = new PossiblyWeakMap();
            }

            function describeNativeComponentFrame(fn, construct) {
              // If something asked for a stack inside a fake render, it should get ignored.
              if (!fn || reentry) {
                return '';
              }

              {
                var frame = componentFrameCache.get(fn);

                if (frame !== undefined) {
                  return frame;
                }
              }

              var control;
              reentry = true;
              var previousPrepareStackTrace = Error.prepareStackTrace; // $FlowFixMe It does accept undefined.

              Error.prepareStackTrace = undefined;
              var previousDispatcher;

              {
                previousDispatcher = ReactCurrentDispatcher$1.current; // Set the dispatcher in DEV because this might be call in the render function
                // for warnings.

                ReactCurrentDispatcher$1.current = null;
                disableLogs();
              }

              try {
                // This should throw.
                if (construct) {
                  // Something should be setting the props in the constructor.
                  var Fake = function () {
                    throw Error();
                  }; // $FlowFixMe

                  Object.defineProperty(Fake.prototype, 'props', {
                    set: function () {
                      // We use a throwing setter instead of frozen or non-writable props
                      // because that won't throw in a non-strict mode function.
                      throw Error();
                    },
                  });

                  if (typeof Reflect === 'object' && Reflect.construct) {
                    // We construct a different control for this case to include any extra
                    // frames added by the construct call.
                    try {
                      Reflect.construct(Fake, []);
                    } catch (x) {
                      control = x;
                    }

                    Reflect.construct(fn, [], Fake);
                  } else {
                    try {
                      Fake.call();
                    } catch (x) {
                      control = x;
                    }

                    fn.call(Fake.prototype);
                  }
                } else {
                  try {
                    throw Error();
                  } catch (x) {
                    control = x;
                  }

                  fn();
                }
              } catch (sample) {
                // This is inlined manually because closure doesn't do it for us.
                if (sample && control && typeof sample.stack === 'string') {
                  // This extracts the first frame from the sample that isn't also in the control.
                  // Skipping one frame that we assume is the frame that calls the two.
                  var sampleLines = sample.stack.split('\n');
                  var controlLines = control.stack.split('\n');
                  var s = sampleLines.length - 1;
                  var c = controlLines.length - 1;

                  while (
                    s >= 1 &&
                    c >= 0 &&
                    sampleLines[s] !== controlLines[c]
                  ) {
                    // We expect at least one stack frame to be shared.
                    // Typically this will be the root most one. However, stack frames may be
                    // cut off due to maximum stack limits. In this case, one maybe cut off
                    // earlier than the other. We assume that the sample is longer or the same
                    // and there for cut off earlier. So we should find the root most frame in
                    // the sample somewhere in the control.
                    c--;
                  }

                  for (; s >= 1 && c >= 0; s--, c--) {
                    // Next we find the first one that isn't the same which should be the
                    // frame that called our sample function and the control.
                    if (sampleLines[s] !== controlLines[c]) {
                      // In V8, the first line is describing the message but other VMs don't.
                      // If we're about to return the first line, and the control is also on the same
                      // line, that's a pretty good indicator that our sample threw at same line as
                      // the control. I.e. before we entered the sample frame. So we ignore this result.
                      // This can happen if you passed a class to function component, or non-function.
                      if (s !== 1 || c !== 1) {
                        do {
                          s--;
                          c--; // We may still have similar intermediate frames from the construct call.
                          // The next one that isn't the same should be our match though.

                          if (c < 0 || sampleLines[s] !== controlLines[c]) {
                            // V8 adds a "new" prefix for native classes. Let's remove it to make it prettier.
                            var _frame =
                              '\n' + sampleLines[s].replace(' at new ', ' at ');

                            {
                              if (typeof fn === 'function') {
                                componentFrameCache.set(fn, _frame);
                              }
                            } // Return the line we found.

                            return _frame;
                          }
                        } while (s >= 1 && c >= 0);
                      }

                      break;
                    }
                  }
                }
              } finally {
                reentry = false;

                {
                  ReactCurrentDispatcher$1.current = previousDispatcher;
                  reenableLogs();
                }

                Error.prepareStackTrace = previousPrepareStackTrace;
              } // Fallback to just using the name if we couldn't make it throw.

              var name = fn ? fn.displayName || fn.name : '';
              var syntheticFrame = name
                ? describeBuiltInComponentFrame(name)
                : '';

              {
                if (typeof fn === 'function') {
                  componentFrameCache.set(fn, syntheticFrame);
                }
              }

              return syntheticFrame;
            }
            function describeFunctionComponentFrame(fn, source, ownerFn) {
              {
                return describeNativeComponentFrame(fn, false);
              }
            }

            function shouldConstruct(Component) {
              var prototype = Component.prototype;
              return !!(prototype && prototype.isReactComponent);
            }

            function describeUnknownElementTypeFrameInDEV(
              type,
              source,
              ownerFn,
            ) {
              if (type == null) {
                return '';
              }

              if (typeof type === 'function') {
                {
                  return describeNativeComponentFrame(
                    type,
                    shouldConstruct(type),
                  );
                }
              }

              if (typeof type === 'string') {
                return describeBuiltInComponentFrame(type);
              }

              switch (type) {
                case exports.Suspense:
                  return describeBuiltInComponentFrame('Suspense');

                case REACT_SUSPENSE_LIST_TYPE:
                  return describeBuiltInComponentFrame('SuspenseList');
              }

              if (typeof type === 'object') {
                switch (type.$$typeof) {
                  case REACT_FORWARD_REF_TYPE:
                    return describeFunctionComponentFrame(type.render);

                  case REACT_MEMO_TYPE:
                    // Memo may contain any component type so we recursively resolve it.
                    return describeUnknownElementTypeFrameInDEV(
                      type.type,
                      source,
                      ownerFn,
                    );

                  case REACT_BLOCK_TYPE:
                    return describeFunctionComponentFrame(type._render);

                  case REACT_LAZY_TYPE: {
                    var lazyComponent = type;
                    var payload = lazyComponent._payload;
                    var init = lazyComponent._init;

                    try {
                      // Lazy may contain any component type so we recursively resolve it.
                      return describeUnknownElementTypeFrameInDEV(
                        init(payload),
                        source,
                        ownerFn,
                      );
                    } catch (x) {}
                  }
                }
              }

              return '';
            }

            var loggedTypeFailures = {};
            var ReactDebugCurrentFrame$1 =
              ReactSharedInternals.ReactDebugCurrentFrame;

            function setCurrentlyValidatingElement(element) {
              {
                if (element) {
                  var owner = element._owner;
                  var stack = describeUnknownElementTypeFrameInDEV(
                    element.type,
                    element._source,
                    owner ? owner.type : null,
                  );
                  ReactDebugCurrentFrame$1.setExtraStackFrame(stack);
                } else {
                  ReactDebugCurrentFrame$1.setExtraStackFrame(null);
                }
              }
            }

            function checkPropTypes(
              typeSpecs,
              values,
              location,
              componentName,
              element,
            ) {
              {
                // $FlowFixMe This is okay but Flow doesn't know it.
                var has = Function.call.bind(Object.prototype.hasOwnProperty);

                for (var typeSpecName in typeSpecs) {
                  if (has(typeSpecs, typeSpecName)) {
                    var error$1 = void 0; // Prop type validation may throw. In case they do, we don't want to
                    // fail the render phase where it didn't fail before. So we log it.
                    // After these have been cleaned up, we'll let them throw.

                    try {
                      // This is intentionally an invariant that gets caught. It's the same
                      // behavior as without this statement except with a better message.
                      if (typeof typeSpecs[typeSpecName] !== 'function') {
                        var err = Error(
                          (componentName || 'React class') +
                            ': ' +
                            location +
                            ' type `' +
                            typeSpecName +
                            '` is invalid; ' +
                            'it must be a function, usually from the `prop-types` package, but received `' +
                            typeof typeSpecs[typeSpecName] +
                            '`.' +
                            'This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.',
                        );
                        err.name = 'Invariant Violation';
                        throw err;
                      }

                      error$1 = typeSpecs[typeSpecName](
                        values,
                        typeSpecName,
                        componentName,
                        location,
                        null,
                        'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED',
                      );
                    } catch (ex) {
                      error$1 = ex;
                    }

                    if (error$1 && !(error$1 instanceof Error)) {
                      setCurrentlyValidatingElement(element);

                      error(
                        '%s: type specification of %s' +
                          ' `%s` is invalid; the type checker ' +
                          'function must return `null` or an `Error` but returned a %s. ' +
                          'You may have forgotten to pass an argument to the type checker ' +
                          'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
                          'shape all require an argument).',
                        componentName || 'React class',
                        location,
                        typeSpecName,
                        typeof error$1,
                      );

                      setCurrentlyValidatingElement(null);
                    }

                    if (
                      error$1 instanceof Error &&
                      !(error$1.message in loggedTypeFailures)
                    ) {
                      // Only monitor this failure once because there tends to be a lot of the
                      // same error.
                      loggedTypeFailures[error$1.message] = true;
                      setCurrentlyValidatingElement(element);

                      error('Failed %s type: %s', location, error$1.message);

                      setCurrentlyValidatingElement(null);
                    }
                  }
                }
              }
            }

            function setCurrentlyValidatingElement$1(element) {
              {
                if (element) {
                  var owner = element._owner;
                  var stack = describeUnknownElementTypeFrameInDEV(
                    element.type,
                    element._source,
                    owner ? owner.type : null,
                  );
                  setExtraStackFrame(stack);
                } else {
                  setExtraStackFrame(null);
                }
              }
            }

            var propTypesMisspellWarningShown;

            {
              propTypesMisspellWarningShown = false;
            }

            function getDeclarationErrorAddendum() {
              if (ReactCurrentOwner.current) {
                var name = getComponentName(ReactCurrentOwner.current.type);

                if (name) {
                  return '\n\nCheck the render method of `' + name + '`.';
                }
              }

              return '';
            }

            function getSourceInfoErrorAddendum(source) {
              if (source !== undefined) {
                var fileName = source.fileName.replace(/^.*[\\\/]/, '');
                var lineNumber = source.lineNumber;
                return (
                  '\n\nCheck your code at ' + fileName + ':' + lineNumber + '.'
                );
              }

              return '';
            }

            function getSourceInfoErrorAddendumForProps(elementProps) {
              if (elementProps !== null && elementProps !== undefined) {
                return getSourceInfoErrorAddendum(elementProps.__source);
              }

              return '';
            }
            /**
             * Warn if there's no key explicitly set on dynamic arrays of children or
             * object keys are not valid. This allows us to keep track of children between
             * updates.
             */

            var ownerHasKeyUseWarning = {};

            function getCurrentComponentErrorInfo(parentType) {
              var info = getDeclarationErrorAddendum();

              if (!info) {
                var parentName =
                  typeof parentType === 'string'
                    ? parentType
                    : parentType.displayName || parentType.name;

                if (parentName) {
                  info =
                    '\n\nCheck the top-level render call using <' +
                    parentName +
                    '>.';
                }
              }

              return info;
            }
            /**
             * Warn if the element doesn't have an explicit key assigned to it.
             * This element is in an array. The array could grow and shrink or be
             * reordered. All children that haven't already been validated are required to
             * have a "key" property assigned to it. Error statuses are cached so a warning
             * will only be shown once.
             *
             * @internal
             * @param {ReactElement} element Element that requires a key.
             * @param {*} parentType element's parent's type.
             */

            function validateExplicitKey(element, parentType) {
              if (
                !element._store ||
                element._store.validated ||
                element.key != null
              ) {
                return;
              }

              element._store.validated = true;
              var currentComponentErrorInfo =
                getCurrentComponentErrorInfo(parentType);

              if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
                return;
              }

              ownerHasKeyUseWarning[currentComponentErrorInfo] = true; // Usually the current owner is the offender, but if it accepts children as a
              // property, it may be the creator of the child that's responsible for
              // assigning it a key.

              var childOwner = '';

              if (
                element &&
                element._owner &&
                element._owner !== ReactCurrentOwner.current
              ) {
                // Give the component that originally created this child.
                childOwner =
                  ' It was passed a child from ' +
                  getComponentName(element._owner.type) +
                  '.';
              }

              {
                setCurrentlyValidatingElement$1(element);

                error(
                  'Each child in a list should have a unique "key" prop.' +
                    '%s%s See https://reactjs.org/link/warning-keys for more information.',
                  currentComponentErrorInfo,
                  childOwner,
                );

                setCurrentlyValidatingElement$1(null);
              }
            }
            /**
             * Ensure that every element either is passed in a static location, in an
             * array with an explicit keys property defined, or in an object literal
             * with valid key property.
             *
             * @internal
             * @param {ReactNode} node Statically passed child of any type.
             * @param {*} parentType node's parent's type.
             */

            function validateChildKeys(node, parentType) {
              if (typeof node !== 'object') {
                return;
              }

              if (Array.isArray(node)) {
                for (var i = 0; i < node.length; i++) {
                  var child = node[i];

                  if (isValidElement(child)) {
                    validateExplicitKey(child, parentType);
                  }
                }
              } else if (isValidElement(node)) {
                // This element was passed in a valid location.
                if (node._store) {
                  node._store.validated = true;
                }
              } else if (node) {
                var iteratorFn = getIteratorFn(node);

                if (typeof iteratorFn === 'function') {
                  // Entry iterators used to provide implicit keys,
                  // but now we print a separate warning for them later.
                  if (iteratorFn !== node.entries) {
                    var iterator = iteratorFn.call(node);
                    var step;

                    while (!(step = iterator.next()).done) {
                      if (isValidElement(step.value)) {
                        validateExplicitKey(step.value, parentType);
                      }
                    }
                  }
                }
              }
            }
            /**
             * Given an element, validate that its props follow the propTypes definition,
             * provided by the type.
             *
             * @param {ReactElement} element
             */

            function validatePropTypes(element) {
              {
                var type = element.type;

                if (
                  type === null ||
                  type === undefined ||
                  typeof type === 'string'
                ) {
                  return;
                }

                var propTypes;

                if (typeof type === 'function') {
                  propTypes = type.propTypes;
                } else if (
                  typeof type === 'object' &&
                  (type.$$typeof === REACT_FORWARD_REF_TYPE || // Note: Memo only checks outer props here.
                    // Inner props are checked in the reconciler.
                    type.$$typeof === REACT_MEMO_TYPE)
                ) {
                  propTypes = type.propTypes;
                } else {
                  return;
                }

                if (propTypes) {
                  // Intentionally inside to avoid triggering lazy initializers:
                  var name = getComponentName(type);
                  checkPropTypes(
                    propTypes,
                    element.props,
                    'prop',
                    name,
                    element,
                  );
                } else if (
                  type.PropTypes !== undefined &&
                  !propTypesMisspellWarningShown
                ) {
                  propTypesMisspellWarningShown = true; // Intentionally inside to avoid triggering lazy initializers:

                  var _name = getComponentName(type);

                  error(
                    'Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?',
                    _name || 'Unknown',
                  );
                }

                if (
                  typeof type.getDefaultProps === 'function' &&
                  !type.getDefaultProps.isReactClassApproved
                ) {
                  error(
                    'getDefaultProps is only used on classic React.createClass ' +
                      'definitions. Use a static property named `defaultProps` instead.',
                  );
                }
              }
            }
            /**
             * Given a fragment, validate that it can only be provided with fragment props
             * @param {ReactElement} fragment
             */

            function validateFragmentProps(fragment) {
              {
                var keys = Object.keys(fragment.props);

                for (var i = 0; i < keys.length; i++) {
                  var key = keys[i];

                  if (key !== 'children' && key !== 'key') {
                    setCurrentlyValidatingElement$1(fragment);

                    error(
                      'Invalid prop `%s` supplied to `React.Fragment`. ' +
                        'React.Fragment can only have `key` and `children` props.',
                      key,
                    );

                    setCurrentlyValidatingElement$1(null);
                    break;
                  }
                }

                if (fragment.ref !== null) {
                  setCurrentlyValidatingElement$1(fragment);

                  error(
                    'Invalid attribute `ref` supplied to `React.Fragment`.',
                  );

                  setCurrentlyValidatingElement$1(null);
                }
              }
            }
            function createElementWithValidation(type, props, children) {
              var validType = isValidElementType(type); // We warn in this case but don't throw. We expect the element creation to
              // succeed and there will likely be errors in render.

              if (!validType) {
                var info = '';

                if (
                  type === undefined ||
                  (typeof type === 'object' &&
                    type !== null &&
                    Object.keys(type).length === 0)
                ) {
                  info +=
                    ' You likely forgot to export your component from the file ' +
                    "it's defined in, or you might have mixed up default and named imports.";
                }

                var sourceInfo = getSourceInfoErrorAddendumForProps(props);

                if (sourceInfo) {
                  info += sourceInfo;
                } else {
                  info += getDeclarationErrorAddendum();
                }

                var typeString;

                if (type === null) {
                  typeString = 'null';
                } else if (Array.isArray(type)) {
                  typeString = 'array';
                } else if (
                  type !== undefined &&
                  type.$$typeof === REACT_ELEMENT_TYPE
                ) {
                  typeString =
                    '<' + (getComponentName(type.type) || 'Unknown') + ' />';
                  info =
                    ' Did you accidentally export a JSX literal instead of a component?';
                } else {
                  typeString = typeof type;
                }

                {
                  error(
                    'React.createElement: type is invalid -- expected a string (for ' +
                      'built-in components) or a class/function (for composite ' +
                      'components) but got: %s.%s',
                    typeString,
                    info,
                  );
                }
              }

              var element = createElement.apply(this, arguments); // The result can be nullish if a mock or a custom function is used.
              // TODO: Drop this when these are no longer allowed as the type argument.

              if (element == null) {
                return element;
              } // Skip key warning if the type isn't valid since our key validation logic
              // doesn't expect a non-string/function type and can throw confusing errors.
              // We don't want exception behavior to differ between dev and prod.
              // (Rendering will throw with a helpful message and as soon as the type is
              // fixed, the key warnings will appear.)

              if (validType) {
                for (var i = 2; i < arguments.length; i++) {
                  validateChildKeys(arguments[i], type);
                }
              }

              if (type === exports.Fragment) {
                validateFragmentProps(element);
              } else {
                validatePropTypes(element);
              }

              return element;
            }
            var didWarnAboutDeprecatedCreateFactory = false;
            function createFactoryWithValidation(type) {
              var validatedFactory = createElementWithValidation.bind(
                null,
                type,
              );
              validatedFactory.type = type;

              {
                if (!didWarnAboutDeprecatedCreateFactory) {
                  didWarnAboutDeprecatedCreateFactory = true;

                  warn(
                    'React.createFactory() is deprecated and will be removed in ' +
                      'a future major release. Consider using JSX ' +
                      'or use React.createElement() directly instead.',
                  );
                } // Legacy hook: remove it

                Object.defineProperty(validatedFactory, 'type', {
                  enumerable: false,
                  get: function () {
                    warn(
                      'Factory.type is deprecated. Access the class directly ' +
                        'before passing it to createFactory.',
                    );

                    Object.defineProperty(this, 'type', {
                      value: type,
                    });
                    return type;
                  },
                });
              }

              return validatedFactory;
            }
            function cloneElementWithValidation(element, props, children) {
              var newElement = cloneElement.apply(this, arguments);

              for (var i = 2; i < arguments.length; i++) {
                validateChildKeys(arguments[i], newElement.type);
              }

              validatePropTypes(newElement);
              return newElement;
            }

            {
              try {
                var frozenObject = Object.freeze({});
                /* eslint-disable no-new */

                new Map([[frozenObject, null]]);
                new Set([frozenObject]);
                /* eslint-enable no-new */
              } catch (e) {}
            }

            var createElement$1 = createElementWithValidation;
            var cloneElement$1 = cloneElementWithValidation;
            var createFactory = createFactoryWithValidation;
            var Children = {
              map: mapChildren,
              forEach: forEachChildren,
              count: countChildren,
              toArray: toArray,
              only: onlyChild,
            };

            exports.Children = Children;
            exports.Component = Component;
            exports.PureComponent = PureComponent;
            exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED =
              ReactSharedInternals;
            exports.cloneElement = cloneElement$1;
            exports.createContext = createContext;
            exports.createElement = createElement$1;
            exports.createFactory = createFactory;
            exports.createRef = createRef;
            exports.forwardRef = forwardRef;
            exports.isValidElement = isValidElement;
            exports.lazy = lazy;
            exports.memo = memo;
            exports.useCallback = useCallback;
            exports.useContext = useContext;
            exports.useDebugValue = useDebugValue;
            exports.useEffect = useEffect;
            exports.useImperativeHandle = useImperativeHandle;
            exports.useLayoutEffect = useLayoutEffect;
            exports.useMemo = useMemo;
            exports.useReducer = useReducer;
            exports.useRef = useRef;
            exports.useState = useState;
            exports.version = ReactVersion;
          })();
        }

        /***/
      },

    /***/ './node_modules/react/index.js':
      /*!*************************************!*\
  !*** ./node_modules/react/index.js ***!
  \*************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        'use strict';

        if (false) {
        } else {
          module.exports = __webpack_require__(
            /*! ./cjs/react.development.js */ './node_modules/react/cjs/react.development.js',
          );
        }

        /***/
      },

    /******/
  };
  /************************************************************************/
  /******/ // The module cache
  /******/ var __webpack_module_cache__ = {};
  /******/
  /******/ // The require function
  /******/ function __webpack_require__(moduleId) {
    /******/ // Check if module is in cache
    /******/ var cachedModule = __webpack_module_cache__[moduleId];
    /******/ if (cachedModule !== undefined) {
      /******/ return cachedModule.exports;
      /******/
    }
    /******/ // Create a new module (and put it into the cache)
    /******/ var module = (__webpack_module_cache__[moduleId] = {
      /******/ // no module.id needed
      /******/ // no module.loaded needed
      /******/ exports: {},
      /******/
    });
    /******/
    /******/ // Execute the module function
    /******/ __webpack_modules__[moduleId](
      module,
      module.exports,
      __webpack_require__,
    );
    /******/
    /******/ // Return the exports of the module
    /******/ return module.exports;
    /******/
  }
  /******/
  /************************************************************************/
  /******/ /* webpack/runtime/async module */
  /******/ (() => {
    /******/ var webpackThen =
      typeof Symbol === 'function'
        ? Symbol('webpack then')
        : '__webpack_then__';
    /******/ var webpackExports =
      typeof Symbol === 'function'
        ? Symbol('webpack exports')
        : '__webpack_exports__';
    /******/ var completeQueue = (queue) => {
      /******/ if (queue) {
        /******/ queue.forEach((fn) => fn.r--);
        /******/ queue.forEach((fn) => (fn.r-- ? fn.r++ : fn()));
        /******/
      }
      /******/
    };
    /******/ var completeFunction = (fn) => !--fn.r && fn();
    /******/ var queueFunction = (queue, fn) =>
      queue ? queue.push(fn) : completeFunction(fn);
    /******/ var wrapDeps = (deps) =>
      deps.map((dep) => {
        /******/ if (dep !== null && typeof dep === 'object') {
          /******/ if (dep[webpackThen]) return dep;
          /******/ if (dep.then) {
            /******/ var queue = [];
            /******/ dep.then((r) => {
              /******/ obj[webpackExports] = r;
              /******/ completeQueue(queue);
              /******/ queue = 0;
              /******/
            });
            /******/ var obj = {
              [webpackThen]: (fn, reject) => (
                queueFunction(queue, fn), dep.catch(reject)
              ),
            };
            /******/ return obj;
            /******/
          }
          /******/
        }
        /******/ return {
          [webpackThen]: (fn) => completeFunction(fn),
          [webpackExports]: dep,
        };
        /******/
      });
    /******/ __webpack_require__.a = (module, body, hasAwait) => {
      /******/ var queue = hasAwait && [];
      /******/ var exports = module.exports;
      /******/ var currentDeps;
      /******/ var outerResolve;
      /******/ var reject;
      /******/ var isEvaluating = true;
      /******/ var nested = false;
      /******/ var whenAll = (deps, onResolve, onReject) => {
        /******/ if (nested) return;
        /******/ nested = true;
        /******/ onResolve.r += deps.length;
        /******/ deps.map((dep, i) => dep[webpackThen](onResolve, onReject));
        /******/ nested = false;
        /******/
      };
      /******/ var promise = new Promise((resolve, rej) => {
        /******/ reject = rej;
        /******/ outerResolve = () => (
          resolve(exports), completeQueue(queue), (queue = 0)
        );
        /******/
      });
      /******/ promise[webpackExports] = exports;
      /******/ promise[webpackThen] = (fn, rejectFn) => {
        /******/ if (isEvaluating) {
          return completeFunction(fn);
        }
        /******/ if (currentDeps) whenAll(currentDeps, fn, rejectFn);
        /******/ queueFunction(queue, fn);
        /******/ promise.catch(rejectFn);
        /******/
      };
      /******/ module.exports = promise;
      /******/ body((deps) => {
        /******/ if (!deps) return outerResolve();
        /******/ currentDeps = wrapDeps(deps);
        /******/ var fn, result;
        /******/ var promise = new Promise((resolve, reject) => {
          /******/ fn = () =>
            resolve((result = currentDeps.map((d) => d[webpackExports])));
          /******/ fn.r = 0;
          /******/ whenAll(currentDeps, fn, reject);
          /******/
        });
        /******/ return fn.r ? promise : result;
        /******/
      }).then(outerResolve, reject);
      /******/ isEvaluating = false;
      /******/
    };
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/compat get default export */
  /******/ (() => {
    /******/ // getDefaultExport function for compatibility with non-harmony modules
    /******/ __webpack_require__.n = (module) => {
      /******/ var getter =
        module && module.__esModule
          ? /******/ () => module['default']
          : /******/ () => module;
      /******/ __webpack_require__.d(getter, { a: getter });
      /******/ return getter;
      /******/
    };
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/define property getters */
  /******/ (() => {
    /******/ // define getter functions for harmony exports
    /******/ __webpack_require__.d = (exports, definition) => {
      /******/ for (var key in definition) {
        /******/ if (
          __webpack_require__.o(definition, key) &&
          !__webpack_require__.o(exports, key)
        ) {
          /******/ Object.defineProperty(exports, key, {
            enumerable: true,
            get: definition[key],
          });
          /******/
        }
        /******/
      }
      /******/
    };
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/hasOwnProperty shorthand */
  /******/ (() => {
    /******/ __webpack_require__.o = (obj, prop) =>
      Object.prototype.hasOwnProperty.call(obj, prop);
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/make namespace object */
  /******/ (() => {
    /******/ // define __esModule on exports
    /******/ __webpack_require__.r = (exports) => {
      /******/ if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
        /******/ Object.defineProperty(exports, Symbol.toStringTag, {
          value: 'Module',
        });
        /******/
      }
      /******/ Object.defineProperty(exports, '__esModule', { value: true });
      /******/
    };
    /******/
  })();
  /******/
  /************************************************************************/
  /******/
  /******/ // startup
  /******/ // Load entry module and return exports
  /******/ // This entry module used 'module' so it can't be inlined
  /******/ var __webpack_exports__ = __webpack_require__(
    './src/.umi/core/server.ts',
  );
  /******/ module.exports = __webpack_exports__.default;
  /******/
  /******/
})();
