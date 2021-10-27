/*
 * @Author: fuzhenghao
 * @Date: 2021-10-11 09:15:30
 * @LastEditTime: 2021-10-27 15:03:13
 * @LastEditors: fuzhenghao
 * @Description:
 * @FilePath: \myBlog_frontEnd\src\pages\articlePage\id.tsx
 *
 */
import React, { Component } from 'react';
import styles from './id.less';
// import ReactMarkdown from "react-markdown";

import { MarkDown, LoginModal } from '@/components/index';

import {
  FieldTimeOutlined,
  UserOutlined,
  CodeOutlined,
  LikeOutlined,
  EyeOutlined,
} from '@ant-design/icons';

let mackdown_content = require('@/assets/mackdown/mackdown_test.md').default;
console.log(mackdown_content);

interface IState {
  login_modal_ishow: boolean;
}

export default class index extends Component<any, IState> {
  state: IState = {
    login_modal_ishow: false,
  };

  componentDidMount() {
    console.log(this.props.match.params);
  }

  login_modal_state_change = () => {
    const { login_modal_ishow } = this.state;
    console.log('点击编辑按钮');

    this.setState({
      login_modal_ishow: !login_modal_ishow,
    });
  };

  edit_function = () => {
    this.login_modal_state_change();
  };

  render() {
    const { login_modal_ishow } = this.state;
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
            <div onClick={this.edit_function} className={styles.detail_piece}>
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
        <LoginModal
          visible={login_modal_ishow}
          close={this.login_modal_state_change}
        />
      </div>
    );
  }
}
