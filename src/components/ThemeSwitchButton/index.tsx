import { Fragment } from 'react';
import { Button, ConfigProvider } from 'antd';
/*
 * @Author: fuzhenghao
 * @Date: 2022-06-29 14:29:35
 * @LastEditTime: 2022-06-29 18:52:04
 * @LastEditors: fuzhenghao
 * @Description:
 * @FilePath: \myBlog_frontEnd\src\components\ThemeSwitchButton\index.tsx
 */
export default () => {
  const onColorChange = () => {
    const theme = {
      primaryColor: '#25B864',
      errorColor: '#1890ff',
      warningColor: '#faad14',
      successColor: '#52c41a',
      infoColor: '#1890ff',
    };
    let newTheme: Partial<typeof theme> = { ...theme };
    // ConfigProvider.config(newTheme);
  };

  return (
    <Fragment>
      <Button
        type="primary"
        onClick={() => {
          onColorChange();
        }}
      >
        123
      </Button>
      <span style={{ color: 'var(--ant-error-color)' }}>
        var(`--ant-error-color`)
      </span>
    </Fragment>
  );
};
