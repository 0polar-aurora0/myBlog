/*
 * @Author: fuzhenghao
 * @Date: 2021-09-29 09:29:29
 * @LastEditTime: 2021-10-09 17:23:43
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
import { history } from 'umi';

import { Carousel, Calendar } from 'antd';

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

  check_article_detail = (article) => {
    history.push({
      pathname: '/article',
      query: {
        article: article.key,
      },
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
    function onPanelChange(value, mode) {
      console.log(value, mode);
    }

    const articleList = [
      {
        key: 0,
        title: 'js滚动效果实现',
        date: '1999-09-12',
        introduce: '这是一个关于js滚动效果实现的文章',
      },
      {
        key: 1,
        title: 'js滚动效果实现',
        date: '1999-09-12',
        introduce: '这是一个关于js滚动效果实现的文章',
      },
      {
        key: 2,
        title: 'js滚动效果实现',
        date: '1999-09-12',
        introduce: '这是一个关于js滚动效果实现的文章',
      },
      {
        key: 3,
        title: 'js滚动效果实现',
        date: '1999-09-12',
        introduce: '这是一个关于js滚动效果实现的文章',
      },
      {
        key: 4,
        title: 'js滚动效果实现',
        date: '1999-09-12',
        introduce: '这是一个关于js滚动效果实现的文章',
      },
      {
        key: 5,
        title: 'js滚动效果实现',
        date: '1999-09-12',
        introduce: '这是一个关于js滚动效果实现的文章',
      },
    ];

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
          <div className={styles.content_conatiner}>
            <div className={styles.content_left}>
              <Carousel afterChange={onChange}>
                <img src={picture_1} alt="" />
                <img src={picture_1} alt="" />
                <img src={picture_1} alt="" />
                <img src={picture_1} alt="" />
              </Carousel>
              {articleList.map((article) => {
                return (
                  <div
                    onClick={this.check_article_detail.bind(this, article)}
                    className={styles.article}
                  >
                    <h3>{article.date}</h3>
                    <div className={styles.article_title}>
                      <div className={styles.article_title_icon}></div>
                      <h3>{article.title}</h3>
                    </div>
                    <div className={styles.article_introduce}>
                      {article.introduce}
                    </div>
                  </div>
                );
              })}
            </div>
            <div className={styles.content_right}>
              <div className={styles.card}>
                <h3>个人简介</h3>
                本人昵称: 123456
              </div>

              <div className={styles.card}>
                <h3>日历</h3>
                <Calendar fullscreen={false} onPanelChange={onPanelChange} />
              </div>
              <div className={styles.card}>
                <h3>随笔</h3>
              </div>

              <div className={styles.card}>
                <h3>我的标签</h3>
              </div>

              <div className={styles.card}>
                <h3>我的日记</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
