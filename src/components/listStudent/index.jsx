import { Button, Popconfirm, Table } from 'antd';
import './style.scss'

const ListStudent = ({
  studentsList,
  handleDeleteStudent,
  handleClickEditStudent
}) => {
  const columns = [
    {
      title: 'Full Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Score',
      dataIndex: 'score',
      key: 'score',
    },
    {
      title: "Action",
      dataIndex: "action",
      key: 'action',
      render: (_, record) => {
        return <div>
          <Button type='primary' onClick={() => handleClickEditStudent(record)}>Edit</Button>
          <Popconfirm
            title="Do you want delete?"
            onConfirm={() => handleDeleteStudent(record.id)}
          >
            <Button type='dashed'>Delete</Button>
          </Popconfirm>
        </div>
      }
    }
  ];

  return <div className='list-st-container'>
    <Table columns={columns} dataSource={studentsList} rowKey={"id"}></Table>
  </div>
}

export default ListStudent
