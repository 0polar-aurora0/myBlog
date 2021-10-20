/*
 * @Author: fuzhenghao
 * @Date: 2021-10-20 09:50:51
 * @LastEditTime: 2021-10-20 09:59:10
 * @LastEditors: fuzhenghao
 * @Description:
 * @FilePath: \myBlog_frontEnd\src\utils\axios.ts
 *
 */
import axios from 'axios';

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
