/*
 * @Author: fuzhenghao
 * @Date: 2021-10-11 09:15:30
 * @LastEditTime: 2021-10-12 15:28:54
 * @LastEditors: fuzhenghao
 * @Description:
 * @FilePath: \myBlog_frontEnd\src\pages\articlePage\id.tsx
 *
 */
import React, { Component } from 'react';
import styles from './id.less';

import {
  FieldTimeOutlined,
  UserOutlined,
  CodeOutlined,
  LikeOutlined,
} from '@ant-design/icons';

export default class index extends Component {
  componentDidMount() {
    console.log(this.props.match.params);
  }
  render() {
    return (
      <div className={styles.page_content}>
        <div className={styles.article_title}>
          <h2>文章标题</h2>
          <div className={styles.title_detail}>
            <div className={styles.detail_piece}>
              <FieldTimeOutlined />
              1999-09-12
            </div>
            <div className={styles.detail_piece}>
              <UserOutlined />
              我在北极吃火锅
            </div>
            <div className={styles.detail_piece}>
              <CodeOutlined />
              编辑
            </div>
            <div className={styles.detail_piece}>
              <LikeOutlined />
              老子觉得很赞, 给你点个赞
            </div>
          </div>
        </div>
      </div>
    );
  }
}
