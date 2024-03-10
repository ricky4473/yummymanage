import React, { useEffect, useState } from 'react'
import { Space, Table, Tag } from 'antd'
import { getUserList } from '../../apis/user'
const columns = [
  {
    title: 'Email',
    dataIndex: 'email',
    key: 'Email',
  },
  {
    title: 'First Name',
    dataIndex: 'first_name',
    key: 'firstName',
    render: text => <a>{text}</a>,
  },
  {
    title: 'Last Name',
    dataIndex: 'last_name',
    key: 'lastName',
    render: text => <a>{text}</a>,
  },

  {
    title: 'Action',
    key: 'action',
    dataIndex:'id',
    render: (id) => (
      <Space size="middle">
        <a href={`/users/edit?id=${id}`}>Edit</a>
        <a href={`/users/delete?id=${id}`}>Delete</a>
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

const User = () => {
  const [userList, setUserList] = useState(data)
  useEffect(() => {
    ;(async () => {
      const res = await getUserList()
      console.log(res)
      const arr = res.data

      setUserList(
        arr.map(item => {
          item.key = item.id
          return item
        })
      )
    })()
  }, [])
const onClick=(e)=>{
  console.log(e);
}
  return <Table columns={columns} dataSource={userList} onClick={onClick} />
}

export default User
