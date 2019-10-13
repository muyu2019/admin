import * as React from 'react';
import {Menu, Icon} from 'antd';

const SubMenu = Menu.SubMenu;

class PageHeader extends React.PureComponent {
  render() {
    return (
      <div>
        <Menu theme="dark"
              mode="horizontal">
          <SubMenu key="sub1" title={<span><Icon type="user"/><span>你好</span></span>}>
            <Menu.Item key="profile">账户信息</Menu.Item>
            <Menu.Item key="logout">退出</Menu.Item>
          </SubMenu>
        </Menu>
      </div>
    )
  }
}

export default PageHeader;
