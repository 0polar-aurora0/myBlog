/*
 * @Author: fuzhenghao
 * @Date: 2021-10-12 09:27:01
 * @LastEditTime: 2022-06-29 14:32:49
 * @LastEditors: fuzhenghao
 * @Description: 导航条
 * @FilePath: \myBlog_frontEnd\src\components\HeaderLists\index.tsx
 *
 */
import React, { Component } from 'react';
import { history } from '_umi@3.5.20@umi';
import ThemeSwitchButton from '../ThemeSwitchButton';
import styles from './index.less';
let header_logo = require('@/assets/images/header_logo.png');

type routeLink = {
  routePath: string;
  routeData?: {} | null | undefined;
};

type IList = {
  title: String;
  icon?: React.ReactElement;
  color?: String;
  childrenList?: Array<any>;
  link?: String | routeLink;
};

type IProps = Readonly<{
  headerLeftLists?: Array<IList>;
  headerRightLists?: Array<IList>;
}>;

type IState = Readonly<{}>;

export default class index extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {};
  }

  onMouseOverHandle = (local_menuListDetail: string) => {};

  onMouseLeaveHandle = () => {
    this.setState({
      local_menuListDetail: null,
    });
  };
  render() {
    return (
      <div className={styles.pageContent_header}>
        <img src={header_logo} alt="" />
        {/* <div className={styles.header_logo}>
        </div> */}
        <div className={styles.header_content}>
          <ThemeSwitchButton></ThemeSwitchButton>
        </div>
      </div>
    );
  }
}
