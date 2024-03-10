import React, { useEffect, useState } from 'react'
import { Space, Table, Tag } from 'antd'
import { getOrderList } from '../../apis/user'
import _ from 'lodash'
const columns = [
  {
    title: 'ID',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
    render: text => {
      const arr = { 1: '處理中', 2: '已發貨', 3: '已完成' }

      return <a>{arr[text]}</a>
    },
  },
  {
    title: 'Total',
    dataIndex: 'total',
    key: 'total',
    render: text => <a>{text || 0}</a>,
  },
  {
    title: 'Paid_time',
    dataIndex: 'paid_time',
    key: 'paid_time',
    render: text => <a>{text}</a>,
  },
  {
    title: 'Cartcomplete',
    dataIndex: 'cartcomplete',
    key: 'cartcomplete',
    render: bool => <a>{bool ? '訂單' : '購物車'}</a>,
  },
  {
    title: 'Voucher',
    dataIndex: 'voucher',
    key: 'voucher',
    render: text => <a>{text || '沒有'}</a>,
  },

  {
    title: 'Action',
    key: 'action',
    dataIndex: 'id',
    render: id => (
      <Space size="middle">
        <a href={`/orders/edit?id=${id}`}>Edit</a>
        <a href={`/orders/delete?id=${id}`}>Delete</a>
      </Space>
    ),
  },
]
const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sydney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
]

const Order = () => {
  const [orderList, setOrderList] = useState(data)
  useEffect(() => {
    ;(async () => {
      const res = await getOrderList()
      console.log(res)
      const arr = res.data

      setOrderList(_.orderBy(arr.map(item => {
        item.key = item.id
        return item
      }),item=>item.id,'desc')
        
      )
    })()
  }, [])
  const onClick = e => {
    console.log(e)
  }
  return <Table columns={columns} dataSource={orderList} onClick={onClick} />
}

export default Order
