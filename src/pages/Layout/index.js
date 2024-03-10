import React, { useState } from 'react'
import {useNavigate,Outlet} from 'react-router-dom'
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
} from '@ant-design/icons'
import { Layout, Menu, Button, theme } from 'antd'
import './index.scss'
const { Header, Sider, Content } = Layout
const ManagementLayout = () => {

  const [collapsed, setCollapsed] = useState(false)

  //router
  const navigate=useNavigate()

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken()
  const items2 = [
    {
      key: `/dashboard`,
      label: `Dashboard`,
      icon: <UserOutlined />,
    },
    {
      key: `/products`,
      label: `Products`,
      icon: <UserOutlined />,
      children: [{ key: `/products/`, label: `Home` ,onClick:()=>{console.log(23)}}],
    },
    {
      key: `/orders`,
      label: `Orders`,
      icon: <UserOutlined />,
      children: [{ key: `/orders/`, label: `Home` }],
    },

    {
      key: `/users`,
      label: `Users`,
      icon: <UserOutlined />,
      children: [{ key: `/users/`, label: `Home` }],
    },
    {
      key: `/notification`,
      label: `Notification`,
      icon: <UserOutlined />,
    },
  ]


  const onMenuClick =e=>{
    console.log(e);
    navigate(e.key)
  }
  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical" />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']} items={items2} onClick={e=>onMenuClick(e)}/>
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}>
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              width: 64,
              height: 64,
            }}
          />
        </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}>
          <Outlet/>
        </Content>
      </Layout>
    </Layout>
  )
}
export default ManagementLayout
