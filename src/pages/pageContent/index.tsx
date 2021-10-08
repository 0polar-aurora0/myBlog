/*
 * @Author: fuzhenghao
 * @Date: 2021-09-29 09:29:29
 * @LastEditTime: 2021-10-08 17:51:54
 * @LastEditors: fuzhenghao
 * @Description:
 * @FilePath: \myBlog_frontEnd\src\pages\pageContent\index.tsx
 *
 */
import React, { Component } from 'react';
import {
  GithubOutlined,
  ZhihuOutlined,
  WechatOutlined,
  YoutubeOutlined,
  SketchOutlined,
} from '@ant-design/icons';

import picture_1 from '../../assets/images/card_front.png';

import styles from './index.less';

import { Carousel } from 'antd';

export default class index extends Component {
  state = {
    local_menuListDetail: null,
  };

  onMouseOverHandle = (local_menuListDetail: string) => {
    console.log(local_menuListDetail);

    this.setState({
      local_menuListDetail,
    });
  };

  onMouseLeaveHandle = () => {
    this.setState({
      local_menuListDetail: null,
    });
  };

  render() {
    const { local_menuListDetail } = this.state;
    const contentStyle = {
      height: '160px',
      color: '#fff',
      lineHeight: '160px',
      textAlign: 'center',
      background: '#364d79',
    };
    function onChange(a, b, c) {
      console.log(a, b, c);
    }
    return (
      <div id="pageContent" className={styles.pageContent}>
        <div className={styles.pageContent_header}>
          <div className={styles.header_container}>
            <div className={styles.menuLists}>
              <div
                onMouseOver={this.onMouseOverHandle.bind(this, 'react')}
                onMouseLeave={this.onMouseLeaveHandle}
                className={styles.menuArea}
              >
                <GithubOutlined style={{ fontSize: '16px' }} />
                <p>react</p>
              </div>
              <div
                onMouseOver={this.onMouseOverHandle.bind(this, 'vue')}
                onMouseLeave={this.onMouseLeaveHandle}
                className={styles.menuArea}
              >
                <YoutubeOutlined
                  style={{ fontSize: '16px', color: 'rgb(251 114 153)' }}
                  onMouseLeave={this.onMouseLeaveHandle}
                />
                <p>vue</p>
              </div>
              <div
                onMouseOver={this.onMouseOverHandle.bind(this, 'angular')}
                onMouseLeave={this.onMouseLeaveHandle}
                className={styles.menuArea}
              >
                <SketchOutlined style={{ fontSize: '16px' }} />
                <p>angular</p>
              </div>
              <div
                onMouseOver={this.onMouseOverHandle.bind(this, 'nginx')}
                onMouseLeave={this.onMouseLeaveHandle}
                className={styles.menuArea}
              >
                <ZhihuOutlined
                  style={{ fontSize: '16px', color: 'rgb(56, 103, 233)' }}
                />
                <p>nginx</p>
              </div>
            </div>
            <div className={styles.badgeLists}>
              <div className={styles.badgeArea}>
                <GithubOutlined
                  style={{ fontSize: '16px', color: 'rgb(0,0,0)' }}
                />
                <a
                  target="_blank"
                  href="https://github.com/0polar-aurora0"
                  style={{ color: 'rgb(0,0,0)' }}
                >
                  Github
                </a>
              </div>
              <div className={styles.badgeArea}>
                <YoutubeOutlined
                  style={{ fontSize: '16px', color: 'rgb(251 114 153)' }}
                />
                <a style={{ color: 'rgb(251 114 153)' }}>bilibili</a>
              </div>
              <div className={styles.badgeArea}>
                <SketchOutlined style={{ fontSize: '16px' }} />
                <a>掘金</a>
              </div>
              <div className={styles.badgeArea}>
                <WechatOutlined
                  style={{ fontSize: '16px', color: 'rgb(47 239 34)' }}
                />
                <a style={{ color: 'rgb(47 239 34)' }}>微信</a>
              </div>
              <div className={styles.badgeArea}>
                <ZhihuOutlined
                  style={{ fontSize: '16px', color: 'rgb(56, 103, 233)' }}
                />
                <a style={{ color: 'rgb(56, 103, 233)' }}>知乎</a>
              </div>
            </div>
            {local_menuListDetail && (
              <div className={styles.menuListDetail}>
                {local_menuListDetail}
              </div>
            )}
          </div>
        </div>
        <div className={styles.pageContent_content}>
          <div className={styles.content_left}>
            <Carousel afterChange={onChange}>
              <img src={picture_1} alt="" />
              <img src={picture_1} alt="" />
              <img src={picture_1} alt="" />
              <img src={picture_1} alt="" />
            </Carousel>
          </div>
          <div className={styles.content_right}>123</div>
        </div>
      </div>
    );
  }
}
