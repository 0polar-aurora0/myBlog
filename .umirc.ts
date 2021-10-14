/*
 * @Author: fuzhenghao
 * @Date: 2021-09-26 11:36:59
 * @LastEditTime: 2021-10-14 10:31:36
 * @LastEditors: fuzhenghao
 * @Description:
 * @FilePath: \myBlog_frontEnd\.umirc.ts
 *
 */
import { defineConfig } from 'umi';
import routes from './config/routes';

import { PreLoading } from './src/components/index';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: routes,
  // routes: [{ path: '/', component: '@/pages/index' }],
  fastRefresh: {},
  dynamicImport: { loading: '@/components/PreLoading/index' },
  // dynamicImportSyntax: { PreLoading },
});
