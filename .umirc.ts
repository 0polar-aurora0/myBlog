/*
 * @Author: fuzhenghao
 * @Date: 2021-09-26 11:36:59
 * @LastEditTime: 2022-06-17 15:35:29
 * @LastEditors: fuzhenghao
 * @Description:
 * @FilePath: \myBlog_frontEnd\.umirc.ts
 *
 */
import { defineConfig } from 'umi';
import routes from './config/routes';

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
  inlineLimit: 100,
  routes: routes,
  fastRefresh: {},
  dynamicImport: { loading: '@/components/PreLoading/index' },
  proxy: {
    '/login': {
      target: 'http://localhost:7003',
      secure: false,
      changeOrigin: true,
    },
    '/logout': {
      target: 'http://localhost:7003',
      secure: false,
      changeOrigin: true,
    },
    '/api/*': {
      target: 'http://localhost:7003',
      secure: false, // 接受 运行在 https 上的服务
      changeOrigin: true,
      pathRewrite: {
        '^/api': '',
      },
    },
    '/sws/*': {
      target: 'http://localhost:7003',
      secure: false, // 接受 运行在 https 上的服务
      changeOrigin: true,
      pathRewrite: { '^/sws': '' },
      ws: true,
    },
  },
});
