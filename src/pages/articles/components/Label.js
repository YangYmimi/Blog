import { Tag } from 'antd'

function Label(props) {
  const { title } = props

  return (
    <Tag
      color="#108ee9"
      style={{
        marginBottom: "5px"
      }}>{title}</Tag>
  )
}

export default Label
