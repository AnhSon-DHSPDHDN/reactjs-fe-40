import { Table } from 'antd';
import './style.scss'

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
  }
];

const data = [
  {
    id: 1,
    name: 'John Brown',
    score: 9,
  },
]

const ListStudent = () => {
  return <div className='list-st-container'>
    <Table columns={columns} dataSource={data} rowKey={"id"}></Table>
  </div>
}

export default ListStudent
