/*
 * @Author: fuzhenghao
 * @Date: 2021-10-12 09:27:01
 * @LastEditTime: 2021-10-14 13:38:01
 * @LastEditors: fuzhenghao
 * @Description: 导航条
 * @FilePath: \myBlog_frontEnd\src\components\HeaderLists\index.tsx
 *
 */
import React, { Component } from 'react';
import styles from './index.less';

type IList = {
  title: String;
  icon?: React.ReactElement;
  color?: String;
  childrenList?: Array<any>;
  link?: String;
};

type IProps = Readonly<{
  headerLeftLists?: Array<IList>;
  headerRightLists?: Array<IList>;
}>;

type IState = Readonly<{}>;

export default class index extends Component<IProps, IState> {
  state: IState = {};

  onMouseOverHandle = (local_menuListDetail: string) => {
    console.log(local_menuListDetail);
  };

  onMouseLeaveHandle = () => {
    this.setState({
      local_menuListDetail: null,
    });
  };
  render() {
    return (
      <div className={styles.pageContent_header}>
        <div className={styles.header_container}>
          {this.props?.headerLeftLists && (
            <div className={styles.menuLists}>
              {this.props?.headerLeftLists.map((headerLeftList) => {
                return (
                  <div
                    onMouseOver={this.onMouseOverHandle.bind(
                      this,
                      headerLeftList.title as string,
                    )}
                    onMouseLeave={this.onMouseLeaveHandle}
                    className={styles.menuArea}
                  >
                    {headerLeftList.icon}
                    <p style={{ color: headerLeftList.color }}>
                      {headerLeftList.title}
                    </p>
                  </div>
                );
              })}
            </div>
          )}
          {this.props?.headerRightLists && (
            <div className={styles.badgeLists}>
              {this.props?.headerRightLists.map((headerRightList) => {
                return (
                  <div className={styles.badgeArea}>
                    {headerRightList.icon}

                    <a
                      target="_blank"
                      href={headerRightList.link as string}
                      style={{ color: 'rgb(0,0,0)' }}
                    >
                      {headerRightList.title}
                    </a>
                  </div>
                );
              })}
            </div>
          )}

          {/* {local_menuListDetail && (
          <div className={styles.menuListDetail}>{local_menuListDetail}</div>
        )} */}
        </div>
      </div>
    );
  }
}
