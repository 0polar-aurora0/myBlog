/*
 * @Author: fuzhenghao
 * @Date: 2022-06-02 18:10:12
 * @LastEditTime: 2022-06-08 00:19:31
 * @LastEditors: fuzhenghao
 * @Description:
 * @FilePath: \myBlog_frontEnd\src\commonService.ts
 */
import { message } from 'antd';
import { post, get } from '@/utils/axios';
import { fileApi, articleApi } from '@/commonApi';
import { AxiosResponse } from 'axios';

interface Callback {
  (arg1: any): void;
}

interface axiosRespons extends AxiosResponse {
  message?: any;
  data: any;
}

export function fileUpload(
  datas: any,
  paramas: any,
  callback: Callback,
  permission = null,
) {
  return post(fileApi.query, datas, paramas, {
    headers: { permission },
  }).then((response: axiosRespons) => {
    if (response.status === 200) {
      callback(response.data);
      return response.data;
    } else {
      message.error(response.message ?? '文件查询失败');
    }
  });
}

export function articleQueryDetail(
  id: string,
  callback: any,
  permission = null,
) {
  return get(
    `${articleApi.queryDetail}?id=${id}`,
    {},
    {
      headers: { permission },
    },
  ).then((response: axiosRespons) => {
    if (response.status === 200) {
      callback(response.data);

      return response.data.data;
    } else {
      message.error(response.message ?? '查询失败');
    }
  });
}
