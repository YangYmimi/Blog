import { connect } from 'dva'
import { List } from 'antd'
import IconFont from '../../components/IconFont'
// import Article from './components/Article'

function Articles(props) {
  const { list } = props

  // Generate
  const popularTags = (labels) => {
    return labels.map((label) => {
      return label.name
    }).join(', ')
  }

  const IconText = ({ type, text }) => (
    <span>
      <IconFont type={type} style={{ marginRight: 10 }} />
      {text}
    </span>
  );

  return (
    <List
      itemLayout="vertical"
      size="large"
      pagination={{
        pageSize: 10
      }}
      dataSource={list}
      renderItem={(article) => {
        return (
          <List.Item
            key={article.id}
            actions={[
              <IconText type="rblog-user" text={article.user.login} key="list-vertical-user" />,
              <IconText type="rblog-date" text={article.created_at} key="list-vertical-date" />,
              <IconText type="rblog-tags" text={popularTags(article.labels)} key="list-vertical-tags" />
            ]}
            style={{
              cursor: "default"
            }}>
            <List.Item.Meta title={<a href={article.html_url}>{article.title}</a>} />
          </List.Item>
        )
      }}
      style={{
        padding: "10px"
      }}>
    </List>
    // <div style={{
    //   display: "flex",
    //   flexWrap: "wrap"
    // }}>
    //   {
    //     articles.map((item) => {
    //       return (
    //         <Article
    //           key={item.id}
    //           author={item.user.login}
    //           title={item.title}
    //           tags={popularTags(item.labels)}
    //           url={item.html_url}
    //           created={item.created_at}></Article>
    //       )
    //     })
    //   }
    // </div>
  )
}

function mapStateToProps(state) {
  const { list, total } = state.articles
  return { list, total }
}


export default connect(mapStateToProps)(Articles)
