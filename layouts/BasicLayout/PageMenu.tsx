import * as React from 'react';

import {Icon, Menu, Layout} from "antd";

const {Sider} = Layout;
const SubMenu = Menu.SubMenu;

class PageMenu extends React.PureComponent {
  state = {
    collapsed: false,
  };

  onCollapse = (collapsed: boolean) => {
    this.setState({collapsed});
  };

  render() {
    return (
      <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
        <div style={{height: "32px", margin: "16px", background: "#fff"}}/>
        <Menu theme="dark" defaultSelectedKeys={['users']} mode="inline">
          <SubMenu
            key="sub1"
            title={
              <span>
                  <Icon type="user"/>
                  <span>用户管理</span>
                </span>
            }
          >
            <Menu.Item key="users">用户列表</Menu.Item>
          </SubMenu>
          <SubMenu
            key="sub2"
            title={
              <span>
                  <Icon type="team"/>
                  <span>Team</span>
                </span>
            }
          >
            <Menu.Item key="6">Team 1</Menu.Item>
            <Menu.Item key="8">Team 2</Menu.Item>
          </SubMenu>
        </Menu>
      </Sider>
    )
  }
}

export default PageMenu;
