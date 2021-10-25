import React, { Component } from 'react';
import { DragModal } from '../index';
import { Button } from 'antd';
export default class index extends Component {
  render() {
    const { visible } = this.props;
    return (
      <DragModal
        className="md-md2"
        title="新增"
        width={800}
        destroyOnClose={true}
        maskClosable={false}
        visible={visible}
        // onCancel={this.hideModal}
        footer={[
          <Button key="addCancelKey" onClick={this.hideModal}>
            关闭
          </Button>,
        ]}
        visible={visible}
      >
        123456
      </DragModal>
    );
  }
}
