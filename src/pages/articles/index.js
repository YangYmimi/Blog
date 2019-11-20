import React, { useState } from 'react'
import { connect } from 'dva'
import HotTags from './components/HotTags'
import Article from './components/Article'
import { mapObj } from '../../utils/lodash-helps'

function Articles(props) {
  const { list } = props
  const [labelTags, setLabelTags] = useState([])
  const [dateTags, setDateTags] = useState([])

  const handleTagSelectedChanged = (field, selectedTags = []) => {
    switch (field) {
      case 'labels':
        setLabelTags(selectedTags)
        break
      case 'created_at':
        setDateTags(selectedTags)
        break
      default:
        break
    }
  }

  const filter = (tags = [], date = []) => {
    return list.filter((item) => {
      const hasTag = tags.length > 0 ? item.labels.some((every) => { // 利用 `Array.prototype.some()` 只要有一个 tags 在就返回 true
        return tags.includes(every)
      }) : true
      const hasDate = date.length > 0 ? date.includes(item.created_at) : true
      return hasTag && hasDate
    })
  }

  return (
    <div>
      <HotTags
        label="时间线"
        tags={Array.from(new Set(mapObj(list, 'created_at')))}
        onTagSelectedChanged={(selectedTags) => handleTagSelectedChanged('created_at', selectedTags)} />
      <HotTags
        label="标签"
        tags={Array.from(new Set(mapObj(list, 'labels').flat(1).sort()))}
        onTagSelectedChanged={(selectedTags) => handleTagSelectedChanged('labels', selectedTags)} />
      <div style={{
        borderTop: "1px solid #d9d9d9",
        padding: "10px 0",
        columnCount: 5
      }}>
        {
          filter(labelTags, dateTags).map((item) => (
            <Article
              key={item.aId}
              title={item.title}
              author={item.author}
              date={item.created_at}
              labels={item.labels}
              url={item.url} />
          ))
        }
      </div>
    </div>
  )
}

function mapStateToProps(state) {
  return { list: state.articles.list }
}

export default connect(mapStateToProps)(Articles)
