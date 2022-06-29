/*
 * @Author: fuzhenghao
 * @Date: 2021-10-11 09:16:29
 * @LastEditTime: 2022-06-29 20:15:58
 * @LastEditors: fuzhenghao
 * @Description:
 * @FilePath: \myBlog_frontEnd\src\pages\articlePage\routes.js
 *
 */
export default {
  path: '/articlePage',
  component: '@/pages/articlePage/layouts/index',
  routes: [
    //   { path: "/articlePage/", component: "./users/index.js" },
    { path: '/articlePage', component: '@/pages/articlePage/id.tsx' },
  ],
};
