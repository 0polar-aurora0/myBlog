/*
 * @Author: fuzhenghao
 * @Date: 2021-10-20 09:50:51
 * @LastEditTime: 2022-06-02 18:11:24
 * @LastEditors: fuzhenghao
 * @Description:
 * @FilePath: \myBlog_frontEnd\src\utils\axios.ts
 *
 */
import axios from 'axios';
import qs from 'qs';

export function get_axios(url: string, params: any, config = {}) {
  return new Promise((resolve, reject) => {
    axios
      .get(url, { params: params, ...config })
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err.data);
      });
  });
}

export function get(url: string, params: any, config = {}) {
  return axios.get(url, { params: params, ...config });
}

export function post(url: string, datas: any, params: any, config = {}) {
  return axios.post(url, datas, { params: params, ...config });
}
