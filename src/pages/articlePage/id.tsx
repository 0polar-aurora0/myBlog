/*
 * @Author: fuzhenghao
 * @Date: 2021-10-11 09:15:30
 * @LastEditTime: 2021-10-20 14:11:58
 * @LastEditors: fuzhenghao
 * @Description:
 * @FilePath: \myBlog_frontEnd\src\pages\articlePage\id.tsx
 *
 */
import React, { Component } from 'react';
import styles from './id.less';
// import ReactMarkdown from "react-markdown";

import { MarkDown } from '@/components/index';

import {
  FieldTimeOutlined,
  UserOutlined,
  CodeOutlined,
  LikeOutlined,
  EyeOutlined,
} from '@ant-design/icons';

let mackdown_content = require('@/assets/mackdown/mackdown_test.md').default;
console.log(mackdown_content);

export default class index extends Component {
  componentDidMount() {
    console.log(this.props.match.params);
  }
  modify_function = () => {};
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
              <EyeOutlined />
              访问次数
            </div>
            <div className={styles.detail_piece}>
              <UserOutlined />
              我在北极吃火锅
            </div>
            <div onClick={this.modify_function} className={styles.detail_piece}>
              <CodeOutlined />
              编辑
            </div>
            <div className={styles.detail_piece}>
              <LikeOutlined />
              老子觉得很赞, 给你点个赞
            </div>
          </div>
        </div>
        <div className={styles.article_content}>
          <MarkDown mackdown_content={mackdown_content} />
        </div>
      </div>
    );
  }
}
