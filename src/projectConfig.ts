/*
 * @Author: fuzhenghao
 * @Date: 2022-06-02 18:12:43
 * @LastEditTime: 2022-06-02 18:12:43
 * @LastEditors: fuzhenghao
 * @Description:
 * @FilePath: \myBlog_frontEnd\src\projectConfig.ts
 */
export const defaultPageListSetting = {
  defaultPageSize: 10,
  pageSizeOptions: [10, 15, 30],
  defaultCurrent: 1,
};

//本地环境启用 apiRoot配置为 '/api'
//线上环境启用 apiRoot配置为 ''
export const apiRoot = '/api';
