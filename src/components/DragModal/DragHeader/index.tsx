/*
 * @Author: fuzhenghao
 * @Date: 2021-10-25 13:49:24
 * @LastEditTime: 2021-10-25 17:20:32
 * @LastEditors: fuzhenghao
 * @Description:
 * @FilePath: \myBlog_frontEnd\src\components\DragModal\DragHeader\index.tsx
 */

import React from 'react';

interface updateTransform_Func {
  (source: string, subString: string): boolean;
}

interface Iprops {
  updateTransform: Function;
}

export default class DragHeader extends React.Component<Iprops> {
  static defaultProps = {
    //默认是移动children dom,覆盖该方法，可以把tranform行为同步给外部
    updateTransform: (transformStr, tx, ty, tdom) => {
      tdom.style.transform = transformStr;
    },
  };

  position = {
    startX: 0,
    startY: 0,
    dx: 0,
    dy: 0,
    tx: 0,
    ty: 0,
  };

  start = (event: MouseEvent) => {
    if (event.button != 0) {
      //只允许左键，右键问题在于不选择conextmenu就不会触发mouseup事件
      return;
    }
    document.addEventListener('mousemove', this.docMove);
    this.position.startX = event.pageX - this.position.dx;
    this.position.startY = event.pageY - this.position.dy;
  };

  docMove = (event: MouseEvent) => {
    const tx = event.pageX - this.position.startX;
    const ty = event.pageY - this.position.startY;
    const transformStr = `translate(${tx}px,${ty}px)`;
    this.props.updateTransform(transformStr, tx, ty, this.tdom);
    this.position.dx = tx;
    this.position.dy = ty;
  };

  docMouseUp = (event: MouseEvent) => {
    document.removeEventListener('mousemove', this.docMove);
  };

  componentDidMount() {
    this.tdom.addEventListener('mousedown', this.start);
    //用document移除对mousemove事件的监听
    document.addEventListener('mouseup', this.docMouseUp);
  }

  componentWillUnmount() {
    this.tdom.removeEventListener('mousedown', this.start);
    document.removeEventListener('mouseup', this.docMouseUp);
    document.removeEventListener('mousemove', this.docMove);
  }

  render() {
    const { children } = this.props;
    const newStyle = {
      ...children.props.style,
      cursor: 'move',
      userSelect: 'none',
    };
    return React.cloneElement(React.Children.only(children), {
      ref: (tdom) => {
        return (this.tdom = tdom);
      },
      style: newStyle,
    });
  }
}
