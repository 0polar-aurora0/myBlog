/*
 * @Author: fuzhenghao
 * @Date: 2021-09-26 11:36:59
 * @LastEditTime: 2022-06-19 23:39:34
 * @LastEditors: fuzhenghao
 * @Description:
 * @FilePath: \myBlog_frontEnd\src\pages\index.tsx
 *
 */
import React, { Component } from 'react';
import { Button, Avatar, Divider, Anchor } from 'antd';
import { UserOutlined, CaretDownOutlined } from '@ant-design/icons';
import $ from 'jquery';
import _ from 'lodash';
import PageContent from './pageContent/index';
import { Card } from '@/components/index';

import './index.less';
import styles from './index.less';

const { Link } = Anchor;

const perspective_origin_center_X = 160,
  perspective_origin_center_Y = 80;
export default class index extends Component {
  state = {
    localPage: 0,
    perspective_origin_X: perspective_origin_center_X,
    perspective_origin_Y: perspective_origin_center_Y,
  };

  componentDidMount() {
    let preLocation = $(document).scrollTop() || 0;
    let nowLocation = 0;

    const updatePosition = () => {
      let speed = 400;
      nowLocation = $(document).scrollTop() || 0;
      let page_1_height = Math.floor($('#page_1').height() as number);
      // // let content_height = $('.pageContent').height() as number;
      // //在第一页内

      //向下
      if (nowLocation > preLocation && nowLocation < page_1_height) {
        $('html').animate({ scrollTop: page_1_height }, speed, 'swing');
      }
      preLocation = nowLocation;
    };
    //节流控制监听滚动
    $(window).on('scroll', _.throttle(updatePosition, 200));
    // $(window).on("", _.throttle(updatePosition, 1000));
  }

  handleClick = () => {
    this.setState({
      localPage: 1,
    });
  };

  onMouseMoveHandle = () => {
    const event = window.event;

    event.layerX > 0 &&
      event.layerY > 0 &&
      this.setState({
        perspective_origin_X: event.layerX,
        perspective_origin_Y: event.layerY,
      });
  };

  onMouseLeaveHandle = () => {
    this.setState({
      perspective_origin_X: perspective_origin_center_X,
      perspective_origin_Y: perspective_origin_center_Y,
    });
  };

  render() {
    let { localPage } = this.state;

    let card_data_lists = [
      {
        card_title: 'Node.js',
        card_description:
          'Node.js是一个事件驱动I/O服务端JavaScript环境，基于Google的V8引擎，V8引擎执行Javascript的速度非常快，性能非常好。',
        card_backgroud_image: '',
      },
      {
        card_title: 'React.js',
        card_description:
          'Node.js是一个事件驱动I/O服务端JavaScript环境，基于Google的V8引擎，V8引擎执行Javascript的速度非常快，性能非常好。',
        card_backgroud_image: '',
      },
      {
        card_title: 'C#',
        card_description:
          'Node.js是一个事件驱动I/O服务端JavaScript环境，基于Google的V8引擎，V8引擎执行Javascript的速度非常快，性能非常好。',
        card_backgroud_image: '',
      },
      {
        card_title: 'Electron.js',
        card_description:
          'Node.js是一个事件驱动I/O服务端JavaScript环境，基于Google的V8引擎，V8引擎执行Javascript的速度非常快，性能非常好。',
        card_backgroud_image: '',
      },
    ];

    return (
      <div className={styles.index_page}>
        <div id="page_1" className={styles.page_1}>
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
                  {card_data_lists.map((card_data_list) => {
                    return (
                      <div className={styles.card}>
                        <div className={styles.card_title}>
                          {card_data_list.card_title}
                        </div>
                        <div className={styles.card_info}>
                          {card_data_list.card_description}
                        </div>
                      </div>
                    );
                  })}
                  <Card
                    type="switch"
                    card_title="node.js"
                    card_description="Node.js是一个事件驱动I/O服务端JavaScript环境，基于Google的V8引擎，V8引擎执行Javascript的速度非常快，性能非常好。"
                    card_backgroud_image=""
                  ></Card>

                  {/* <div
                    onMouseMove={this.onMouseMoveHandle}
                    onMouseLeave={this.onMouseLeaveHandle}
                    style={{
                      perspectiveOrigin: `${this.state.perspective_origin_X}px ${this.state.perspective_origin_Y}px`,
                    }}
                    className={styles.card_special_box}
                  >
                    <div
                      className={`${styles.box_piece1_front} ${styles.box_piece}`}
                    >
                      <div className={styles.card_error}>Error</div>
                    </div>
                    <div
                      className={`${styles.box_piece2_right} ${styles.box_piece}`}
                    ></div>
                    <div
                      className={`${styles.box_piece3_back} ${styles.box_piece}`}
                    ></div>
                    <div
                      className={`${styles.box_piece4_left} ${styles.box_piece}`}
                    ></div>
                    <div
                      className={`${styles.box_piece5_top} ${styles.box_piece}`}
                    ></div>
                    <div
                      className={`${styles.box_piece6_bottom} ${styles.box_piece}`}
                    ></div>
                  </div> */}
                </div>
              </div>
              <div className={styles.button_to_blogContent}>
                <Anchor>
                  <Link
                    href="#pageContent"
                    title={
                      <CaretDownOutlined
                        style={{ fontSize: '32px', color: 'white' }}
                      />
                    }
                  />
                </Anchor>
              </div>
            </div>
            <div className={styles.page_1_List_right}>page_1_right</div>
          </div>
        </div>
        <PageContent />
        {/* <div className={styles.page_2}></div> */}
      </div>
    );
  }
}
