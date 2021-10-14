/*
 * @Author: fuzhenghao
 * @Date: 2021-10-11 09:15:56
 * @LastEditTime: 2021-10-14 13:47:41
 * @LastEditors: fuzhenghao
 * @Description:
 * @FilePath: \myBlog_frontEnd\src\pages\articlePage\layouts\index.tsx
 *
 */
import React, { Component } from 'react';
// import ArticleHeader from './articleHeader';
import { HeaderLists } from '@/components/index';

import {
  GithubOutlined,
  HomeOutlined,
  SettingOutlined,
  EyeOutlined,
} from '@ant-design/icons';
import styles from './index.less';

export default class index extends Component {
  render() {
    let headerLists_config = {
      headerLeftLists: [
        {
          title: '首页',
          icon: <HomeOutlined />,
        },
        {
          title: '管理',
          icon: <SettingOutlined />,
        },
        {
          title: 'github',
          icon: <GithubOutlined />,
        },
      ],
    };
    return (
      <div className={styles.page_layouts}>
        <HeaderLists {...headerLists_config} />
        {this.props.children}
      </div>
    );
  }
}
