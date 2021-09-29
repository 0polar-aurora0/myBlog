/*
 * @Author: fuzhenghao
 * @Date: 2021-09-26 11:36:59
 * @LastEditTime: 2021-09-29 11:51:25
 * @LastEditors: fuzhenghao
 * @Description:
 * @FilePath: \myBlog_frontEnd\src\pages\index.tsx
 *
 */

import React, { Component } from 'react';
import { Button, Avatar, Divider } from 'antd';
import { UserOutlined, CaretDownOutlined } from '@ant-design/icons';
import $ from 'jquery';
import _ from 'lodash';
import PageContent from './pageContent/index';

import './index.less';
import styles from './index.less';

export default class index extends Component {
  state = {
    localPage: 0,
  };

  componentDidMount() {
    console.log(123);

    // $(window).scroll(function () {
    // //已经滚动到上面的页面高度
    // var scrollTop = $(".page_1").scrollTop();
    // //页面高度
    // var scrollHeight = $(document).height();
    // //浏览器窗口高度
    // var windowHeight = $(window).height();
    // console.log(
    //   "scrollTop, windowHeight, scrollHeight",
    //   scrollTop,
    //   windowHeight,
    //   scrollHeight
    // );
    // //此处是滚动条到底部时候触发的事件，在这里写要加载的数据，或者是拉动滚动条的操作
    // if (scrollTop + windowHeight === scrollHeight) {
    // }

    //获取屏幕滚动

    // let window_scrollTop = $(window).scrollTop();
    // });
    var p = 0,
      t = 0;
    const updatePosition = () => {
      p = $(window).scrollTop() || 0;
      console.log(p);

      if (t <= p) {
        console.log('下滚');
        //此时为下滚状态
      } else {
        console.log('上滚');
      }
      t = p;
    };
    //节流控制监听滚动
    $(window).on('scroll', _.throttle(updatePosition, 1000));
    // $(window).on("", _.throttle(updatePosition, 1000));
  }

  handleClick = () => {
    console.log(123);

    // let { localPage } = this.state;
    this.setState({
      localPage: 1,
    });
  };

  render() {
    let { localPage } = this.state;
    return (
      <div className={styles.index_page}>
        <div className={styles.page_1}>
          <div
            style={{ left: `${-localPage * 100}vw` }}
            className={`${styles.page_1_List} ${
              localPage && styles.page_1_List_changing
            }`}
          >
            <div className={styles.page_1_List_left}>
              {/* <div className={styles.button_goto_right}>
                <Button onClick={this.handleClick}>跳转</Button>
              </div> */}
              <div className={styles.self_introduction}>
                <Avatar size={128} icon={<UserOutlined />} />
                <p className={styles.introduction_title}>博客</p>
                <p className={styles.introduction_quotes}>千里之行,始于足下</p>
                <p className={styles.introduction_cardTitle}>精选主题</p>
                <div className={styles.introduction_cardLists}>
                  <div className={styles.card}>
                    <div className={styles.card_title}>Node.js</div>
                    <div className={styles.card_info}>
                      Node.js是一个事件驱动I/O服务端JavaScript环境，基于Google的V8引擎，V8引擎执行Javascript的速度非常快，性能非常好。
                    </div>
                  </div>
                  <div className={styles.card}>
                    <div className={styles.card_title}>React.js</div>
                    <div className={styles.card_info}>
                      Node.js是一个事件驱动I/React 使创建交互式 UI
                      变得轻而易举。为你应用的每一个状态设计简洁的视图，当数据变动时
                      React 能高效更新并渲染合适的组件。
                    </div>
                  </div>
                  <div className={styles.card}>
                    <div className={styles.card_title}>Node.js</div>
                    <div className={styles.card_info}>
                      Node.js是一个事件驱动I/O服务端JavaScript环境，基于Google的V8引擎，V8引擎执行Javascript的速度非常快，性能非常好。
                    </div>
                  </div>
                  <div className={styles.card}>
                    <div className={styles.card_title}>C#</div>
                    <div className={styles.card_info}>
                      Node.js是一个事件驱动I/O服务端JavaScript环境，基于Google的V8引擎，V8引擎执行Javascript的速度非常快，性能非常好。
                    </div>
                  </div>
                  <div className={styles.card}>
                    <div className={styles.card_title}>Electron.js</div>
                    <div className={styles.card_info}>
                      Node.js是一个事件驱动I/O服务端JavaScrip.
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.button_to_blogContent}>
                <CaretDownOutlined
                  style={{ fontSize: '32px', color: 'white' }}
                />
              </div>
            </div>
            <div className={styles.page_1_List_right}>page_1_right</div>
          </div>
        </div>
        <PageContent />
        <div className={styles.page_2}></div>
      </div>
    );
  }
}
