/*
 * @Author: fuzhenghao
 * @Date: 2021-10-11 09:15:56
 * @LastEditTime: 2021-10-11 17:44:22
 * @LastEditors: fuzhenghao
 * @Description:
 * @FilePath: \myBlog_frontEnd\src\pages\articlePage\layouts\index.tsx
 *
 */
import React, { Component } from 'react';
import ArticleHeader from './articleHeader';
import styles from './index.less';

export default class index extends Component {
  render() {
    return (
      <div className={styles.page_layouts}>
        <ArticleHeader />
        {this.props.children}
      </div>
    );
  }
}
