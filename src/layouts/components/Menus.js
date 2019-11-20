import { Row, Col } from 'antd'
import Link from 'umi/link'

function Menus(props) {
  return (
    <Row
      type="flex"
      justify="center"
      align="middle"
      gutter={[10, 10]}>
      <Col span={24}>
        <Link to="/about-me">
          <span>关于我</span>
        </Link>
      </Col>
      <Col span={24}>
        <Link to="/articles">
          <span>文章列表</span>
        </Link>
      </Col>
    </Row>
  )
}

export default Menus
