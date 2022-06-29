/*
 * @Author: fuzhenghao
 * @Date: 2022-05-11 17:04:47
 * @LastEditTime: 2022-06-08 00:16:53
 * @LastEditors: fuzhenghao
 * @Description:
 * @FilePath: \myBlog_frontEnd\src\commonApi.ts
 */
import { apiRoot } from '@/projectConfig';

//文件处理api
export const fileApi = {
  query: `${apiRoot}/file/query`,
};

//文章管理api
export const articleApi = {
  query: `${apiRoot}/article/query`,
  update: `${apiRoot}/article/update`,
  queryDetail: `${apiRoot}/article/queryDetail`,
  create: `${apiRoot}/article/create`,
  delete: `${apiRoot}/article/remove`,
};
