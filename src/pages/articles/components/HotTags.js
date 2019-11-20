import React, { useState } from 'react'
import { Tag } from 'antd'

function HotTags(props) {
  const { label, tags, onTagSelectedChanged } = props
  const [selectedTags, setSelectedTags] = useState([])

  const handleChange = (curTag, checked) => {
    const newSelected = checked ? [...selectedTags, curTag] : selectedTags.filter(t => t !== curTag) // in case of async
    setSelectedTags(newSelected)
    onTagSelectedChanged(newSelected)
  }

  return (
    <div style={{
      display: "flex",
      color: "rgba(0, 0, 0, 0.65)",
      fontSize: "16px",
      padding: "10px 0"
    }}>
      <label style={{
        minWidth: "80px",
        fontWeight: "bold"
      }}>{label}</label>
      {
        tags.map((tag) => (
          <Tag.CheckableTag
            key={tag}
            checked={selectedTags.includes(tag)}
            onChange={checked => handleChange(tag, checked)}>{tag}</Tag.CheckableTag>
        ))
      }
    </div>
  )
}

export default HotTags
