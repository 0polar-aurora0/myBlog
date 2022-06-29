/*
 * @Author: fuzhenghao
 * @Date: 2021-09-29 09:29:29
<<<<<<< HEAD
 * @LastEditTime: 2022-06-29 18:55:24
=======
 * @LastEditTime: 2021-11-02 13:54:36
>>>>>>> ee64217a76b62715196a5cd8617e7e55e0764887
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
  TagsOutlined,
  CalendarOutlined,
  RobotOutlined,
  ReadOutlined,
  BookOutlined,
  TagOutlined,
  UserOutlined,
  AlipayCircleOutlined,
  MailOutlined,
} from '@ant-design/icons';
import { Avatar } from 'antd';
import { ArticleCard, HeaderLists } from '@/components/index';
import picture_1 from '../../assets/images/card_front.png';

import styles from './index.less';
import { history } from 'umi';
import { get_axios } from '@/utils/axios';

import { Carousel, Calendar, BackTop, Button, Affix } from 'antd';
import { Article } from './interface';

interface IProps {}
interface IState {
  articleList: Array<article>;
  local_menuListDetail: any;
}

interface article {
  date: any;
  introduce: any;
  title: any;
  id: any;
}
export default class index extends Component<IProps, IState> {
  state = {
    articleList: [],
    local_menuListDetail: null,
  };

  componentDidMount() {
    get_axios('/api/article/query', {}, {}).then((res: any) => {
      this.setState({
        articleList: res.data,
      });
    });
  }

  onMouseOverHandle = (local_menuListDetail: string) => {
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
    const { local_menuListDetail, articleList } = this.state;

    function onPanelChange(value: any, mode: any) {}

    return (
      <div id="pageContent" className={styles.pageContent}>
        <Affix>
          <HeaderLists />
        </Affix>

        <div className={styles.pageContent_content}>
          <div className={styles.content_conatiner}>
            {/* <div className={styles.content_left}>123</div> */}
            <div className={styles.content_center}>
              {/* 轮播图 */}
              {/* <Carousel >
                <img src={picture_1} alt="" />
                <img src={picture_1} alt="" />
                <img src={picture_1} alt="" />
                <img src={picture_1} alt="" />
              </Carousel> */}
              {articleList.map((article: Article) => {
                return <ArticleCard {...article}></ArticleCard>;
              })}
            </div>
            <div className={styles.content_right}>
              <div className={styles.card_aboutme}>
                <Avatar
                  className={styles.aboutme_avatar}
                  size={64}
                  icon={<UserOutlined />}
                />
                <div className={styles.aboutme_name}>我在北极吃火锅</div>
                <div className={styles.aboutme_introduce}>
                  岁月静好，日臻日善
                </div>

                <Button className={styles.aboutme_button}>加入书签</Button>
                <div className={styles.aboutme_link}>
                  <GithubOutlined style={{ color: 'black' }} />
                  <WechatOutlined style={{ color: 'green' }} />
                  <ZhihuOutlined style={{ color: 'rgb(4,103,246)' }} />
                  <AlipayCircleOutlined style={{ color: 'rgb(21,120,255)' }} />
                  <MailOutlined style={{ color: 'rgb(59,201,243)' }} />
                </div>
                <Button className={styles.aboutme_button}>了解更多</Button>
              </div>

              <Carousel
                className={styles.card_carousel}
                autoplay={true}
                dotPosition={'right'}
              >
                <div>
                  <div className={styles.carousel_1}>
                    <div className={styles.carousel_content}>
                      <p className={styles.title}>日记</p>
                      <p className={styles.content}>
                        做一个热爱生活的人，把生活记录下来。
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <div className={styles.carousel_2}>
                    <div className={styles.carousel_content}>
                      <p className={styles.title}>旅行</p>
                      <p className={styles.content}>
                        我认为旅行是从大自然学习的最佳方式。走遍世界，这是我最大的梦想。
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <div className={styles.carousel_3}>
                    <div className={styles.carousel_content}>
                      <p className={styles.title}>好好打代码</p>
                      <p className={styles.content}>每天都要学习！</p>
                    </div>
                  </div>
                </div>
              </Carousel>

              <Calendar
                className={styles.card_calendar}
                fullscreen={false}
                onPanelChange={onPanelChange}
              />

              {/* <div className={styles.card}>
                <h3>
                  <BookOutlined />
                  随笔
                </h3>
              </div> */}

              {/* <div className={styles.card}>
                <h3>
                  <TagsOutlined />
                  我的标签
                </h3>
                <div className={styles.myTag_area_lists}>
                  <div className={styles.myTag_area_list}>
                    <TagOutlined />
                    做饭
                  </div>
                  <div className={styles.myTag_area_list}>
                    <TagOutlined />
                    吃饭
                  </div>
                  <div className={styles.myTag_area_list}>
                    <TagOutlined />
                    吃饭
                  </div>
                  <div className={styles.myTag_area_list}>
                    <TagOutlined />
                    吃饭
                  </div>
                  <div className={styles.myTag_area_list}>
                    <TagOutlined />
                    吃饭
                  </div>
                  <div className={styles.myTag_area_list}>
                    <TagOutlined />
                    吃饭
                  </div>
                  <div className={styles.myTag_area_list}>
                    <TagOutlined />
                    吃饭
                  </div>
                  <div className={styles.myTag_area_list}>
                    <TagOutlined />
                    吃饭
                  </div>
                  <div className={styles.myTag_area_list}>
                    <TagOutlined />
                    吃饭
                  </div>
                  <div className={styles.myTag_area_list}>
                    <TagOutlined />
                    吃饭
                  </div>
                  <div className={styles.myTag_area_list}>
                    <TagOutlined />
                    吃饭
                  </div>
                </div>
              </div> */}
            </div>
            <BackTop />
          </div>
        </div>
      </div>
    );
  }
}
