import Label from './Label'

function Article(props) {
  const { author, title, date, labels, url } = props

  return (
    <div style={{
      width: "256px",
      padding: "10px",
      marginBottom: "20px",
      background: "#FFF",
      breakInside: "avoid",
      boxSizing: "border-box",
      borderRadius: "3px",
      boxShadow: "0 3px 3px rgba(0,0,0,.02), 0 8px 8px rgba(0,0,0,.02)" // ref: https://huaban.com
    }}>
      <div>
        <div style={{
          color: "rgba(0, 0, 0, .45)",
          marginBottom: "5px"
        }}>
          <span style={{
            marginRight: "10px"
          }}>{author}</span>
          <span>{date}</span>
        </div>
        {
          labels.map((label) => (
            <Label key={label} title={label} />
          ))
        }
      </div>
      <a href={url} target="_blank" rel="noopener noreferrer">{title}</a>
    </div>
  )
}

export default Article
