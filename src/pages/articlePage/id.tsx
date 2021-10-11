/*
 * @Author: fuzhenghao
 * @Date: 2021-10-11 09:15:30
 * @LastEditTime: 2021-10-11 15:46:31
 * @LastEditors: fuzhenghao
 * @Description:
 * @FilePath: \myBlog_frontEnd\src\pages\articlePage\id.tsx
 *
 */
import React, { Component } from 'react';

export default class index extends Component {
  componentDidMount() {
    console.log(this.props.match.params);
  }
  render() {
    return <div>123</div>;
  }
}
