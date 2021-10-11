/*
 * @Author: fuzhenghao
 * @Date: 2021-10-11 09:22:56
 * @LastEditTime: 2021-10-11 15:47:40
 * @LastEditors: fuzhenghao
 * @Description:
 * @FilePath: \myBlog_frontEnd\config\routes.ts
 *
 */
import articlePage from '../src/pages/articlePage/routes';

export default [
  articlePage,
  {
    path: '/',
    component: '@/pages/index.tsx',
    routes: [
      {
        path: '/index',
        redirect: '/',
      },
    ],
  },
];
