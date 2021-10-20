/*
 * @Author: fuzhenghao
 * @Date: 2021-09-26 11:36:59
 * @LastEditTime: 2021-10-20 10:03:33
 * @LastEditors: fuzhenghao
 * @Description:
 * @FilePath: \myBlog_frontEnd\.umirc.ts
 *
 */
import { defineConfig } from 'umi';
import routes from './config/routes';

import { PreLoading } from './src/components/index';

export default defineConfig({
  mfsu: {
    development: {
      output: './.mfsu-dev',
    },
    production: {
      output: './.mfsu-prod',
    },
  },
  nodeModulesTransform: {
    type: 'none',
  },
  routes: routes,
  // routes: [{ path: '/', component: '@/pages/index' }],
  fastRefresh: {},
  dynamicImport: { loading: '@/components/PreLoading/index' },
  // dynamicImportSyntax: { PreLoading },
  proxy: {
    '/login': {
      target: 'http://192.168.20.115:7001',
      secure: false,
      changeOrigin: true,
    },
    '/logout': {
      target: 'http://192.168.20.115:7001',
      secure: false,
      changeOrigin: true,
    },
    '/api/*': {
      target: 'http://192.168.20.115:7001',
      secure: false, // 接受 运行在 https 上的服务
      changeOrigin: true,
      pathRewrite: {
        '^/api': '',
      },
    },
    '/sws/*': {
      target: 'http://192.168.20.115:7001',
      secure: false, // 接受 运行在 https 上的服务
      changeOrigin: true,
      pathRewrite: { '^/sws': '' },
      ws: true,
    },
  },
});
