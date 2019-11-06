import React, { useState } from 'react'
import { connect } from 'dva'
import { Layout, Menu, Icon, Avatar } from 'antd'
import Link from 'umi/link'

function BasicLayout(props) {
  // use hooks set a new state variable
  const { user } = props
  const [ siderCollapsed, setSiderCollapsed ] = useState(false)

  console.log(user)

  return (
    <Layout style={{
      height: '100%'
    }}>
      <Layout.Sider
        collapsible
        trigger={null}
        collapsed={siderCollapsed}>
        <div style={{
          height: "32px",
          background: "rgba(255, 255, 255, 0.2)",
          margin: "16px"
        }}></div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['ARTICLES']}>
          <Menu.Item key="ARTICLES">
            <Link to="/articles">
              <Icon type="book" />
              <span>最新博文</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="ARCHIVES">
            <Icon type="container" />
            <span>文章存档</span>
          </Menu.Item>
          <Menu.Item key="ABOUTME">
            <Link to="/aboutme">
              <Icon type="user" />
              <span>关于自己</span>
            </Link>
          </Menu.Item>
        </Menu>
      </Layout.Sider>
      <Layout>
        <Layout.Header style={{
          background: '#FFF',
          padding: '0 16px',
        }}>
          <Icon
            type={siderCollapsed ? 'menu-unfold' : 'menu-fold'}
            onClick={() => setSiderCollapsed(!siderCollapsed)}
            style={{
              fontSize: '18px',
              lineHeight: '64px',
              cursor: 'pointer',
            }} />
          <div style={{
            float: 'right'
          }}>
            <Avatar
              size="large"
              shape="circle"
              src={user.avatar_url} />
          </div>
        </Layout.Header>
        <Layout.Content
          style={{
            display: 'flex',
            margin: '24px 16px',
            padding: 24,
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
