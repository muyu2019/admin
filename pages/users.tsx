import * as React from 'react'
import {Table} from 'antd';
import BasicLayout from "../layouts/BasicLayout";

const {Column} = Table;

class Page extends React.PureComponent {
  render() {
    return (
      <BasicLayout>
        <Table
          rowKey="id"
          size="small"
          loading={false}
          dataSource={[]}
          scroll={{x: 2400}}
          // pagination={{
          //   current: filters.get('current'),
          //   pageSize: filters.get('pageSize'),
          //   total: list.get('total'),
          //   showSizeChanger: true,
          //   showQuickJumper: true, showTotal: (v) => `共 ${v} 条`,
          // }}
          // onChange={(pagination, filters, sorter) => {
          //   const {current, pageSize} = pagination;
          //   const {field, order} = sorter;
          //   listRequest({current, pageSize, field, order});
          // }}
        >
          <Column title="用户ID" dataIndex="id" align="center" sorter width={100} fixed="left"/>/>
          <Column title="用户名" dataIndex="username" fixed="left" width={150}/>
          <Column title="刷吃号" dataIndex="account_number" width={100}/>
          <Column title="操作" dataIndex="operation" align="center" width={100} fixed="right"/>
        </Table>
      </BasicLayout>
    )
  }
}

export default Page
