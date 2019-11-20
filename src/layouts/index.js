import React from 'react'
import { connect } from 'dva'
import { Layout, Row, Col, Avatar } from 'antd'
import Menus from './components/Menus'

function BasicLayout(props) {
  // use hooks set a new state variable
  const { user } = props

  return (
    <Layout style={{
      height: "100%"
    }}>
      <Layout.Sider
        width="400">
        <Row
          type="flex"
          justify="center"
          align="middle"
          style={{
            height: "100%"
          }}>
          <Col span={24} style={{
            textAlign: "center"
          }}>
            <Avatar size={200} src={user.avatar_url} />
          </Col>
          <Col
            span={24}
            style={{
              padding: "0 50px",
              textAlign: "left"
            }}>
            <h1 style={{
              color: "#FFF",
              fontSize: "40px",
              marginBottom: "20px"
            }}>{user.name}</h1>
            <div style={{
              color: "rgb(255, 255, 255, 0.5)",
              fontSize: "20px",
              marginBottom: "20px"
            }}>{user.bio}</div>
            <Menus />
          </Col>
          <footer style={{
            position: "absolute",
            bottom: "20px",
            color: "#FFF",
            fontSize: "16px"
          }}>© 2019. All rights reserved.</footer>
        </Row>
      </Layout.Sider>
      <Layout>
        <Layout.Content
          style={{
            display: 'flex',
            padding: '20px',
            background: '#FFF'
          }}>
            <div style={{
              flex: 1,
              overflowY: "auto",
              width: "100%"
            }}>
              { props.children }
            </div>
        </Layout.Content>
      </Layout>
    </Layout>
  );
}

function mapStateToProps(state) {
  const { user } = state.user
  return { user }
}


export default connect(mapStateToProps)(BasicLayout)
