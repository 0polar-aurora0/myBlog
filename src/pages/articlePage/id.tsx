/*
 * @Author: fuzhenghao
 * @Date: 2021-10-11 09:15:30
 * @LastEditTime: 2021-11-02 11:35:57
 * @LastEditors: fuzhenghao
 * @Description: 文章界面
 * @FilePath: \myBlog_frontEnd\src\pages\articlePage\id.tsx
 *
 */
import React, { Component } from 'react';
import styles from './id.less';
// import ReactMarkdown from "react-markdown";
import { get_axios } from '@/utils/axios';

import { MarkDown, LoginModal } from '@/components/index';

import {
  FieldTimeOutlined,
  UserOutlined,
  CodeOutlined,
  LikeOutlined,
  EyeOutlined,
} from '@ant-design/icons';
interface IState {
  login_modal_ishow: boolean;
  mackdown_content: any;
}

export default class index extends Component<any, IState> {
  state: IState = {
    login_modal_ishow: false,
    mackdown_content: null,
  };

  componentDidMount() {
    let {
      location: { query },
    } = this.props;
    console.log();
    get_axios(`/api/public/markdown/${query.id}.md`, {}, {}).then(
      (res: any) => {
        console.log(res);
        this.setState({
          mackdown_content: res,
        });
      },
    );
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
    const { login_modal_ishow, mackdown_content } = this.state;
    let {
      location: { query },
    } = this.props;
    return (
      <div className={styles.page_content}>
        <div className={styles.article_title}>
          <h2>{query.title}</h2>
          <div className={styles.title_detail}>
            <div className={styles.detail_piece}>
              <FieldTimeOutlined />
              {query.date}
            </div>

            <div className={styles.detail_piece}>
              <EyeOutlined />
              共访问{query.visits}次
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
