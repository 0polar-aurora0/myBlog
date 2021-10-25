/*
 * @Author: fuzhenghao
 * @Date: 2021-10-25 17:20:46
 * @LastEditTime: 2021-10-25 17:33:09
 * @LastEditors: fuzhenghao
 * @Description:
 * @FilePath: \myBlog_frontEnd\src\components\DragModal\aaa.tsx
 */
class BuildTitle extends React.Component {
  updateTransform = (transformStr) => {
    this.modalDom.style.transform = transformStr;
  };
  componentDidMount() {
    const modalList = document.getElementsByClassName('ant-modal'); //modal的class是ant-modal
    this.modalDom = modalList[modalList.length - 1];
  }
  render() {
    const { title } = this.props;
    return (
      <DragHeader updateTransform={this.updateTransform}>
        <div>{title}</div>
      </DragHeader>
    );
  }
}
