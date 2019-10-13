import * as React from 'react';
import {Layout} from 'antd';
import PageMenu from './PageMenu';
import PageHeader from './PageHeader';

const {Header, Content, Footer} = Layout;

const BasicLayout: React.FunctionComponent = ({children}) => (
  <Layout>
    <PageMenu/>
    <Layout>
      <Header>
        <PageHeader/>
      </Header>
      <Content style={{margin: '16px'}}>
        {children}
      </Content>
      <Footer style={{textAlign: 'center'}}>Ant Design ©2018 Created by Ant UED</Footer>
    </Layout>
  </Layout>
);

export default BasicLayout;
