/*
 * @Author: fuzhenghao
 * @Date: 2021-09-29 09:29:29
 * @LastEditTime: 2021-09-29 16:25:51
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
  MailOutlined,
  AppstoreOutlined,
  SettingOutlined,
} from '@ant-design/icons';

import { Menu } from 'antd';

import styles from './index.less';

const { SubMenu } = Menu;

export default class index extends Component {
  state = {
    current: 'mail',
  };

  handleClick = (e: { key: any }) => {
    console.log('click ', e);
    this.setState({ current: e.key });
  };
  render() {
    const { current } = this.state;
    return (
      <div className={styles.pageContent}>
        <div className={styles.pageContent_header}>
          <Menu
            onClick={this.handleClick}
            selectedKeys={[current]}
            mode="horizontal"
          >
            <Menu.Item key="mail" icon={<MailOutlined />}>
              Navigation One
            </Menu.Item>
            <Menu.Item key="app" disabled icon={<AppstoreOutlined />}>
              Navigation Two
            </Menu.Item>
            <SubMenu
              key="SubMenu"
              icon={<SettingOutlined />}
              title="Navigation Three - Submenu"
            >
              <Menu.ItemGroup title="Item 1">
                <Menu.Item key="setting:1">Option 1</Menu.Item>
                <Menu.Item key="setting:2">Option 2</Menu.Item>
              </Menu.ItemGroup>
              <Menu.ItemGroup title="Item 2">
                <Menu.Item key="setting:3">Option 3</Menu.Item>
                <Menu.Item key="setting:4">Option 4</Menu.Item>
              </Menu.ItemGroup>
            </SubMenu>
            <Menu.Item key="alipay">
              <a
                href="https://ant.design"
                target="_blank"
                rel="noopener noreferrer"
              >
                Navigation Four - Link
              </a>
            </Menu.Item>
          </Menu>
          <div className={styles.badgeLists}>
            <div className={styles.badgeArea}>
              <GithubOutlined style={{ fontSize: '16px' }} />
              <p>Github</p>
            </div>
            <div className={styles.badgeArea}>
              <YoutubeOutlined
                style={{ fontSize: '16px', color: 'rgb(251 114 153)' }}
              />
              <p>bilibili</p>
            </div>
            <div className={styles.badgeArea}>
              <SketchOutlined style={{ fontSize: '16px' }} />
              <p>掘金</p>
            </div>
            <div className={styles.badgeArea}>
              <ZhihuOutlined
                style={{ fontSize: '16px', color: 'rgb(56, 103, 233)' }}
              />
              <p>知乎</p>
            </div>
            <div className={styles.badgeArea}>
              <WechatOutlined
                style={{ fontSize: '16px', color: 'rgb(47 239 34)' }}
              />
              <p>微信</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
