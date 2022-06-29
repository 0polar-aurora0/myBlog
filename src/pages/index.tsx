/*
 * @Author: fuzhenghao
 * @Date: 2021-09-26 11:36:59
 * @LastEditTime: 2022-06-29 18:57:43
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
import { get_axios } from '@/utils/axios';

import './index.less';
import styles from './index.less';

const { Link } = Anchor;

const perspective_origin_center_X = 160,
  perspective_origin_center_Y = 80;

interface IState {
  localPage: number;
  card_data_lists: Array<{
    id: number;
    title: string;
    description: string;
    type: string;
    card_backgroud_image: any;
  }>;
  perspective_origin_X: number;
  perspective_origin_Y: number;
}
export default class index extends Component<{}, IState> {
  state: IState = {
    localPage: 0,
    card_data_lists: [],
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

  page_axios = () => {
    get_axios('api/indexpage_cardlist/query', {}, {}).then((res: any) => {
      this.setState({
        card_data_lists: res.data,
      });
    });
  };

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
    let { localPage, card_data_lists } = this.state;

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
                      <Card
                        key={card_data_list.id}
                        type={card_data_list.type}
                        title={card_data_list.title}
                        card_description={card_data_list.description}
                        card_backgroud_image={
                          card_data_list.card_backgroud_image.data
                        }
                      ></Card>
                    );
                  })}

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
