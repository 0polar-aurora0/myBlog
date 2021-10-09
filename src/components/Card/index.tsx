/*
 * @Author: fuzhenghao
 * @Date: 2021-10-09 14:56:21
 * @LastEditTime: 2021-10-09 15:41:54
 * @LastEditors: fuzhenghao
 * @Description:
 * @FilePath: \myBlog_frontEnd\src\components\Card\index.tsx
 *
 */
import React, { Component } from 'react';
import styles from './index.less';

export interface CardProps {
  type: string;
  className?: string;
  title?: string;
  onClick?: React.MouseEventHandler<any>;
  spin?: boolean;
  style?: React.CSSProperties;
}

export default class index extends Component {
  constructor(props: CardProps) {
    super(props);
  }
  render() {
    return (
      <div className={styles.card}>
        <h3>个人简介</h3>
        {this.props}
      </div>
    );
  }
}
