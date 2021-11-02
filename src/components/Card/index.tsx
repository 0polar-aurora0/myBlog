/*
 * @Author: fuzhenghao
 * @Date: 2021-10-09 14:56:21
 * @LastEditTime: 2021-11-02 15:24:42
 * @LastEditors: fuzhenghao
 * @Description:
 * @FilePath: \myBlog_frontEnd\src\components\Card\index.tsx
 *
 */
import React, { Component } from 'react';
import styles from './index.less';
import { Property } from 'cssType';

interface IProps {
  type: string;
  className?: string;
  title?: string;
  card_description: string;
  onClick?: React.MouseEventHandler<any>;
  card_backgroud_image: Property.BackgroundImage;
  spin?: boolean;
  style?: React.CSSProperties;
}

interface IState {
  card_status: 'move' | 'move_before';
}

export default class index extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      card_status: 'move_before',
    };
  }
  render() {
    const { card_status } = this.state;
    const { card_backgroud_image, card_description } = this.props;
    return (
      <div
        onMouseEnter={() => {
          this.setState({
            card_status: 'move',
          });
        }}
        onMouseLeave={() => {
          this.setState({
            card_status: 'move_before',
          });
        }}
        className={`${card_status === 'move' ? styles.card_swicth : ''} ${
          styles.card
        }`}
      >
        <div
          style={{ backgroundImage: card_backgroud_image }}
          className={styles.card_before}
        >
          {card_description}
        </div>
        <div className={styles.card_back}></div>
      </div>
    );
  }
}
