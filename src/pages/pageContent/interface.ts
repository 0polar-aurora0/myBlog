/*
 * @Author: fuzhenghao
 * @Date: 2022-05-31 15:19:46
 * @LastEditTime: 2022-06-19 23:37:22
 * @LastEditors: fuzhenghao
 * @Description:
 * @FilePath: \myBlog_frontEnd\src\pages\pageContent\interface.ts
 */
export type Article = {
  file: any;
  id: string;
  title: string;
  showState: string;
  labels: string;
  create_at: string;
  introduce: string;
  fileId: string;
  articleSeries: Array<any>;
};
