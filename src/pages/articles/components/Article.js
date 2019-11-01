import IconFont from '../../../components/IconFont'

function Article(props) {
  const { author, title, tags, url, created } = props

  return (
    <div style={{
      width: "48%",
      borderBottom: "1px dotted #DDD",
      paddingBottom: "15px",
      margin: "0 1% 15px 0"
    }}>
      <a href={url} target="_blank" style={{
        fontSize: "16px",
        fontWeight: "bold",
        color: "#333"
      }} rel="noopener noreferrer" >{ title }</a>

      <div style={{
        display: "flex",
        fontSize: "12px",
        marginTop: "10px"
      }}>
        <div style={{
          marginRight: "20px"
        }}>
          <IconFont type="rblog-user" style={{
            marginRight: "5px"
          }} />
          <span>{ author }</span>
        </div>

        <div style={{
          marginRight: "10px"
        }}>
          <IconFont type="rblog-date" style={{
            marginRight: "5px"
          }} />
          <span>{ created }</span>
        </div>
      </div>

      <div style={{
        fontSize: "12px",
        textDecoration: "underline",
        cursor: "pointer",
        marginTop: "10px"
      }}>
        <IconFont type="rblog-tags" style={{
          marginRight: "5px"
        }} />
        {
          tags.map((tag) => {
            return (
              <span style={{
                marginRight: "8px"
              }}>{ tag }</span>
            )
          })
        }
      </div>
    </div>
  );
}

export default Article
