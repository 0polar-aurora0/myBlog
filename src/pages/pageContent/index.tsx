/*
 * @Author: fuzhenghao
 * @Date: 2021-09-29 09:29:29
 * @LastEditTime: 2021-09-30 15:35:33
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

import styles from './index.less';

export default class index extends Component {
  render() {
    return (
      <div id="pageContent" className={styles.pageContent}>
        <div className={styles.pageContent_header}>
          <div className={styles.header_container}>
            <div className={styles.menuLists}>
              <div className={styles.menuArea}>
                <GithubOutlined style={{ fontSize: '16px' }} />
                <p>Github</p>
              </div>
              <div className={styles.menuArea}>
                <YoutubeOutlined
                  style={{ fontSize: '16px', color: 'rgb(251 114 153)' }}
                />
                <p>bilibili</p>
              </div>
              <div className={styles.menuArea}>
                <SketchOutlined style={{ fontSize: '16px' }} />
                <p>掘金</p>
              </div>
              <div className={styles.menuArea}>
                <ZhihuOutlined
                  style={{ fontSize: '16px', color: 'rgb(56, 103, 233)' }}
                />
                <p>知乎</p>
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
          </div>
        </div>
      </div>
    );
  }
}
