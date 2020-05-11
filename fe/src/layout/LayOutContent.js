import React from "react";
import { Layout, Menu, Breadcrumb } from "antd";
import {
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
  DatabaseOutlined
} from "@ant-design/icons";
// import './index.css'; //引入CSS
import './index.scss'; //引入scss。注意react样式有独立作用域。需要zaiwebpack设置，网上搜索下资料看看。
import {NavLink} from 'react-router-dom'
import RouterComp from '@/router'

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

export default class LayOutContent extends React.Component {
  //名字改成自己起的,并加上export defualt，将组件导出。另外不要忘记最上面import React from 'react'
  state = {
    collapsed: false,
  };

  onCollapse = (collapsed) => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  render() {
    return (
      <Layout style={{ minHeight: "100vh" }}>
        <Sider
          collapsible
          collapsed={this.state.collapsed}
          onCollapse={this.onCollapse}
        >
          {/* <div className="logo" /> */}
          <div className="logo logoImg">
              <img alt="mylogo" src="https://p9.pstatp.com/large/user-avatar/9f41708bb6779b633061ebec7a4e0d44" />
          </div>
          <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
            <Menu.Item key="1" icon={<PieChartOutlined />}>
              <NavLink to="/home">首页</NavLink>
            </Menu.Item>

            <SubMenu key="sub1" icon={<UserOutlined />} title="数据管理">
              <Menu.Item key="2">
                <NavLink to="/shop_list">店铺列表</NavLink>
              </Menu.Item>
            </SubMenu>

            <SubMenu key="sub2" icon={<DatabaseOutlined />} title="添加数据">
              <Menu.Item key="3">
                <NavLink to="/shop_add">添加店铺</NavLink>
              </Menu.Item>
            </SubMenu>

            <SubMenu key="sub3" icon={<TeamOutlined />} title="图表">
              <Menu.Item key="4">
                <NavLink to="/chart">用户分布</NavLink>
              </Menu.Item>
            </SubMenu>

            <SubMenu key="sub4" icon={<TeamOutlined />} title="编辑">
              <Menu.Item key="5">
                <NavLink to="/edit">用户编辑</NavLink>
              </Menu.Item>
            </SubMenu>

            <SubMenu key="sub5" icon={<TeamOutlined />} title="设置">
              <Menu.Item key="6">
                <NavLink to="/setting">设置</NavLink>
                </Menu.Item>
            </SubMenu>
            
            <Menu.Item key="7" icon={<FileOutlined />} >
              <NavLink to="/explain">说明</NavLink>
            </Menu.Item>

          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }} />
          <Content style={{ margin: "0 16px" }}>
            <Breadcrumb style={{ margin: "16px 0" }}>
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb>
              <RouterComp/>
          </Content>
          <Footer style={{ textAlign: "center" }}>
            copyright ©2020 Created by @职场大表姐
          </Footer>
        </Layout>
      </Layout>
    );
  }
}

// ReactDOM.render(<SiderDemo />, mountNode); 删除
