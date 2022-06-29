/*
 * @Author: fuzhenghao
 * @Date: 2022-06-07 13:49:22
 * @LastEditTime: 2022-06-29 20:15:42
 * @LastEditors: fuzhenghao
 * @Description:
 * @FilePath: \myBlog_frontEnd\src\components\ArticleCard\index.tsx
 */
import { Article } from '@/pages/pageContent/interface';
import { history } from 'umi';
import styles from './index.less';
import moment from 'moment';
import { Tag } from 'antd';

export default (props: Article) => {
  const check_article_detail = (article: Article) => {
    history.push({
      pathname: `/articlePage`,
      query: {
        id: article.file.id,
      },
      state: {
        title: props.title,
      },
    });
  };
  return (
    <div
      onClick={() => {
        check_article_detail(props);
      }}
      className={styles.article}
    >
      <div className={styles.article_head}>
        <div className={styles.article_title}>{props.title}</div>
        <div className={styles.article_time}>
          {moment(props.create_at).format('YYYY-MM-DD hh:MM:SS')}
        </div>
      </div>
      <div className={styles.articleSeries}>
        {props.articleSeries.map((item) => {
          return <Tag color="magenta">{item.title}</Tag>;
        })}
      </div>

      <div className={styles.article_introduce}>{props.introduce}</div>
    </div>
  );
};
